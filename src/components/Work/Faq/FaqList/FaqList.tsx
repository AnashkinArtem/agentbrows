import { Accordion } from "@chakra-ui/react"
import data from "../../../../data/Faq"
import FaqItem from "../FaqItem/FaqItem"

const FaqList = () => {
  return (
    <Accordion allowToggle>
        {data.map(item => (
          <FaqItem 
            question={item.question}
            answers={item.answers}
            key={item.question}  
          />
        ))}
    </Accordion>
  )
}

export default FaqList