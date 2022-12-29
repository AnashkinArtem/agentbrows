import { IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';


const ArrowTop = () => {

    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 700){
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }; 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, []);

    return (
        <>
        {isVisable ? 
            <IconButton
                as={motion.button} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={"arrow-to-top"} 
                onClick={scrollToTop}
                icon={<AiOutlineArrowUp/>}
                colorScheme={'purple'}
                size={['md']}
                fontSize={'xl'}
                rounded={'full'}
                position={'fixed'}
                bottom={6}
                right={6}
            />
         : null}
        </>
    )
};

export default ArrowTop;