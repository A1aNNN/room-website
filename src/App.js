import './App.css';
import { ChakraProvider, Fade } from '@chakra-ui/react'
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Ending from './components/Ending';
import { Scroll, ScrollControls } from '@react-three/drei';
// import TableSpongebob from './components/TableSpongebob';
// import ToonRoom from './components/ToonRoom';
// import ToonRoomFaster from './components/ToonRoomFaster.js'
import SplineRoom from './components/SplineRoom'
import Cafe from './components/Cafe'
import Fun from './components/Fun';
import useOnScreen from './components/useOnScreen';
import { useRef } from 'react';

const Section = ({ children }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "-25% 0px -25% 0px");

  return (
    <div ref={ref}>
      <Fade in={isVisible} transition={{ enter: { duration: 1 }, exit: { duration: 1 } }}>
        <div>
          {children}
        </div>
      </Fade>
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollControls pages={8.48}>

        {/* <SplineRoom scale={0.12}/> */}
        <Cafe/>

        <Scroll></Scroll>

        <Scroll html style={{width: '100%'}}>
          <ChakraProvider>
            <div className="App">
              
              <Section>
                <Hero/>
              </Section>
              
              <Section>
                <AboutMe/>
              </Section>
              
              <Section>
                <Experiences/>
              </Section>

              <Section>
                <Projects/>
              </Section>

              <Section>
                <Fun/>
              </Section>

              <Section>
                <Ending/>
              </Section>
            </div>
          </ChakraProvider>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
