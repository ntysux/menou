'use client'

import { useEffect, useState } from 'react'
import { setTheme } from '../_lib/theme'
import { Switch } from '@headlessui/react'

export default function Theme({
  mode
}: {
  mode: boolean
}) {
  const [enabled, setEnabled] = useState(mode)

  useEffect(() => {
    setTheme(enabled ? 'dark' : 'light')
  }, [enabled])

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className='outline-none border-2 border-neutral-400 flex py-0.5 px-2.5 rounded-full transition-colors duration-300'
    >
      <span
        className={`
          ${enabled ? 'translate-x-2' : '-translate-x-2'}
          p-1.5 rounded-full bg-neutral-400 transform transition-transform duration-300
        `}
      />
    </Switch>
  )
}