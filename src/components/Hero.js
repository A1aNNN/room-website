import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from 'typewriter-effect'
import WordsTypewriter from './WordsTypewriter'

const Hero = () => {
  return (
    <Box className='hero-container'>
        <Text className='hero-title'>
            👋 Hi there! I'm Alan!
        </Text>
        <Box className='hero-typewriter-container'>
          <Text className='hero-typewriter'>
              {/* I'm a computer science + biochemistry student  */}
              I'm a 
          </Text>
          <WordsTypewriter/>
        </Box>
        {/* <Typewriter
          options={{
            autostart: true,
            loop: true,
            delay: 40, 
            strings: [
              "computer science + biochemistry student",
              "coffee enthusiast",
              "Mario Kart fanatic",
            ]
          }}
        /> */}

        <Text className='scroll-for-more'>
            SCROLL FOR MORE
        </Text>
    </Box>
  )
}

export default Hero
