'use client'

import { Dialog, Transition, Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { motion } from "framer-motion"
import CardActions from './card.actions'
import { Data } from '@/app/menu/page'
import { Checkbox } from '@chakra-ui/react'

const tabList: string[] = ['Nguyên liệu', 'Chuẩn bị', 'Chế biến']

const data: Data = {
  name: 'Mỳ không tôm', 
  author: 'ntysux', 
  materials: ['1 gói mỳ', 'rau(nếu có)', '1 quả trứng', 'tương(nếu thích)'], 
  required: ['1 nôì', '1 bát lớn', '1 đôi đũa', '1 thìa(nếu có)'],
  steps: ['Đun nước sôi', 'Cho rau và trứng vào trong 5 phút sau đó thả mỳ vào', 'cho vào bát và thưởng thức']
}

const {materials, required, steps} = data
const tabPanels = [materials, required, steps]


export default function CardDialog({
  children
}: {
  children: (setState: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode
}) {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const [materialsChecked, setMaterialsChecked] = useState<boolean[]>(Array(data.materials?.length).fill(false))

  function handleMaterialsChecked(index: number, isChecked: boolean) {
    setMaterialsChecked([
      ...materialsChecked.slice(0, index), 
      isChecked, 
      ...materialsChecked.slice(index + 1)
    ])
  }

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
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
            <div className="flex min-h-full items-center justify-center p-3">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden p-5 rounded-2xl bg-white shadow-xl shadow-neutral-300 transition-all">
                  <Tab.Group>
                    <Tab.List className="flex space-x-5">
                      {tabList.map(category => (
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
                      {tabPanels.map((tabPanel, key) => (
                        <Tab.Panel key={key}>
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ul>
                              {tabPanel?.map((tab, index) => (
                                <li
                                  key={index}
                                  className="p-1 text-neutral-800 text-sm font-medium"
                                >
                                  {key === 0 ?
                                    <div className='flex items-center space-x-1'>
                                      <Checkbox
                                        isChecked={materialsChecked[index]}
                                        size='lg'
                                        variant='outline'
                                        onChange={e => handleMaterialsChecked(index, e.target.checked)}
                                      />
                                      <span className={`${materialsChecked[index] && 'line-through text-neutral-400/75'}`}>
                                        {tab}
                                      </span>
                                    </div>
                                  :
                                    tab
                                  }
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                <CardActions>
                  {openDialog => (
                    <button 
                      className='outline-none text-sm text-neutral-400 mt-7 font-medium hover:text-neutral-800'
                      onClick={() => openDialog(true)} 
                    >
                      Thay đổi
                    </button>
                  )}
                </CardActions>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}