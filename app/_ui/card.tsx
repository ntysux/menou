'use client'

import { useState } from "react"
import { motion } from 'framer-motion'
import { IconArrowNarrowRight, IconBookmark, IconBookmarkFilled, IconDiscountCheckFilled, IconStar } from "@tabler/icons-react"

interface Props {
  saveBtn?: boolean
  goBtn?: boolean
}

export default function Card({
  saveBtn, 
  goBtn
}: 
  Props
) {
  const [selected, setSelected] = useState(false)
  
  return (
    <div className="space-y-1 group">
      {/* INSIDE */}
      <div className="relative p-3 space-y-1 h-36 bg-hero-light rounded-lg dark:bg-hero-dark">
        {/* author name */}
        <div className="w-fit flex items-center gap-1 p-1 rounded-sm bg-neutral-950/75 dark:bg-neutral-950/0">
          <IconDiscountCheckFilled 
            size='17px' 
            className="text-cyan-400"
          />
          <span className="text-xs text-white font-bold">
            dqv
          </span>
        </div>
        {/* time create */}
        <time className="text-xs text-neutral-300 font-medium italic rounded-sm p-1 flex w-fit bg-neutral-950/75 dark:bg-neutral-950/0">
          9/1/2024
        </time>
        {/* orther */}
        <div className="absolute bottom-3 right-3 flex items-center">
          {
            saveBtn &&
            <motion.button 
              whileTap={{ scale: 1.2 }}
              onClick={() => setSelected(!selected)}
              className="bg-neutral-950/75 p-1.5 rounded-full dark:bg-neutral-950/50"
            >
              {selected && <IconBookmarkFilled size='17px' className="text-white" />}
              {!selected && <IconBookmark size='17px' className="text-neutral-400" />}
            </motion.button>  
          }
          {
            goBtn &&
            <button className="bg-neutral-950/75 p-1.5 rounded-full dark:bg-neutral-950/50">
              <IconArrowNarrowRight size='17px' className="text-neutral-400 group-hover:text-white" />
            </button>
          }
        </div>
      </div>
      {/* OUTSIDE */}
      <div className="flex items-center justify-between">
        {/* food name */}
        <h2 className="text-sm text-neutral-800 font-bold dark:text-white">
          Name
        </h2>
        {/* reviews */}
        <div className="flex items-center gap-1">
          {Array(5).fill(null).map((star, index) =>
            <IconStar
              key={index}
              size='15px'
              strokeWidth='2.7'
              className="text-neutral-400 dark:text-neutral-700"
            />
          )}
          <span className="text-xs text-neutral-700 font-bold dark:text-neutral-300">
            (69%)
          </span>
        </div>
      </div>
    </div>
  )
}