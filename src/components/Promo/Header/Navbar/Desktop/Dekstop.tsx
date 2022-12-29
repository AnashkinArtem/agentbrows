import { Box, Link, Hide, Button } from '@chakra-ui/react'
import data from '../../../../../data/Navbar'

const Dekstop = () => {
  const links = data  
  return (
    <Hide below={'md'}>
        <Box display={'flex'} gap={4}>
            {links.map(item => (
               <Button
                 colorScheme={'purple'}
                 size={'sm'}
               >
                 <Link key={item.title} href={item.path}>
                    {item.title}
                 </Link>
               </Button>
            ))}
        </Box>
    </Hide>
  )
}

export default Dekstop