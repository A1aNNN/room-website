import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Ending from './components/Ending';
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
// import TableSpongebob from './components/TableSpongebob';
// import ToonRoom from './components/ToonRoom';
// import ToonRoomFaster from './components/ToonRoomFaster.js'
import SplineRoom from './components/SplineRoom'


function App() {
  return (
    <>
      <ScrollControls pages={6.15}>

        <OrbitControls/>
        
        {/* <TableSpongebob/> */}
        {/* <ToonRoom/> */}
        {/* <ToonRoomFaster/> */}
        <SplineRoom/>

        {/* <RoundedBox
          args={[1,1,1]}
          radius={0.05}
          smoothness={4}
        >
          <meshBasicMaterial/>
        </RoundedBox> */}

        <Scroll></Scroll>

        <Scroll html style={{width: '100%'}}>
          <ChakraProvider>
            <div className="App">
              <Hero/>
              <AboutMe/>
              <Experiences/>
              <Projects/>
              <Ending/>
            </div>
          </ChakraProvider>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
