'use client'

import { Data } from '@/app/home/page'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function CardDialog({children, food}: {children: React.ReactNode, food: Data}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div onClick={openModal}>
        {children}
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden space-y-5 rounded-2xl bg-white p-6 shadow-xl shadow-neutral-300 transition-all">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-neutral-800">
                    {food.name}
                  </Dialog.Title>
                  <div className='space-y-2'>
                    <h4 className='text-neutral-700 font-semibold'>
                      Nguyên liệu
                    </h4>
                    <ul className="list-none">
                      {food.materials?.map(material => 
                        <li key={material} className='text-sm'>
                          {material}
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-neutral-700 font-semibold'>
                      Chuẩn bị
                    </h4>
                    <ul className="list-none">
                      {food.required?.map(required => 
                        <li key={required} className='text-sm'>
                          {required}
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-neutral-700 font-semibold'>
                      Các bước thực hiện
                    </h4>
                    <ul className="list-none">
                      {food.steps?.map(step => 
                        <li key={step} className='text-sm'>
                          {step}
                        </li>
                      )}
                    </ul>
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
