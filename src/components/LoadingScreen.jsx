import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./LoadingScreen.css";

export const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const loadingMessages = [
    "Mempersiapkan data pertanian...",
    "Memuat informasi terkini...",
    "Menyambungkan ke database...",
    "Hampir selesai...",
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Message rotation
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 400);

    // Timer untuk finish
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, [onFinish, loadingMessages.length]);

  // Generate floating elements
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: i * 0.2,
  }));

  return (
    <div className="loading-overlay">
      {/* Floating background elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="floating-element"
          style={{
            top: el.top,
            left: el.left,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}

      {/* Modern Minimalist Loader - Choice 1: Circle Pulse (Default) */}
      <div className="loader-circle">
        <div className="loader-circle-spinner" />
        <div className="loader-circle-dot" />
      </div>

      {/* Alternative Loader - Uncomment to use bars instead */}
      {/* <div className="loader-bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> */}

      {/* Alternative Loader - Uncomment to use dots instead */}
      {/* <div className="loader-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}

      {/* Title */}
      <motion.h2 
        className="loading-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        DINAS PERTANIAN SUMATERA BARAT
      </motion.h2>

      {/* Subtitle with decorative lines */}
      <motion.div 
        className="loading-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        LOADING
      </motion.div>

      {/* Progress Bar */}
      <div className="loading-progress">
        <motion.div 
          className="loading-progress-bar"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Rotating Messages */}
      <AnimatePresence mode="wait">
        <motion.p 
          key={messageIndex}
          className="loading-message"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {loadingMessages[messageIndex]}
        </motion.p>
      </AnimatePresence>

      {/* Progress Percentage */}
      <motion.div 
        className="text-xs text-gray-400 mt-2 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.div>
    </div>
  );
};