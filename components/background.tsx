
"use client";

import { motion } from "framer-motion";
import "./background.css";

export default function Background() {
  return (
    <div className="animated-background" aria-hidden="true">
      <motion.div
        className="background-orb orb-one"
        animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-orb orb-two"
        animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
