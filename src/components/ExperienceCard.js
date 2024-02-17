import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ExperienceCard = ({image, title, company, location, points}) => {
  return (
    <Box className='experience-card-container'>

      <Box className='experience-card-title-section'>
        <Box className='job-logo-image-container'>
          <Image className='job-logo' src={image} alt='hi'/>
        </Box>
        <Text className='job-title'>
          {title}
        </Text>
        <Text className='job-company'>
          {company}
        </Text>
      </Box>

      <Text className='job-location'>
        {location}
      </Text>

      {points.map((point, index) => {
        return (
          <Text key={index} className='job-point'>
            • {point}
          </Text>
        )
      })}
    </Box>
  )
}

export default ExperienceCard
