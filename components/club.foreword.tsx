'use client'

import { Divider } from '@chakra-ui/react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ClubForeword() {
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white p-6 text-left shadow-xl">
                  <div className='space-y-5'>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium text-neutral-800"
                    >
                      Hội quán
                    </Dialog.Title>
                    <Divider className='w-1/3 border-neutral-300' />
                    <div className='space-y-3'>
                      <p className='text-neutral-600 font-medium'>
                        Nơi tập hợp những người có chung mục đích, nghiên cứu và phát triển chung một lĩnh vực ẩm thực 
                        hoặc đơn giản là nơi tập hợp những đầu bếp tài năng.
                      </p>

                      <button
                        type="button"
                        className="rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Đã hiểu
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}