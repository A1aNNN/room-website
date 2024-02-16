import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Typewriter from "typewriter-effect"



const WordsTypewriter = () => {

  return(
    <Box className='typer'>
      <div className='hero-typewriter-scroll' id='WordsTypewriter'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "computer science and biochemistry student",
                "coffee enthusiast",
                "Mario Kart fanatic",
                "scuffed animator",
                "Tetris wannabe",
              ],
            }}/>
        </div>
    </Box>
  )
};

export default WordsTypewriter
