'use client'

import { Data } from "@/app/menu/page"
import { Checkbox } from "@chakra-ui/react"

export default function Card({food}: {food: Data}) {
  return (
    <>
      <div className="flex justify-between items-center p-3 rounded-lg hover:ring-1 hover:ring-neutral-200 hover:ring-inset">
        <div>
          <p className="text-sm font-bold text-neutral-700">
            {food.name}
          </p>
          <i className="text-xs text-neutral-600">bởi <span className="font-medium">
            {food.author}
          </span></i>
        </div>

        <div>
          <Checkbox variant='filled' size='lg' />
        </div>
      </div>
    </>
  )
}