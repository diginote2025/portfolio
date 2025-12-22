"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function PuzzleGate() {
  const [message, setMessage] = useState("");
  const correctEmoji = "👑";

  const handleClick = (emoji) => {
    if (emoji === correctEmoji) {
      setMessage("✔ Correct. Access Granted...");
      setTimeout(() => {
        window.location.href = "/portfolio"; // <-- change route if needed
      }, 1400);
    } else {
      const responses = [
        "Nope 😅",
        "Not quite 😂",
        "Try again 👀",
        "Close... but not that 😆",
      ];
      setMessage(responses[Math.floor(Math.random() * responses.length)]);
    }
  };

  const emojis = ["🐟", "🦁", "👑", "🍌"];

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#111] via-[#222] to-[#000] flex flex-col justify-center items-center text-white gap-6 select-none">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-4xl font-light tracking-wide"
      >
        What does <span className="font-medium text-yellow-400">Raju</span> mean?
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-6 text-5xl md:text-6xl"
      >
        {emojis.map((emoji, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.3, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer transition-all"
            onClick={() => handleClick(emoji)}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-gray-300 mt-4"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
