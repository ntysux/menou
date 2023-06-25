'use client'

import { Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { Fragment, useState } from 'react'

export default function Banner() {
  const [isShowing, setIsShowing] = useState(true)
  
  return (
    <Transition
      as={Fragment}
      show={isShowing}
      leave="transform duration-300 transition ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="relative mx-3 xl:max-w-5xl xl:mx-auto rounded-lg isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-zinc-800">
            <strong className="font-semibold">Đăng nhập</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Bình luận, nhận tích và hơn thế.
          </p>
          <button className="flex-none rounded-full bg-neutral-800 px-3.5 py-1 text-sm font-semibold text-white hover:bg-neutral-700">
            Đăng nhập ngay <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3" onClick={() => setIsShowing(isShowing => !isShowing)}>
            <IconX strokeWidth='3' size='16px' className="text-neutral-800" />
          </button>
        </div>
      </div>
    </Transition>
  )
}