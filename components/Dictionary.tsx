'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import SearchBar from './SearchBar'
import WordDefinition from './WordDefinition'
import WordOfTheDay from './WordOfTheDay'
import RelatedWords from './RelatedWords'
import LoadingSpinner from './LoadingSpinner'
import NoResults from './NoResults'
import Footer from './Footer'
import ThemeToggle from './ThemeToggle'
import { getDefinitions, getWordOfTheDay, getEntries } from '@/app/api/dictionary'

export default function Dictionary() {
  const [word, setWord] = useState('')
  const [definitions, setDefinitions] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [wordOfTheDay, setWordOfTheDay] = useState<any>(null)

  useEffect(() => {
    fetchWordOfTheDay()
  }, [])

  const fetchWordOfTheDay = async () => {
    const data = await getWordOfTheDay()
    setWordOfTheDay(data)
  }

  const handleSearch = async (searchWord: string) => {
    setWord(searchWord)
    setLoading(true)
    setHasSearched(true)
    try {
      const data = await getDefinitions(searchWord)
      setDefinitions(data || [])
    } catch (error) {
      console.error('Error fetching definitions:', error)
      setDefinitions([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <SearchBar onSearch={handleSearch} />
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LoadingSpinner />
              </motion.div>
            ) : hasSearched ? (
              definitions && definitions.length > 0 ? (
                <motion.div
                  key="definitions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <WordDefinition word={word} definitions={definitions} />
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <NoResults />
                </motion.div>
              )
            ) : (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  Welcome to Azeb's Futuristic Dictionary!
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">Explore the world of words with our cutting-edge interface.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="space-y-8">
          <WordOfTheDay wordData={wordOfTheDay} />
          {word && <RelatedWords word={word} />}
        </div>
      </div>
      <ThemeToggle />
      <Footer />
    </div>
  )
}

