import { Box, Container, Divider } from '@chakra-ui/react'
import Logo from '../../Base/Logo/Logo'
import Dekstop from './Navbar/Desktop/Dekstop'
import Mobile from './Navbar/Mobile/Mobile'
import ColorMode from './ColorMode/ColorMode'



const Header = () => {
  return (
  <>
      <Container maxW={'7xl'}>
          <Box   
            as={'header'}        
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            h={16}
          >
            <Logo/>
            <Box display={'flex'} gap={4} alignItems={'center'}>
              <Dekstop/>              
              <ColorMode/> 
              <Mobile/>               
            </Box>         
          </Box>    
          <Divider/>    
      </Container>      
  </>
  )
}

export default Header