import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const MistShader = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m; m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 a0 = x - floor(x + 0.5);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m * (1.79284291400159 - 0.85373472095314*(a0*a0+h*h)), g);
    }

    void main() {
      vec2 uv = vUv;
      float time = uTime * 0.06;

      // ── 1. HARD LIGHT CORE from right-center ──
      // Origin of the light burst
      vec2 lightOrigin = vec2(1.05, 0.48);
      float dist = distance(uv, lightOrigin);

      // Tight bright core
      float core = pow(max(0.0, 1.0 - dist * 1.6), 3.5);

      // Wide soft glow
      float glow = pow(max(0.0, 1.0 - dist * 0.85), 2.2);

      // ── 2. ANIMATED NOISE for volumetric smoke tendrils ──
      vec2 p = uv * 1.5;
      float n1 = snoise(p + vec2(time * 0.2, time * 0.1));
      float n2 = snoise(p * 2.5 + vec2(-time * 0.15, n1 * 0.3 + time * 0.1));
      float noise = n1 * 0.6 + n2 * 0.4;
      noise = noise * 0.5 + 0.5; // remap to [0,1]

      // ── 3. DIRECTIONAL MASK — light fans left from right edge ──
      // Strong on right, fading as it sweeps left and up/down
      float xFade = smoothstep(0.0, 1.0, uv.x);           // brighter on right
      float yFade = 1.0 - abs(uv.y - 0.5) * 1.6;          // centered vertically
      yFade = max(0.0, yFade);
      float dirMask = xFade * yFade;

      // Smoke tendrils only appear where the light reaches
      float smoke = pow(noise, 1.8) * dirMask;

      // ── 4. COLOR COMPOSITION ──
      vec3 black    = vec3(0.02, 0.02, 0.025);
      vec3 blueGray = vec3(0.35, 0.48, 0.72);   // cool blue-white mid
      vec3 white    = vec3(0.95, 0.97, 1.0);     // bright white core

      // Base = dark
      vec3 color = black;

      // Add wide blue atmospheric glow
      color = mix(color, blueGray, glow * 0.85);

      // Layer animated smoke over the glow region
      color = mix(color, blueGray * 1.2, smoke * glow * 1.4);

      // Add bright white core on top
      color = mix(color, white, core * 1.1);

      // Extra flare: hot white-blue center spike
      float spike = pow(max(0.0, 1.0 - dist * 3.5), 5.0);
      color += white * spike * 1.5;

      // Left edge stays fully black
      float leftFade = smoothstep(0.0, 0.45, uv.x);
      color = mix(black, color, leftFade);

      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const MistMesh = () => {
  const meshRef = useRef();
  const { size } = useThree();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
      meshRef.current.material.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={MistShader.vertexShader}
        fragmentShader={MistShader.fragmentShader}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

const LuminousMist = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <Canvas
        orthographic
        camera={{ left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 10 }}
        dpr={1}
        gl={{ alpha: true, antialias: false }}
      >
        <MistMesh />
      </Canvas>
    </div>
  );
};

export default LuminousMist;