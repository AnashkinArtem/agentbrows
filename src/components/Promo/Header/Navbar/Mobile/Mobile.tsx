import { 
  Box,
  IconButton, 
  Link, 
  Show,
  useColorMode 
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import data from '../../../../../data/Navbar'
import Footer from '../../../../Base/Footer/Footer'

const Mobile = () => {

  const [open, setOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()

  const handleOpen = () => {
    setOpen(true)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  }

  const handleClose = () => {
    setOpen(false)
    document.body.style.overflow = 'unset';
  }

  const links = data

  return (
    <Show below={'md'}>
        <IconButton 
            colorScheme={'purple'}
            aria-label={'menu'}
            icon={<FiMenu/>}
            onClick={handleOpen}
            size={'sm'}
        />
        {open ?
            <Box
              as={motion.div}
              position={'absolute'}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              w={'full'}
              h={'100vh'}
              left={0}
              top={0}
              backgroundColor={colorMode === 'light' ?  'white' : '#1A202C'}
              p={'3'}
              zIndex={5}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'space-between'}
            >
              <Box
                display={'flex'}
                w={'full'}
                justifyContent={'flex-end'}
              >
                <IconButton 
                  colorScheme={'purple'}
                  aria-label={'close-menu'}
                  icon={<GrClose/>}
                  onClick={handleClose}
                  size={'sm'}
                />
              </Box>
              <Box
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                w={'full'}
                fontWeight={'semi-bold'}
                fontSize={'xl'}
                gap={5}
              >
                {links.map(item => (          
                    <Link 
                      as={'a'}
                      key={item.title}          
                      href={item.path}
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>             
                ))}
              </Box>
              <Footer/>
            </Box>
          : null}
    </Show> 
  )
}

export default Mobile

