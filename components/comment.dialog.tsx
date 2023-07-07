import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import CommentPosts from './comment.posts'
import { IconX } from '@tabler/icons-react'

interface Props {
  children: (setState: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode
}

export default function CommentDialog({children}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function onClose() {
    setIsOpen(false)
  }

  return (
    <>
      {children(setIsOpen)}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-800/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel id='comment-dialog' className="w-full h-96 p-5 space-y-5 text-right max-w-xl overflow-auto rounded-2xl bg-white shadow-xl">
                  <button onClick={onClose} className='outline-none rounded-full sticky top-0 z-10 p-1 bg-white'>
                    <IconX size='16px' strokeWidth='2.7' className='text-neutral-800' />
                  </button>
                  <CommentPosts 
                    author='Dqv'
                    club='Home'
                    comment='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum'
                  />
                  <CommentPosts 
                    author='Ntysux'
                    club='Streets'
                    comment='Thật là một món ăn tuyệt vời'
                  />
                  <CommentPosts 
                    author='Tim Cook'
                    club='Apple'
                    comment='GG'
                  />
                  <CommentPosts 
                    author='Maria'
                    club='Cookie'
                    comment='WOW AMZ'
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}