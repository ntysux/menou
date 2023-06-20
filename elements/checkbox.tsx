import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const filled = definePartsStyle({
  control: {
    bg: '#404040',
    border: 'none',
    rounded: 'lg',
    _checked: {
      bg: '#404040',
      _hover: {
        bg: '#404040'
      }
    }
  }
})

export const checkboxTheme = defineMultiStyleConfig({variants: {filled}})