import { Container, Divider, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Carousel from './Carousel/Carousel'
import Faq from './Faq/Faq'

const Work = () => {
  return (
    <Container maxW={'7xl'} id={'work'}>
        <SimpleGrid 
            as={motion.section}
            columns={[1, 1, 2, 2]} 
            spacing={[6, 8, 10]}
            py={[4, 4, 8, 8]}            
        >            
            <Faq/>
            <Carousel/>            
        </SimpleGrid>
        <Divider/>
    </Container>
  )
}

export default Work