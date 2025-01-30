'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg flex space-x-2"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${
          theme === 'light' ? 'bg-yellow-200 text-yellow-800' : 'text-gray-800 dark:text-gray-200'
        }`}
        aria-label="Light mode"
      >
        <Sun size={20} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${
          theme === 'dark' ? 'bg-indigo-200 text-indigo-800' : 'text-gray-800 dark:text-gray-200'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={20} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full ${
          theme === 'system' ? 'bg-green-200 text-green-800' : 'text-gray-800 dark:text-gray-200'
        }`}
        aria-label="System mode"
      >
        <Laptop size={20} />
      </motion.button>
    </motion.div>
  )
}

