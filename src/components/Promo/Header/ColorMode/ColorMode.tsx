import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

const ColorMode = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
      <IconButton 
        variant={'solid'}
        colorScheme={'purple'}
        icon={colorMode === 'light' ?  <MoonIcon/> : <SunIcon/>}
        aria-label={'Color mode switcher'}        
        onClick={toggleColorMode}
        size={'sm'}
      />
  )
}

export default ColorMode