'use client'

import { Dialog, Transition, Popover } from '@headlessui/react'
import { IconColorSwatch, IconPencil, IconTrash } from '@tabler/icons-react'
import { Fragment, useState } from 'react'
import { motion } from "framer-motion"

const container = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function CardActions({
  children
}: {
  children: (setState: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode
}) {
  const [isActionsOpen, setActionsOpen] = useState(false)

  return (
    <>
      {children(setActionsOpen)}

      <Transition show={isActionsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setActionsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-500/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex items-center space-x-1 p-1 px-5 rounded-xl bg-neutral-800/75 backdrop-blur-[1px] shadow-xl transition-all">
                  



                  <Popover className="relative">
                    <Popover.Button as='button' className='p-2 text-white rounded-full hover:bg-neutral-500/40'>
                      <IconColorSwatch size='18px' strokeWidth='2.5' />
                    </Popover.Button>
                    <Popover.Overlay className="fixed inset-0" />
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-2"
                    >
                      <Popover.Panel className="absolute left-0 mt-5 z-10 p-2 rounded-full bg-neutral-800/75 backdrop-blur-[1px]">
                        <motion.ul
                          className='list-none flex space-x-3'
                          variants={container}
                          initial="hidden"
                          animate="visible"
                        >
                          {['bg-[#ec4899]', 'bg-[#8b5cf6]', 'bg-[#2dd4bf]', 'bg-white'].map((color, key) => 
                            <motion.li key={key} variants={item}>
                              <div className={`p-2 ${color} rounded-full`} />
                            </motion.li>
                          )}
                        </motion.ul>
                      </Popover.Panel>
                    </Transition>
                  </Popover>


                  
                  <button className='p-2 text-white rounded-full hover:bg-neutral-500/40'>
                    <IconPencil size='18px' strokeWidth='2.5' />
                  </button>
                  <button className='p-2 text-white rounded-full hover:bg-neutral-500/40'>
                    <IconTrash size='18px' strokeWidth='2.5' />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}