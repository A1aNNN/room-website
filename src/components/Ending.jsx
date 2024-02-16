import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'

const Ending = () => {
  return (
    <Box>
        <Text>
            That's all for now!
        </Text>

        <Text>
            I truly appreciate you stopping by to explore my little corner of the internet. I'm always eager to connect, exchange ideas, 
            or simply have a friendly chat, so feel free to reach out through any of my social media platforms listed below or 
            send me an email for a more personal touch!

            Thanks for stopping by!
        </Text>

        <Box display='flex' flexDirection='row'>
            <Image alt='LinkedIn'/>
            <Image alt='Instagram'/>
            <Image alt='Email'/>
            <Image alt='YouTube'/>
            <Image alt='GitHub'/>
        </Box>

        <Footer/>
    </Box>
  )
}

export default Ending
