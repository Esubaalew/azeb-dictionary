import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-40">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full"
      />
    </div>
  )
}

