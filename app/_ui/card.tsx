'use client'

import { IconBookmark, IconBookmarkFilled, IconDiscountCheckFilled, IconHeart } from "@tabler/icons-react"
import { useState } from "react"
import { motion } from 'framer-motion'

export default function Card() {
  const [selected, setSelected] = useState(false)
  
  return (
    <div className="space-y-1">
      <div className="px-3 pt-3 pb-16 bg-hero rounded-lg space-y-1 relative">
        <div className="bg-neutral-950/75 w-fit flex items-center gap-1 p-1 rounded-sm">
          <IconDiscountCheckFilled size='17px' className="text-cyan-400" />
          <span className="text-xs text-white font-extrabold">
            dqv
          </span>
        </div>
        <time className="bg-neutral-950/75 text-xs text-neutral-300 font-medium italic rounded-sm p-1 flex w-fit">
          9/1/2024
        </time>

        <div className="absolute bottom-3 right-3 flex items-center">
          <motion.button 
            whileTap={{ scale: 1.2 }}
            onClick={() => setSelected(!selected)}
            className="bg-neutral-950/75 p-1.5 rounded-full"
          >
            {selected && <IconBookmarkFilled size='17px' strokeWidth='2' className="text-neutral-300" />}
            {!selected && <IconBookmark size='17px' strokeWidth='2' className="text-neutral-300" />}
          </motion.button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-neutral-800 font-bold">
          Name
        </h2>
        <div className="flex items-center gap-2">
          <IconHeart 
            size='17px' 
            strokeWidth='3'
            className="text-neutral-300"
          />
          <span className="text-xs text-neutral-700 font-bold">
            69
          </span>
        </div>
      </div>
    </div>
  )
}