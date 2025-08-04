import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import TCS from './../images/tcs-square.jpeg'
import TDS from './../images/tds-square.png'
import LSI from './../images/lsi-logo.png'
import UBC from './../images/ubc-logo.png'
import Routific from './../images/routific.png'
import Arcteryx from './../images/arcteryx.png'

const experienceList = [
  {
    image: Arcteryx,
    title: "Incoming Software Engineer at ",
    company: "Arc'teryx",
    location: "Vancouver, BC (September 2025)",
    points: [
      "On the Select team working on the customer facing ecommerce site"
    ],
    description: "Into the real world 🎓"
  },
  {
    image: Arcteryx,
    title: "Software Engineer Intern at ",
    company: "Arc'teryx",
    location: "Vancouver, BC (May 2025 - August 2025)",
    points: [
      "On the Select team working on the customer facing ecommerce site"
    ],
    description: "I <3 my Beta AR 🧗‍♂️"
  },
  {
    image: Routific,
    title: "Software Engineer Intern at ",
    company: "Routific",
    location: "Vancouver, BC (May 2024 - January 2025)",
    points: [
      "Built and shipped features alongside the Delivery Management team",
      "Worked on the web app + internal component library"
    ],
    description: "*Skrt skrt* 📍"
  },
  {
    image: TCS,
    title: "Full Stack Developer at ",
    company: "The Creative Solution",
    location: "Vancouver, BC (October 2023 - October 2024)",
    points: [
      "Built and shipped custom applications for clients",
      "Made 3D assets and animations with Spline and Blender to add some pizzazz",
    ],
    description: "Design agency things 🎇"
  },
  {
    image: TDS,
    title: "Web Developer Intern at ",
    company: "The Debtless Students",
    location: "Vancouver, BC (May 2023 - August 2023)",
    points: [
      "Developed and maintained the company website with TypeScript Angular, TypeScript"
    ],
    description: "Angular > React ? 💭"
  },
  {
    image: LSI,
    title: "Bioinformatics Intern at ",
    company: "UBC Tokuyama Lab",
    location: "Vancouver, BC (May 2022 - December 2022)",
    points: [
      "Wrote scripts in R and Python to analyze bulk and single cell RNA sequencing data",
    ],
    description: "Life-sciencing it up 🧬"
  },
  {
    image: UBC,
    title: "Undergraduate Teaching Assistant at ",
    company: "UBC",
    location: "Vancouver, BC (Sept 2020 - December 2021)",
    points: [
      "Helped 600+ students wrap their heads around computational concepts",
      "Hosted office hours and review sessions because last-minute cramming is inevitable"
    ],
    description: "'Did you check the syllabus?' 🍎"
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
              description={experience.description}
              key={index}
            />
          )
        })}

      </Box>
    </Box>
  )
}

export default Experiences
