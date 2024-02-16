import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const experienceList = [
  {
    title: "Software Developer Intern at The Creative Solution",
    location: "Vancouver, BC (October 2023 - Present)",
    points: [
      "Collaborate with clients to create React applications that employ iterative analysis and feedback loops to align with clients' objectives",
      "Create 3D assets andanimations using Spline and Blender, to integrate into websites and elevate visual appeal",
    ]
  },
  {
    title: "Web Developer Intern at The Debtless Students",
    location: "Vancouver, BC (May 2023 - August 2023)",
    points: [
      "Developed and maintained the company website using Angular, TypeScript, and HTML/CSS ensuring optimal functionality, usability and website responsiveness",
    ]
  },
  {
    title: "Bioinformatics Intern at UBC Tokuyama Lab",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Utilized Bash, R, and Python scripts to handle bulk RNA sequencing data to observe and compare the transcription levels of endogenous retroviruses within patients of different conditions",
      "Developed an R pipeline to visualize differences in gene expression from single cell RNA sequencing data",
    ]
  },
  {
    title: "Undergraduate Teaching Assistant at UBC",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Assisted in the understanding of computational concepts for over 600 science students through hosting office hours, leading lab sections, creating video solutions to labs, and aiding the teaching team in lectures",
    ]
  },
]


const Experiences = () => {
  return (
    <Box>
        <Text>Experiences</Text>
    </Box>
  )
}

export default Experiences
