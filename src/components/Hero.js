import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from 'typewriter-effect'
import WordsTypewriter from './WordsTypewriter'

const Hero = () => {
  return (
    <Box className='hero-container'>
      <Box className='hero-intro-container'>
        <Text className='hero-title'>
            👋 Hi there! I'm Alan!
        </Text>
        <Box className='hero-typewriter-container'>
          <Text className='hero-typewriter'>
              I'm a 
          </Text>
          <WordsTypewriter/>
        </Box>
      </Box>

        <Text className='scroll-for-more'>
            SCROLL FOR MORE
        </Text>
    </Box>
  )
}

export default Hero
