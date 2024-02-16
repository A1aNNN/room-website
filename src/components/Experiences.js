import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const experienceList = [
  {
    image: "./../images/pfp.jpeg",
    title: "Software Developer Intern at ",
    company: "The Creative Solution",
    location: "Vancouver, BC (October 2023 - Present)",
    points: [
      "Collaborate with clients to create React applications that employ iterative analysis and feedback loops to align with clients' objectives",
      "Create 3D assets andanimations using Spline and Blender, to integrate into websites and elevate visual appeal",
    ]
  },
  {
    image: "./../images/pfp.jpeg",
    title: "Web Developer Intern at ",
    company: "The Debtless Students", 
    location: "Vancouver, BC (May 2023 - August 2023)",
    points: [
      "Developed and maintained the company website using Angular, TypeScript, and HTML/CSS ensuring optimal functionality, usability and website responsiveness",
    ]
  },
  {
    image: "./../images/pfp.jpeg",
    title: "Bioinformatics Intern at ",
    company: "UBC Tokuyama Lab",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Utilized Bash, R, and Python scripts to handle bulk RNA sequencing data to observe and compare the transcription levels of endogenous retroviruses within patients of different conditions",
      "Developed an R pipeline to visualize differences in gene expression from single cell RNA sequencing data",
    ]
  },
  {
    image: "./../images/pfp.jpeg",
    title: "Undergraduate Teaching Assistant at ",
    company: "UBC",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Assisted in the understanding of computational concepts for over 600 science students through hosting office hours, leading lab sections, creating video solutions to labs, and aiding the teaching team in lectures",
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
