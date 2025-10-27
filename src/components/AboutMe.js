import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
// import ProfilePicture from './../images/pfp.jpeg'
import ProfilePicture from './../images/headshot_cruise.JPG'

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
          Despite being a retired competitive swimmer, I’m still trying my best to get off the couch. Whether it’s volleyball,
          climbing, or butchering my swings at pitch and putt, I’m always up for something active (even if I’m terrible at it).
          <br />
          <br />
          Otherwise, you might catch me browsing the Nespresso catalog, traveling for a Mario Kart tournament,
          or chilling at home binging a Netflix show 😎
          <br />
          <br />
          Want to connect? Drop by the bottom of my site to find my socials!
        </Text>
      </Box>
    </Box>
  )
}

export default AboutMe
