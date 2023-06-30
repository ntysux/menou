import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const filled = definePartsStyle({
  control: {
    m: 1,
    rounded: 'full',
    borderColor: '#d4d4d4',
    _checked: {
      bg: '#d4d4d4',
      borderColor: '#d4d4d4',
      _hover: {
        bg: '#d4d4d4',
        borderColor: '#d4d4d4'
      }
    }
  }
})

export const checkboxTheme = defineMultiStyleConfig({variants: {filled}})