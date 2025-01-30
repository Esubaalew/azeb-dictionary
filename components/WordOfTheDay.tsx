'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface WordOfTheDayProps {
  wordData: any
}

export default function WordOfTheDay({ wordData }: WordOfTheDayProps) {
  const [expanded, setExpanded] = useState(false)

  if (!wordData) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        Word of the Day
      </h3>
      {wordData.image && (
        <img src={wordData.image.src} alt={wordData.image.alt} className="w-full h-40 object-cover rounded-lg mb-4" />
      )}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{wordData.word}</h4>
        {expanded ? <ChevronUp className="text-gray-600 
dark:text-gray-400" /> : <ChevronDown className="text-gray-600 dark:text-gray-400" />}
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            {wordData.meanings.map((meaning: any, index: number) => (
              <div key={index}>
                <p className="text-gray-700 dark:text-gray-300">{meaning.definition}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {meaning.examples.map((example: string, exampleIndex: number) => (
                    <li key={exampleIndex} className="text-gray-600 dark:text-gray-400">{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

