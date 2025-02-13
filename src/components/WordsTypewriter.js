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
                "computer science and biochemistry student.",
                "coffee enthusiast.",
                "team Canada Mario Kart player.",
                "scuffed 3D modeller.",
                "Netflix show binger",
                "Tetris wannabe.",
                "twin (older by a full 4 minutes).",
              ],
            }}/>
        </div>
    </Box>
  )
};

export default WordsTypewriter
