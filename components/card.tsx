'use client'

import { Data } from '@/app/menu/page'
import { Checkbox } from '@chakra-ui/react'
import { Dialog, Transition, Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function CardDialog({food}: {food: Data}) {
  let [isOpen, setIsOpen] = useState(false)
  let [categories] = useState({
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

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="flex items-center p-3 rounded-lg hover:ring-1 hover:ring-neutral-200 hover:ring-inset">
        <div onClick={openModal} className='flex-1'>
          <p className="text-sm font-bold text-neutral-700">
            {food.name}
          </p>
          <i className="text-xs text-neutral-600">bởi <span className="font-medium">
            {food.author}
          </span></i>
        </div>

        <Checkbox variant='filled' size='lg' />
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                  <button className='text-sm text-neutral-400 mt-7 font-medium hover:text-neutral-800'>
                    Thay đổi
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
