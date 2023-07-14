import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const outline = definePartsStyle({
  control: {
    m: 1,
    rounded: 'lg',
    borderColor: '#d4d4d4',
    _checked: {
      bg: 'white',
      color: '#525252',
      borderColor: '#525252',
      _hover: {
        bg: 'white',
        borderColor: '#525252'
      }
    }
  }
})

export const checkboxTheme = defineMultiStyleConfig({variants: {outline}})