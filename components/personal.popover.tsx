'use client'

import { motion } from "framer-motion"
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from "next/link"
import { IconStack2, IconSwipe, IconTrash } from "@tabler/icons-react"

interface Feature {
  name: string,
  href: string,
  icon: React.ReactNode
}

const features: Feature[] = [
  {name: 'Menu', href: '/menu', icon: <IconSwipe size='17px' />},
  {name: 'Đã lưu', href: '/saved', icon: <IconStack2 size='17px' />},
  {name: 'Thùng rác', href: '/trash', icon: <IconTrash size='17px' />},
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

export default function PersonalPopover() {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="font-medium text-neutral-800 text-sm outline-none">
          Cá nhân
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Popover.Panel className="absolute right-0 mt-3 z-10 p-4 rounded-lg bg-white shadow-xl shadow-neutral-200 ring-1 ring-neutral-200/75 ring-inset">
            <motion.ul
              className='list-none space-y-5'
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {features.map(feature => 
                <motion.li key={feature.name} className="min-w-max" variants={item}>
                  <Link href={feature.href} className="flex items-center gap-x-9">
                    <span className="text-neutral-500">
                      {feature.icon}
                    </span>
                    <p className="text-neutral-800 font-medium text-sm">
                      {feature.name}
                    </p>
                  </Link>
                </motion.li>  
              )}
            </motion.ul>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}