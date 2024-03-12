import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import { SocialIcon } from 'react-social-icons'

const socials = [
  {
    link: "https://www.linkedin.com/in/alanwang093",
    photo: "www.linkedin.com",
  },
  {
    link: "https://www.instagram.com/alanwang123919/",
    photo: "www.instagram.com",
  },
  {
    link: "https://www.youtube.com/@alanwang093/featured",
    photo: "www.youtube.com",
  },
  {
    link: "https://github.com/A1aNNN",
    photo: "www.github.com",
  },
]

const Ending = () => {
  return (
    <Box className='ending'>
      <Box className='ending-container'>
        <Box className='ending-width-85'>
          <Text className='ending-title'>
            That's all for now!
          </Text>

          <Text className='ending-text'>
            I truly appreciate you stopping by to explore my little corner of the internet. I'm always eager to connect, exchange ideas, 
            or simply have a friendly chat, so feel free to reach out through any of my social media platforms listed below or 
            send me an email for a more personal touch!
            <br/>
            <br/>
            Thanks for stopping by!
          </Text>

          <Box className='ending-socials'>
            {socials.map((social, index) => {
              return (
                <a href={social.link} target='_blank'>
                  <SocialIcon key={index} url={social.photo} bgColor='white' fgColor='#BAD6FB'
                    className='social'
                  />
                </a>
              )
            })}
          </Box>

          <Footer/>
        </Box>
      </Box>
    </Box>
  )
}

export default Ending
