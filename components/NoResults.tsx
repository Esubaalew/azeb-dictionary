import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function NoResults() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg text-center"
    >
      <Search size={64} className="text-purple-600 dark:text-purple-400 mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">No results found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        We couldn't find any definitions for the word you're looking for.
      </p>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      >
        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Try another word or check your spelling
        </p>
      </motion.div>
    </motion.div>
  )
}

