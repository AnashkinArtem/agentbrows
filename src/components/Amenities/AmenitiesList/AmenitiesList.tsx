import { SimpleGrid } from '@chakra-ui/react'
import AmenitiesItem from '../AmenitiesItem/AmenitiesItem'
import data from '../../../data/Amenities'

const AmenitiesList = () => {
  return (    
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing={[2, 5]}
        justifyItems={'center'}
        pb={10}
      >
        {data.map(item => (
          <AmenitiesItem 
            key={item.title}
            title={item.title} 
            description={item.description} 
            img={item.img}          
          />
        ))}
      </SimpleGrid>   
  )
}

export default AmenitiesList