import {  Box, Heading, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

interface IProps {
  title: string,
  description: string,
  img: string
}

const AmenitiesItem: React.FC<IProps> = ({title, description, img}) => {
  return (
    <Box
        as={motion.div}
        boxShadow={'md'}
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{amount: 0.7, once: true}}
        display={'flex'}
        justifyContent={'space-between'}
        maxW={'lg'}
        w={'full'}
        p={[2, 3]}
        border={'1px'}
        rounded={'2xl'}
        gap={4}
    >
        <Image
            w={'full'}
            boxSize={['20', '24', '28', '32']}
            rounded={'full'}
            alt='service'
            flexShrink={0}
            objectFit={'cover'}
            src={img}
        />
        <Box as={'div'} maxW={'md'} w={'full'}>
          <Heading
            as={'h4'}
            textTransform={'uppercase'}
            fontSize={['sm' ,'md', 'lg', 'xl']}
            letterSpacing={'wide'}
            alignItems={'baseline'}
            bgGradient={'linear(to-l, #7928CA, #FF0080)'}
            bgClip={'text'}
            fontWeight={'extrabold'}
            mb={1}
          >
            {title}
          </Heading>  
          <Text
            textAlign={'justify'}
            fontSize={['xs', 'md']}
            lineHeight={['3', '5']}
          >
            {description}
          </Text>
        </Box> 
    </Box>
  )
}

export default AmenitiesItem