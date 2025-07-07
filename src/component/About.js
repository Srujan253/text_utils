import React from 'react';
import { motion } from 'framer-motion';
import './landing.css';

export default function About() {
  return (
    <div className="landing-container" style={{minHeight:'80vh'}}>
      <motion.h1 
        className="landing-title"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        About <span style={{color:'#43c6ac'}}>Text Utils</span>
      </motion.h1>
      <motion.p 
        className="landing-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <b>Text Utils</b> is a playful, modern web app to help you maintain, modify, and control your text easily.<br/>
        <ul style={{textAlign:'left', margin:'1rem auto', maxWidth:'500px'}}>
          <li>Convert text to uppercase or lowercase instantly</li>
          <li>Remove extra spaces and copy text with one click</li>
          <li>Switch between light and dark mode for comfort</li>
          <li>Get instant word and character counts</li>
          <li>Enjoy a fun, animated UI powered by Framer Motion</li>
        </ul>
        <span style={{fontSize:'1.1rem'}}>Made with ❤️ for text lovers!</span>
      </motion.p>
    </div>
  );
}
