import { Box, Container, Heading, Stack, Image, Text, Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import avatar from '../../assets/img/About/avatar.jpg'

const About = () => {
  return (
    <Container maxW={'7xl'} id={'about'}>
       <Box as={motion.section} py={6}>
        <Heading as={motion.h2} textAlign={'center'}>
            Обо мне
        </Heading>        
        <Stack
          py={[4, 6, 8, 12]}
          direction={['column', 'column', 'row']}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={['5', '10', '20', '30']}
        >
          <Image
            as={motion.img}
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{amount: 0.7, once: true}}
            boxSize={['xs', 'xs', 'sm', 'md']}
            rounded={'3xl'}
            objectFit={'cover'}
            src={avatar}
            shadow={'0px 1px 4px #00000029'}
            alt='Sveta'
          />          
          <Text
            as={motion.p}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{amount: 1, once: true}}
            maxW={'400'}
            textAlign={'justify'}
            fontSize={['sm', 'sm', 'sm', 'md']}
          >
            <p>Привет! Меня зовут Светлана.</p>

            <p>Я прошла курсы по оформлению бровей у лучших преподавателей. Мой опыт работы бровистом уже более 2 лет.</p>

            <p>Брови – это не просто моя профессия. Это моя любовь!</p>
            
            <p>Каждая женщина обаятельна и неповторима. Моя задача как профессионального мастера бровиста увидеть в ней её уникальность, с помощью моделирования бровей сделать акцент на лучших чертах внешности, умело подчеркнуть природную красоту лица.</p>

            <p>Я приглашаю на коррекцию, моделирование и окрашивание бровей.  Я мастер и учитываю индивидуальные особенности каждой женщины. Используются безопасные материалы, не способные вызвать аллергию. При выборе цвета краски учитывается оттенок волос, глаз и даже тон кожи, что позволяет гармонично дополнить ваш образ.</p>          
            
            <p>Для того, чтобы попасть ко мне на прием, перейдите по ссылкеи  выберете удобное для вас время в онлайн-записи.</p>
            
            <p>Заранее благодарю, ваша Светлана!</p>
          </Text>
        </Stack>
       </Box>
      <Divider/>
    </Container>
    
  )
}

export default About