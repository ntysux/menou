'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { checkboxTheme } from '@/elements/checkbox'

const theme = extendTheme({
  components: { 
    Checkbox: checkboxTheme 
  }
})

export function Providers({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}