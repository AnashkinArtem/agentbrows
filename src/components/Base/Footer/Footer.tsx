import { Box, Link } from '@chakra-ui/react'
import { SlSocialInstagram, SlSocialVkontakte } from 'react-icons/sl'

const Footer = () => {
  return (
    <Box
        as={'footer'}
        h={16}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={5}
        fontSize={'3xl'}
    >
        <Link 
            href={'https://www.instagram.com/agent_brows02/'}
            target={'_blank'}
        >
            <SlSocialInstagram/>
        </Link>
        <Link
            href={'https://vk.com/kashtanca'}
            target={'_blank'}
        >
            <SlSocialVkontakte/>
        </Link>
    </Box>
  )
}

export default Footer