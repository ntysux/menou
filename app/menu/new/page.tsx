'use client'

import { IconArrowNarrowRight, IconX } from "@tabler/icons-react"
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react"

interface Core {
  current: string,
  list: string[]
}

export default function NewPage() {
  const [ingredient, setIngredient] = useState<Core>({current: '', list: []})
  const [prepare, setPrepare] = useState<Core>({current: '', list: []})
  const [processing, setProcessing] = useState<Core>({current: '', list: []})
  const ingredientRef = useRef<HTMLInputElement>(null)
  const prepareRef = useRef<HTMLInputElement>(null)
  const processingRef = useRef<HTMLInputElement>(null)

  const [isFocus, setFocus] = useState<boolean[]>(Array(3).fill(false))

  // Ingredient actions
  function handleSetIngredient(event: ChangeEvent<HTMLInputElement>) {
    setIngredient({
      ...ingredient,
      current: event.target.value
    })
  }

  function handleAddIngredient() {
    if(ingredient.current) {
      setIngredient({
        current: '',
        list: [...ingredient.list, ingredient.current]
      })
      ingredientRef?.current?.focus()
    }
  }

  function handleAddIngredientKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if(event.key === 'Enter' && ingredient.current) {
      setIngredient({
        current: '',
        list: [...ingredient.list, ingredient.current]
      })
      ingredientRef?.current?.focus()
    }
  }

  function handleRemoveIngredient(index: number) {
    setIngredient({
      ...ingredient,
      list: [
        ...ingredient.list.slice(0, index),
        ...ingredient.list.slice(index + 1)
      ]
    })
  }

  // Prepare actions
  function handleSetPrepare(event: ChangeEvent<HTMLInputElement>) {
    setPrepare({
      ...prepare,
      current: event.target.value
    })
  }

  function handleAddPrepare() {
    if(prepare.current) {
      setPrepare({
        current: '',
        list: [...prepare.list, prepare.current]
      })
      prepareRef?.current?.focus()
    }
  }

  function handleAddPrepareKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if(event.key === 'Enter' && prepare.current) {
      setPrepare({
        current: '',
        list: [...prepare.list, prepare.current]
      })
      prepareRef?.current?.focus()
    }
  }

  function handleRemovePrepare(index: number) {
    setPrepare({
      ...prepare,
      list: [
        ...prepare.list.slice(0, index),
        ...prepare.list.slice(index + 1)
      ]
    })
  }

  // Processing actions
  function handleSetProcessing(event: ChangeEvent<HTMLInputElement>) {
    setProcessing({
      ...processing,
      current: event.target.value
    })
  }

  function handleAddProcessing() {
    if(processing.current) {
      setProcessing({
        current: '',
        list: [...processing.list, processing.current]
      })
      processingRef?.current?.focus()
    }
  }

  function handleAddProcessingKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if(event.key === 'Enter' && processing.current) {
      setProcessing({
        current: '',
        list: [...processing.list, processing.current]
      })
      processingRef?.current?.focus()
    }
  }

  function handleRemoveProcessing(index: number) {
    setProcessing({
      ...processing,
      list: [
        ...processing.list.slice(0, index),
        ...processing.list.slice(index + 1)
      ]
    })
  }

  return (
    <>
      <div className="my-9 space-y-16">
        <input 
          type="text" 
          placeholder="Tên món ăn" 
          className="outline-none w-full text-3xl text-neutral-900 font-light placeholder:text-neutral-300" 
        />

        <div className="space-y-3">
          <label 
            htmlFor="ingredient" 
            className="text-neutral-800 text-sm font-bold sm:hidden"
          >
            Nguyên liệu
          </label>
          <div className="sm:relative flex items-center">
            <label
              htmlFor="ingredient"
              className={`sm:absolute hidden sm:block ${isFocus[0] ? '-top-7 text-xs text-neutral-800 cursor-default font-bold' : 'top-0 text-sm text-neutral-400 cursor-text font-medium'} transition-all duration-200 delay-300`}
            >
              Nguyên liệu
            </label>
            <input
              id='ingredient'
              type="text"
              ref={ingredientRef}
              value={ingredient.current}
              className="pb-2 w-screen max-w-xl rounded-none border-b-2 border-neutral-700 text-sm text-neutral-800 font-medium outline-none focus:border-neutral-900"
              onChange={e => handleSetIngredient(e)}
              onFocus={() => setFocus([true, isFocus[1], isFocus[2]])}
              onBlur={() => !ingredient.current && setFocus([false, isFocus[1], isFocus[2]])}
              onKeyDown={e => handleAddIngredientKeyDown(e)}
            />
            <button
              onClick={handleAddIngredient}
              className="text-neutral-800 outline-none"
            >
              <IconArrowNarrowRight size='20px' strokeWidth='2.3' />
            </button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 max-w-3xl">
            {
              ingredient.list.map((ingredientItem, index) =>
                <div key={index} className="flex items-center space-x-1">
                  <p className="text-neutral-800 font-medium text-sm">
                    {ingredientItem}
                  </p>
                  <button
                    className="text-neutral-400 hover:text-neutral-700 outline-none"
                    onClick={() => handleRemoveIngredient(index)}
                  >
                    <IconX size='16px' strokeWidth='2.7' />
                  </button>
                </div>
              )
            }
          </div>
        </div>

        <div className="space-y-3">
          <label 
            htmlFor="prepare" 
            className="text-neutral-800 text-sm font-bold sm:hidden"
          >
            Chuẩn bị
          </label>
          <div className="sm:relative flex items-center">
            <label
              htmlFor="prepare"
              className={`sm:absolute hidden sm:block ${isFocus[1] ? '-top-7 text-xs text-neutral-800 cursor-default font-bold' : 'top-0 text-sm text-neutral-400 cursor-text font-medium'} transition-all duration-200 delay-300`}
            >
              Chuẩn bị
            </label>
            <input
              id="prepare"
              type="text"
              ref={prepareRef}
              value={prepare.current}
              className="pb-2 w-screen max-w-xl rounded-none border-b-2 border-neutral-700 text-sm text-neutral-800 font-medium outline-none focus:border-neutral-900"
              onChange={e => handleSetPrepare(e)}
              onFocus={() => setFocus([isFocus[0], true, isFocus[2]])}
              onBlur={() => !prepare.current && setFocus([isFocus[0], false, isFocus[2]])}
              onKeyDown={e => handleAddPrepareKeyDown(e)}
            />
            <button
              onClick={handleAddPrepare}
              className="text-neutral-800 outline-none"
            >
              <IconArrowNarrowRight size='20px' strokeWidth='2.3' />
            </button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 max-w-3xl">
            {
              prepare.list.map((prepareItem, index) =>
                <div key={index} className="flex items-center space-x-1">
                  <p className="text-neutral-800 font-medium text-sm">
                    {prepareItem}
                  </p>
                  <button
                    className="text-neutral-400 hover:text-neutral-700 outline-none"
                    onClick={() => handleRemovePrepare(index)}
                  >
                    <IconX size='16px' strokeWidth='2.7' />
                  </button>
                </div>
              )
            }
          </div>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="processing" 
            className="text-neutral-800 text-sm font-bold sm:hidden"
          >
            Chế biến
          </label>
          <div className="sm:relative flex items-center">
            <label
              htmlFor="processing"
              className={`sm:absolute hidden sm:block ${isFocus[2] ? '-top-7 text-xs text-neutral-800 cursor-default font-bold' : 'top-0 text-sm text-neutral-400 cursor-text font-medium'} transition-all duration-200 delay-300`}
            >
              Chế biến
            </label>
            <input
              id="processing"
              type="text"
              ref={processingRef}
              value={processing.current}
              className="pb-2 w-screen max-w-xl rounded-none border-b-2 border-neutral-700 text-sm text-neutral-800 font-medium outline-none focus:border-neutral-900"
              onChange={e => handleSetProcessing(e)}
              onFocus={() => setFocus([isFocus[0], isFocus[1], true])}
              onBlur={() => !processing.current && setFocus([isFocus[0], isFocus[1], false])}
              onKeyDown={e => handleAddProcessingKeyDown(e)}
            />
            <button
              onClick={handleAddProcessing}
              className="text-neutral-800 outline-none"
            >
              <IconArrowNarrowRight size='20px' strokeWidth='2.3' />
            </button>
          </div>
          <div className="space-y-3 max-w-3xl">
            {
              processing.list.map((processingItem, index) =>
                <div key={index} className="flex items-center space-x-1">
                  <p className="text-neutral-800 font-medium text-sm">
                    {processingItem}
                  </p>
                  <button
                    className="text-neutral-400 hover:text-neutral-700 outline-none"
                    onClick={() => handleRemoveProcessing(index)}
                  >
                    <IconX size='16px' strokeWidth='2.7' />
                  </button>
                </div>
              )
            }
          </div>
        </div>

        <div className="flex justify-end">
          <button className="py-3 px-5 text-white text-sm bg-neutral-800 font-bold rounded-full">
            Hoàn tất
          </button>
        </div>
      </div>
    </>
  )
}