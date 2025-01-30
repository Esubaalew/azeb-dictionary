'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { getEntries } from '@/app/api/dictionary'

interface RelatedWordsProps {
  word: string
}

export default function RelatedWords({ word }: RelatedWordsProps) {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true)
      const data = await getEntries(word)
      setEntries(data)
      setLoading(false)
    }

    fetchEntries()
  }, [word])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Related Words
        </h3>
        {isExpanded ? (
          <ChevronUp className="text-gray-600 dark:text-gray-400" />
        ) : (
          <ChevronDown className="text-gray-600 dark:text-gray-400" />
        )}
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {loading ? (
              <p className="text-gray-600 dark:text-gray-400">Loading related words...</p>
            ) : entries.length > 0 ? (
              <ul className="space-y-2">
                {entries.map((entry: any, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-purple-600 dark:text-purple-400">
                      {entry.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No related words found.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

