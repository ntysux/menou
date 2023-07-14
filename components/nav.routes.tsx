'use client'

import Link from "next/link"
import { Fragment } from 'react'
import { motion } from "framer-motion"
import { Popover, Transition } from '@headlessui/react'
import { IconCopy, IconSwipe, IconTrash } from "@tabler/icons-react"

interface Feature {
  name: string,
  href: string,
  icon: React.ReactNode
}

const features: Feature[] = [
  {name: 'Menu', href: '/menu', icon: <IconSwipe size='17px' strokeWidth='2.7' />},
  {name: 'Đã lưu', href: '/saved', icon: <IconCopy size='17px' strokeWidth='2.7' />},
  {name: 'Thùng rác', href: '/trash', icon: <IconTrash size='17px' strokeWidth='2.7' />}
]

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

export default function NavRoutes() {
  return (
    <Popover.Group className="hidden sm:flex sm:space-x-9">
      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button as='button' className="text-neutral-800 text-sm font-medium outline-none leading-none">
              Cá nhân
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
              <Popover.Panel className="absolute right-0 mt-3 z-10 rounded-2xl bg-neutral-800/75 backdrop-blur-[1px] shadow-xl shadow-neutral-200">
                <motion.ul
                  className='list-none'
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {features.map((feature, index) => 
                    <motion.li
                      key={feature.name} 
                      className="min-w-max group"
                      variants={item}
                      onClick={close}
                    >
                      <button disabled={index === 1 ? true : false} className="disabled:opacity-30">
                        <Link href={index === 1 ? '#' : feature.href} className="flex items-center gap-x-9 px-3.5 py-3">
                          <span className="text-neutral-400 group-hover:text-white">
                            {feature.icon}
                          </span>
                          <p className="text-white font-medium text-sm">
                            {feature.name}
                          </p>
                        </Link>
                      </button>
                    </motion.li>
                  )}
                </motion.ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <Link href='/community'>
        <button className="text-sm text-neutral-800 font-medium outline-none leading-none">
          Cộng đồng
        </button>
      </Link>
      <Link href='/club'>
        <button className="text-sm text-neutral-800 font-medium outline-none leading-none">
          Hội quán
        </button>
      </Link>
    </Popover.Group>
  )
}