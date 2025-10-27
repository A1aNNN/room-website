import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import TheCouncil from './../images/thecouncil-square.png'
import Dialog from './../images/dialog-square.png'
import LogoGenerator from './../images/logogenerator-square.png'
import RecallRehearsal from './../images/RecallRehearsal-square.svg'
import Stupaid from './../images/stupaid.png'
import Flashback from './../images/htn.jpg'
import SpectaCare from './../images/spectacare.jpg'
import PersonalWebsite from './../images/personal-website.png'
import MKMii from './../images/mkmii2.png'

const projectList = [
  {
    link: "https://www.mkmii.com/",
    image: MKMii,
    title: "MKMii",
    date: "September 2025",
    points: [
      "A personal time trial tracker for Mario Kart World",
      "Allows users to view their best times and progression in a list view or a driveable map view"
    ],
    tech: [
      "React",
      "JavaScript",
      "Supabase",
      "React Three Fiber",
    ]
  },
  {
    link: "https://devpost.com/software/spectacare?ref_content=user-portfolio&ref_feature=in_progress",
    image: SpectaCare,
    title: "SpectaCare",
    date: "Oct 2024",
    points: [
      "An AR application using Snap's Lens Studio and their Spectacles, designed to assist doctors during consultations by providing real-time diagnoses, scribing, and suggested follow-up questions directly in their field of view",
    ],
    tech: [
      "Lens Studio",
      "Snap AR Spectacles 5",
      "Python",
      "JavaScript",
      "React",
    ]
  },
  {
    link: "https://youtu.be/I5dP9mbnx4M?t=8062",
    image: Flashback,
    title: "Flashback",
    date: "Sept 2024",
    points: [
      "A VR application using Unity and C# for an interactive virtual reality, where user-uploaded memories are transformed into immersive art exhibits",
      "Finalist at Hack the North 2024 (Canada's biggest hackathon)",
    ],
    tech: [
      "Unity",
      "C#",
      "React",
      "JavaScript",
      "Convex"
    ]
  },
  {
    link: "https://www.stupaid.work/home",
    image: Stupaid,
    title: "Stupaid",
    date: "March 2024 - July 2024",
    points: [
      "A full-stack JavaScript React + Express backend application to connect students with paid project opportunities from local businesses",
      "Built a real-time chat feature with file upload using Socket.io"
    ],
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Firebase",
      "Socket.io"
    ]
  },
  {
    link: "https://alan-wang-website.vercel.app/",
    image: PersonalWebsite,
    title: "Personal Portfolio Website",
    date: "April 2024",
    points: [
      "The website you're currently on 😎"
    ],
    tech: [
      "React",
      "React Three Fiber",
      "Spline"
    ]
  },
  {
    link: "https://recall-rehearsal.vercel.app/",
    image: RecallRehearsal,
    title: "Recall Rehearsal",
    date: "May 2024",
    points: [
      "A VR study application aimed on the Feynman learning technique. A style of learning centered around being able to teach others to identify gaps in your own knowledge.",
      "Best Use of AI and 3rd place overall at StormHacks 2024"
    ],
    tech: [
      "React",
      "React Three Fiber",
      "JavaScript",
      "Unity",
      "C#"
    ]
  },
  {
    link: "https://tcs-logo-generator.vercel.app/",
    image: LogoGenerator,
    title: "AI Logo Generator",
    date: "January 2024",
    points: [
      "A JavaScript React logo generator application that takes in a pre-existing logo, analyzes the image with OpenAI's Vision, and generates a new, improved logo with OpenAI's DALL-E"
    ],
    tech: [
      "React",
      "Express",
      "Node.js",
      "JavaScript",
      "Firebase"
    ]
  },
  {
    link: "https://www.dialog.courses/",
    image: Dialog,
    title: "Dialog",
    date: "October 2023",
    points: [
      "A TypeScript React language practice application enabling users to engage in realistic, microphone-enabled conversations with AI across various language proficiencies",
      "Won DubHacks 2023's Best Use of Google Cloud Award",
    ],
    tech: [
      "React",
      "React Three Fiber",
      "Three.js",
      "TypeScript",
    ]
  },
  {
    link: "https://thecouncil.vercel.app/login",
    image: TheCouncil,
    title: "The Council",
    date: "September 2023",
    points: [
      "A TypeScript React web application that leveraged React Three Fiber, Three.js and GPT-4 to provide users with a diverse range of AI-generated perspectives on everyday problems",
      "Finalist at Hack the North 2023 (Canada's biggest hackathon)",
    ],
    tech: [
      "React",
      "React Three Fiber",
      "Three.js",
      "TypeScript",
      "Next.js"
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
