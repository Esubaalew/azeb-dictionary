'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, Github, Linkedin, MessageCircle, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleInfoClick = () => {
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 5000) // Hide after 5 seconds
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 py-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 relative"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-lg font-semibold">
          © 2024 Azeb's Dictionary
        </h2>
        <div className="flex space-x-4">
          <Link href="https://github.com/esubaalew" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://t.me/esubaalew" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
            <MessageCircle size={20} />
            <span className="sr-only">Telegram</span>
          </Link>
          <Link href="https://www.linkedin.com/in/esubaalew" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://esube.com.et" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
            <Globe size={20} />
            <span className="sr-only">Website</span>
          </Link>
        </div>
        <button
          onClick={handleInfoClick}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
          aria-label="Project information"
        >
          <Info size={20} />
        </button>
      </div>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm max-w-md"
          >
            <p className="text-gray-700 dark:text-gray-300">
              This project is a tribute to my friend Azeb Mehrete — a very calm, patient, and top student in my class and group. It is dedicated to her admirable character, which is well-liked by all.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  )
}

