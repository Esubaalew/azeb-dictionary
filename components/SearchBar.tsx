'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch: (word: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto" role="search">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <label htmlFor="search-input" className="sr-only">Search for a word</label>
        <input
          type="search"
          id="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word..."
          className="w-full px-6 py-4 text-lg text-gray-900 bg-white border-2 border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-purple-600 dark:focus:ring-purple-400 shadow-lg transition-all duration-300 ease-in-out"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          disabled={!searchTerm.trim()}
          aria-label="Search"
        >
          <Search size={24} />
        </motion.button>
      </motion.div>
    </form>
  )
}

