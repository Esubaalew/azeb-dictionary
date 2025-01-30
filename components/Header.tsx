import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8 flex flex-col items-center"
    >
      <Image src="/icon.svg" alt="Azeb's Dictionary Logo" width={80} height={80} className="mb-4" />
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Azeb's Dictionary
      </h1>
      <p className="mt-2 text-xl text-gray-300">Unlock the power of words</p>
    </motion.header>
  )
}

