'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { IconTrash, IconFridge } from '@tabler/icons-react'

interface Feature {
  name: string,
  href: string,
  icon: JSX.Element
}

export default function Nav() {

  const features: Feature[] = [
    {name: 'Tủ lạnh', href: '/fridge', icon: <IconFridge size='20px' className='text-neutral-500' />},
    {name: 'Thùng rác', href: '/trash', icon: <IconTrash size='20px' className='text-neutral-500' />}
  ]

  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link href='/'>
          <button className="font-bold tracking-widest text-xl text-app-3">Menoú</button>
        </Link>
        <div className="flex gap-12 text-sm font-semibold text-app-3">
          <Popover className="relative">
            <Popover.Button className='outline-none'>Cá nhân</Popover.Button>
            
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute w-screen max-w-fit p-3 mt-3 text-app-3 rounded-xl bg-white ring-1 ring-zinc-400/10 shadow-md">
                <div className='grid grid-cols-1 w-max divide-y'>
                  {features.map(feature =>
                  <Link href={feature.href} key={feature.name}>
                    <button className='flex items-center gap-4 p-4'>
                      {feature.icon}
                      <p>{feature.name}</p>
                    </button>
                  </Link>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link href='/community'>
            <button>Cộng đồng</button>
          </Link>
        </div>
        <Link href='/login'>
          <button className="text-sm">Đăng nhập</button>
        </Link>
      </nav>
    </header>
  )
}