'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface WordDefinitionProps {
  word: string
  definitions: any[]
}

export default function WordDefinition({ word, definitions }: WordDefinitionProps) {
  const [expandedExamples, setExpandedExamples] = useState<{ [key: number]: number[] }>({})

  const toggleExample = (defIndex: number, exIndex: number) => {
    setExpandedExamples(prev => {
      const defExamples = prev[defIndex] || []
      return {
        ...prev,
        [defIndex]: defExamples.includes(exIndex)
          ? defExamples.filter(i => i !== exIndex)
          : [...defExamples, exIndex]
      }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        {word}
      </h2>
      {definitions.map((definition, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="mb-6 last:mb-0 border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{definition.meaning}</h3>
          <ul className="space-y-2">
            {definition.examples.map((example: string, exIndex: number) => (
              <li key={exIndex} className="text-gray-600 dark:text-gray-300">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExample(index, exIndex)}
                >
                  <span className="font-medium">Example {exIndex + 1}</span>
                  {expandedExamples[index]?.includes(exIndex) ? (
                    <ChevronUp className="text-gray-600 dark:text-gray-400" size={16} />
                  ) : (
                    <ChevronDown className="text-gray-600 dark:text-gray-400" size={16} />
                  )}
                </div>
                <AnimatePresence>
                  {expandedExamples[index]?.includes(exIndex) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-4 border-l-2 border-purple-400 dark:border-purple-600"
                    >
                      {example}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}

