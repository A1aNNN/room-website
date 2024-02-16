import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

const AboutMe = () => {
  return (
    <Box>
        <Text>
            About Me
        </Text>
        <Image alt='pfp'/>
        <Text>
            I’m currently a 5th year undergraduate student at the University of British Columbia studying computer science and biochemistry.

            When I’m not in class or working, you might catch me at the gym getting a workout in, or chilling at home trying to make a 3D donut on Blender!

            If you want to connect, you can find my socials at the bottom of my website!
        </Text>
    </Box>
  )
}

export default AboutMe
