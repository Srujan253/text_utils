import React from 'react';
import { motion } from 'framer-motion';
import './landing.css';

export default function Landing({ onStart }) {
  return (
    <div className="landing-container">
      <motion.h1 
        className="landing-title"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        Welcome to <span style={{color:'#43c6ac'}}>Text Utils</span>!
      </motion.h1>
      <motion.p 
        className="landing-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Maintain, modify, and control your text with fun! <br/>
        Try out our powerful text utilities, switch between light and dark mode, and enjoy a playful experience.
      </motion.p>
      <motion.button 
        className="landing-cta"
        whileHover={{ scale: 1.1, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
      >
        Get Started
      </motion.button>
    </div>
  );
}
