'use client'

import { Data } from '@/app/menu/page'
import { Checkbox } from '@chakra-ui/react'
import CardDialog from './card.dialog'

export default function Card({food}: {food: Data}) {
  return (
    <>
      <CardDialog>
        {setDialogOpen => (
          <div className="flex items-center p-3 rounded-lg hover:ring-1 hover:ring-neutral-200 hover:ring-inset">
            <div 
              className='flex-1'
              onClick={() => setDialogOpen(true)}
            >
              <p className="text-sm font-bold text-neutral-700">
                {food.name}
              </p>
              <i className="text-xs text-neutral-600">bởi <span className="font-medium">
                {food.author}
              </span></i>
            </div>
            <Checkbox variant='filled' size='lg' />
          </div>
        )}
      </CardDialog>
    </>
  )
}
