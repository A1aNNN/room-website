import { Box, Image, Text, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon } from '@chakra-ui/react'
import React from 'react'

const ExperienceCard = ({image, title, company, location, points, description }) => {
  return (
    <Box className='experience-card-container'>

      <Box className='experience-card-title-section'>
        <Box className='job-logo-image-container'>
          <Image className='job-logo' src={image} alt='hi'/>
        </Box>
        <Box display='flex' flexDirection='column'>
          <Text className='job-title'>
            {title} <span className='job-company'>{company}</span>
          </Text>
          <Text className='job-location'>
            {location}
          </Text>
        </Box>
      </Box>

      <Accordion allowToggle>
        <AccordionItem marginTop='10px'>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='18px' marginTop='10px' className='job-description'>
                {description}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {points.map((point, index) => {
              return (
                <Text key={index} className='job-point'>
                  • {point}
                </Text>
              )
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </Box>
  )
}

export default ExperienceCard
