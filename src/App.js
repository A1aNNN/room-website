import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
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
import Fun from './components/Fun';


function App() {
  return (
    <>
      <ScrollControls pages={8.48}>

        
        {/* <TableSpongebob/> */}
        {/* <ToonRoom/> */}
        {/* <ToonRoomFaster/> */}
        <SplineRoom scale={0.12}/>

        <Scroll></Scroll>

        <Scroll html style={{width: '100%'}}>
          <ChakraProvider>
            <div className="App">
              <Hero/>
              <AboutMe/>
              <Experiences/>
              <Projects/>
              <Fun/>
              <Ending/>
            </div>
          </ChakraProvider>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
