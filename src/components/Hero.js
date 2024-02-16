import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box className='hero-container'>
        <Text className='hero-title'>
            👋 Hi there! I'm Alan!
        </Text>
        <Text className='hero-typewriter'>
            I'm a computer science + biochemistry student 
        </Text>

        <Text className='scroll-for-more'>
            SCROLL FOR MORE
        </Text>
    </Box>
  )
}

export default Hero
