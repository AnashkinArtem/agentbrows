import { Image, Link } from '@chakra-ui/react'
import logo from '../../../assets/img/Logo/Logo.png'

const Logo = () => {
  return (
    <Link href='#'> 
      <Image
        w={'30'}
        h={'20'}
        src={logo}
      />
    </Link>
  )
}

export default Logo