import { Box, Container, Divider, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import AmenitiesList from './AmenitiesList/AmenitiesList'


const Amenities = () => {
  return (
    <Box as={motion.section} id={'amenities'}>
      <Container maxW={'7xl'} pt={[6, 8]}>
          <Heading
              as={motion.h2}
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{amount: 1, once: true}}
              textAlign={'center'}
              mb={[4, 6, 10]}
          >
              Услуги
          </Heading>
          <AmenitiesList/> 
          <Divider/>                   
      </Container>        
    </Box>
  )
}

export default Amenities