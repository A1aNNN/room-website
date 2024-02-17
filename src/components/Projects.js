import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import TheCouncil from './../images/thecouncil-square.png'
import Dialog from './../images/dialog-square.png'
import LogoGenerator from './../images/logo-generator-square.png'

const projectList = [
  {
    link: "https://thecouncil.vercel.app/login",
    image: TheCouncil,
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
      "Next.js"
    ]
  },
  {
    link: "https://tcs-logo-generator.vercel.app/",
    image: LogoGenerator,
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
    link: "https://www.dialog.courses/",
    image: Dialog,
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

        {projectList.map((project, index) => {
          return (
            <ProjectCard
              link={project.link}
              image={project.image}
              title={project.title}
              date={project.date}
              points={project.points}
              tech={project.tech}
              key={index}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default Projects
