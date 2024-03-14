import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import TCS from './../images/tcs-square.jpeg'
import TDS from './../images/tds-square.png'
import LSI from './../images/lsi-logo.png'
import UBC from './../images/ubc-logo.png'
import Routific from './../images/routific.png'

const experienceList = [
  {
    image: Routific,
    title: "Incoming Software Engineer Intern at ",
    company: "Routific",
    location: "Vancouver, BC (May 2024)",
    points: []
  },
  {
    image: TCS,
    title: "Software Developer at ",
    company: "The Creative Solution",
    location: "Vancouver, BC (October 2023 - Present)",
    points: [
      "Collaborate with clients to create custom fullstack applications that employ iterative analysis and feedback loops to align with clients' objectives",
      "Architect 3D assets and animations using Spline and Blender to integrate into websites and elevate visual appeal",
    ]
  },
  {
    image: TDS,
    title: "Web Developer Intern at ",
    company: "The Debtless Students", 
    location: "Vancouver, BC (May 2023 - August 2023)",
    points: [
      "Developed and maintained the company website using Angular, TypeScript, and HTML/CSS ensuring optimal functionality, usability and website responsiveness",
      "Designed and implemented new website sections through Figma prototypes"
    ]
  },
  {
    image: LSI,
    title: "Bioinformatics Intern at ",
    company: "UBC Tokuyama Lab",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Developed Bash, R, and Python scripts to handle bulk RNA sequencing data to observe and compare the transcription levels of endogenou retroviruses within patients of different conditions",
      "Built an R pipeline to streamline processes in visualizing differences in gene expression from single cell RNA sequencing data",
    ]
  },
  {
    image: UBC,
    title: "Undergraduate Teaching Assistant at ",
    company: "UBC",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Provided assistance to 600+ non-computer science students, helping them understand computational concepts",
      "Hosted office hours and group review sessions before exams"
    ]
  },
]


const Experiences = () => {
  return (
    <Box className='experiences'>
      <Box className='experiences-container'>
        <Text className='experiences-section-title'>
          Experiences
        </Text>

        {experienceList.map((experience, index) => {
          return (
            <ExperienceCard
              image={experience.image}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              points={experience.points}
              key={index}
            />
            // <Box>
            //   <Text className='experience-title'>
            //     {experience.title}
            //   </Text>
            // </Box>
          )
        })}

      </Box>
    </Box>
  )
}

export default Experiences
