import { 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box, 
    Text 
} from '@chakra-ui/react'

interface IProps {
    question: string,
    answers: string[]
}

const FaqItem: React.FC<IProps> = ({question, answers}) => {
  return (
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box flex='1' textAlign='left' fontWeight={'bold'}>
                {question}
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            {answers.map(item => (
                <Text key={item}>{item}</Text>
            ))}
        </AccordionPanel>
    </AccordionItem>
  )
}

export default FaqItem