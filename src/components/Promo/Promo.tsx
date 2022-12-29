import {  Box, Button, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import bg from '../../assets/img/Promo/promo_bg.png'
import logoPromo from  '../../assets/img/Logo/LogoPromo.png'
import Header from './Header/Header'

const Promo = () => {

  const promoAnimate = {
    hide: {
      y: 100,
      opacity: 0,
    },
    show: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: custom * 0.2
      }
    }),
  }

  return (
    <Box
      as={motion.section}
      variants={promoAnimate}
      viewport={{once: true}}
      bgImage={bg}
      bgPosition={'center'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      h={['xl', '2xl', '2xl', '3xl']}
      position={'relative'}
    >
      <Header/>
      <Box
        as={motion.div}        
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        h={'lg'}
      >
        <Image
          as={motion.img} 
          initial={promoAnimate.hide}
          whileInView={promoAnimate.show(1)}
          viewport={{once: true}}
          objectFit={'cover'}
          h={['400', '500', '540']}
          src={logoPromo}
        />  

          <Button 
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={promoAnimate.hide}
            whileInView={promoAnimate.show(1.5)} 
            viewport={{once: true}}
            href={'https://www.instagram.com/agent_brows02/'}
            target={'_blank'}     
            size={'lg'}            
            colorScheme={'purple'}     
            rounded={'xl'}
            minW={60}
            minH={12}
            textTransform={'uppercase'}            
          >
            Записаться
          </Button>
      </Box>
    </Box>
  )
}

export default Promo