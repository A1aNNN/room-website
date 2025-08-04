import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import ProfilePicture from './../images/pfp.jpeg'

const AboutMe = () => {
  return (
    <Box className='about-me'>
      <Box className='about-me-container'>
        <Text className='section-title'>
          About Me
        </Text>
        <Box className='about-me-image-container'>
          <Image src={ProfilePicture} alt='pfp' className='about-me-image' />
        </Box>
        <Text className='about-me-text'>
          I’m currently in my last year at the University of British
          Columbia studying computer science and biochemistry.
          <br />
          <br />
          Despite being a retired swimmer (or should I say "swammer"), I'm still always on the move.
          Volleyball, ping pong, or even gearing up for a 10k race, I'm there if it means staying active!
          <br />
          <br />
          Otherwise, you might catch me sipping my 10th coffee for the day, heading to a Mario Kart tournament,
          or chilling at home trying to make a scuffed 3D donut on Blender.
          <br />
          <br />
          Want to connect? Drop by the bottom of my site to find my socials!
        </Text>
      </Box>
    </Box>
  )
}

export default AboutMe
