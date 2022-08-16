import React, { memo} from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import { NavLink} from 'react-router-dom';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from '@chakra-ui/react';

export const SearchByPublisher = memo(() => {
    const {getPublishers} = useHeroes()

    const publishers = getPublishers()

  return (
    <>


<Accordion  allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Find By Publisher
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2> 
    <AccordionPanel>
    {
        publishers?.map( publisher => (
            <Button className='m-1' key={publisher}> 
            <NavLink className="nav-item "  to={`/${publisher}`}
                    >
                        {publisher}
            </NavLink>
            </Button>

        ))
    }
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    
        <hr/>
    </>
  )
})
