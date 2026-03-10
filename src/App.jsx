import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";

// Lazy Pages
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] selection:bg-primary/30">
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </div>
    </SmoothScroll>
  );
}

export default App;
