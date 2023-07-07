'use client'

import { IconCopy, IconDiscountCheckFilled, IconHeart, IconMessageCircle } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useToast } from "@chakra-ui/react"
import CommentDialog from "./comment.dialog"

export default function Posts() {
  const [isFavourite, setFavourite] = useState(false)
  const [isSave, setSave] = useState(false)
  const toast = useToast()

  return (
    <>
      <div className="space-y-5">
        <div className="space-y-1">
          <div className="p-3 pb-9 ring-1 ring-neutral-200 ring-inset rounded-md">
            <div className="flex items-center space-x-1">
              <IconDiscountCheckFilled size='18px' className="text-sky-400" />
              <p className="text-sm font-medium text-neutral-800">
                Ntysux <span className="text-xs font-bold text-neutral-300">|Streets cuisine|</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-neutral-800 font-bold">
              Cá kho
            </h3>
            <i className="text-xs text-neutral-400">24/6/2023</i>
          </div>
          <p className="text-sm text-neutral-700 font-medium">
            Một món ăn đơn giản vào mùa đông
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <motion.button
            className={isFavourite ? "text-pink-400" : "text-neutral-600" }
            whileTap={{ scale: 1.4 }}
            onClick={() => setFavourite(!isFavourite)}
          >
            <IconHeart size='18px' strokeWidth='2.3' />
          </motion.button>
          <CommentDialog>
            {setIsOpen => (
              <button 
                className="text-neutral-600"
                onClick={() => setIsOpen(true)}
              >
                <IconMessageCircle size='18px' strokeWidth='2.3' />
              </button>
            )}
          </CommentDialog>
          <motion.button
            className={isSave ? "text-pink-400" : "text-neutral-600" }
            whileTap={{ scale: 1.4 }}
            onClick={() => {
              setSave(true)
              !isSave && toast({
                position: 'bottom-right',
                duration: 3000,
                render: () => (
                  <div className="p-3 bg-neutral-900/75 backdrop-blur-[1px] text-white font-medium text-sm rounded-sm">
                    Món ăn đã được lưu
                  </div>
                )
              })
            }}
          >
            <IconCopy size='18px' strokeWidth='2.3' />
          </motion.button>
        </div>
      </div>
    </>
  )
}