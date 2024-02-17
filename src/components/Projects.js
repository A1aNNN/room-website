import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const projectList = [
  {
    image: "",
    title: "The Council",
    date: "September 2023",
    points: [
      "Created a TypeScript React web application that leveraged React Three Fiber, Three.js and GPT-4 to provide users with a diverse range of AI-generated perspectives on everyday problems",
      "Finalist at Hack the North 2023 out of field of 250+ project submissions and 1000+ hackers",
    ],
    tech: [
      "React",
      "React Three Fiber",
      "Three.js",
      "TypeScript",
    ]
  },
  {
    image: "",
    title: "TCS Logo Generator",
    date: "January 2024",
    points: [
      "Developed a JavaScript React logo generator application that takes in a pre-existing logo, analyzes the image with OpenAI's Vision, and uses that as a prompt to generate a new, improved logo with OpenAI's DALL-E",
    ],
    tech: [
      "React",
      "Express",
      "Node.js",
      "JavaScript",
    ]
  },
  {
    image: "",
    title: "Dialog",
    date: "Octover 2023",
    points: [
      "Created a TypeScript React language practice application enabling users to engage in realistic, microphone-enabled conversations with AI across various language proficiencies",
      "Won DubHacks 2023's Best Use of Google Cloud Award",
    ],
    tech: [
      "React",
      "React Three Fiber",
      "Three.js",
      "TypeScript",
    ]
  },
]

const Projects = () => {

  return (
    <Box className='projects'>
      <Box className='projects-container'>
        <Text className='projects-section-title'>
            Projects
        </Text>
      </Box>
    </Box>
  )
}

export default Projects
