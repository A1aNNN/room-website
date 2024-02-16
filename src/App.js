import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Ending from './components/Ending';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Hero/>
        <AboutMe/>
        <Experiences/>
        <Projects/>
        <Ending/>
      </div>
    </ChakraProvider>
  );
}

export default App;
