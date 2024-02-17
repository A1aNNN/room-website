import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = ({link, image, title, date, points, tech}) => {
  return (
    <Box className='project-card-container'>
      <Box className='project-card-main'>

        <Box className='project-image-container'>
          <a href={link} target='_blank'>
            <Image src={image} className='project-image'/>
          </a>
        </Box>

        <Box className='project-card-main-right'>
          <Text className='project-title'>
            {title}
          </Text>

          <Text className='project-date'>
            {date}
          </Text>

          {points.map((point, index) => {
            return (
              <Text key={index} className='project-point'>
                • {point}
              </Text>
            )
          })}
        </Box>
      </Box>

      <Box className='project-tech-stack'>
          {tech.map((t, index) => {
            return (
              <Text key={index} className='project-tech'>
                {t}
              </Text>
            )
          })}
        </Box>

    </Box>
  )
}

export default ProjectCard
