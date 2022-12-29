import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FaqList from './FaqList/FaqList'

const Faq = () => {
  return (
    <Box
      as={motion.div}
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{amount: 0.7, once: true}}
    >
      <Heading mb={4} textAlign={'center'}>
        FAQ
      </Heading>
      <FaqList/>
    </Box>    
  )
}

export default Faq