import { Box } from '@chakra-ui/react'
import React from 'react'
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
                "former team Canada Mario Kart player",
                "scuffed animator",
                "Tetris wannabe",
                "twin (older by a full 4 minutes)"
              ],
            }}/>
        </div>
    </Box>
  )
};

export default WordsTypewriter
