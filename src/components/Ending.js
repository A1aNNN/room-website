import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Youtube from './../images/youtubelogo.png';
import LinkedIn from './../images/linkedin.png';
import Instagram from './../images/instagram.png';
import Github from './../images/github.png';
import Spline from './../images/splinelogo.png';
import Devpost from './../images/devpost.svg';

const socials = [
  {
    link: "https://www.linkedin.com/in/alanwang093",
    logo: LinkedIn,
    alt: "LinkedIn Logo",
  },
  {
    link: "https://www.instagram.com/alanwang123919/",
    logo: Instagram,
    alt: "Instagram Logo",
  },
  {
    link: "https://www.youtube.com/@alanwang093/featured",
    logo: Youtube,
    alt: "YouTube Logo",
  },
  {
    link: "https://app.spline.design/@alanwang093",
    logo: Spline,
    alt: "Spline Logo",
  },
  {
    link: "https://devpost.com/A1aNNN?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    logo: Devpost,
    alt: "Devpost Logo",
  },
  {
    link: "https://github.com/A1aNNN",
    logo: Github,
    alt: "GitHub Logo",
  },
];

const iconSize = "40px";

const Ending = () => {
  return (
    <Box className="ending">
      <Box className="ending-container">
        <Box className="ending-width-85">
          <Text className="ending-title">That's all for now!</Text>

          <Text className="ending-text">
            I truly appreciate you stopping by to explore my little corner of the internet. I'm always eager to connect, exchange ideas, 
            or simply have a friendly chat, so feel free to reach out through any of my social media platforms listed below or 
            send me an email for a more personal touch!
            <br />
            <br />
            Thanks for stopping by!
          </Text>

          <Box className="ending-socials" display="flex" gap="8px">
            {socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noreferrer">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bg="white"
                  borderRadius="full"
                  width={iconSize}
                  height={iconSize}
                  boxShadow="md"
                  _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                >
                  <Image src={social.logo} alt={social.alt} boxSize="24px" />
                </Box>
              </a>
            ))}
          </Box>

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Ending;
