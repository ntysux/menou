'use client'

import { Dialog, Transition, Tab, Popover } from '@headlessui/react'
import { IconColorSwatch, IconPencil, IconTrash } from '@tabler/icons-react'
import { Fragment, useState } from 'react'
import { motion } from "framer-motion"

export default function CardDialog({
  children
}: {
  children: (setState: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode
}) {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isActionOpen, setIsActionOpen] = useState(false)
  const [categories] = useState({
    'Nguyên liệu': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    'Chuẩn bị': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    'Chế biến': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

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

  return (
    <>
      {children(setDialogOpen)}

      <Transition show={isDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setDialogOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-500/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden p-4 rounded-2xl bg-white shadow-xl shadow-neutral-300 transition-all">
                  <Tab.Group>
                    <Tab.List className="flex space-x-5">
                      {Object.keys(categories).map(category => (
                        <Tab 
                          key={category}
                          className={({selected}) =>
                            classNames(
                              "text-sm outline-none",
                              selected
                                ? 'text-neutral-800 font-medium'
                                : 'text-neutral-400 font-normal'
                            )
                          }
                        >
                          <Dialog.Title as="h3">
                            {category}
                          </Dialog.Title>
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      {Object.values(categories).map((posts, key) => (
                        <Tab.Panel key={key}>
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ul>
                              {posts.map((post) => (
                                <li
                                  key={post.id}
                                  className="relative rounded-md p-3 hover:bg-neutral-100"
                                >
                                  <h3 className="text-sm font-medium leading-5">
                                    {post.title}
                                  </h3>
                                  <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>{post.date}</li>
                                    <li>&middot;</li>
                                    <li>{post.commentCount} comments</li>
                                    <li>&middot;</li>
                                    <li>{post.shareCount} shares</li>
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                  <button onClick={() => setIsActionOpen(true)} className='outline-none text-sm text-neutral-400 mt-7 font-medium hover:text-neutral-800'>
                    Thay đổi
                  </button>

                  <Transition show={isActionOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => setIsActionOpen(false)}>
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

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}