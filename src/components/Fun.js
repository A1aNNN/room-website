import { Box, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

const Fun = () => {

    const itemsRef = useRef(null);
    const [ isMouseDown, setIsMouseDown ] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ scrollLeft, setScrollLeft ] = useState(0);
    const [ selectedDescription, setSelectedDescription ] = useState("");

    const logosList = [
        {
            name: "Mario Kart 8 Wii U",
            logoImage: "image-path",
            description: "Despite being considered a 'party game', Mario Kart actually has a competitive community with players all around the world!\nTop placement: 2nd in the world and 1st in North America (2017)",
            image: "image"
        },
        {
            name: "Mario Kart 8 Deluxe",
            logoImage: "image-path",
            description: "Similar game, but now on the Nintendo Switch instead of the Wii U. I told myself I wouldn't play another Mario Kart game, but it was generously given as a birthday present so I had to give it shot!\nTop placement: 8th in the world and 1st in North America (2023)",
            image: ""
        },
        {
            name: "Swimming",
            logoImage: "image-path",
            description: "My main sport from high school. I actually signed up for a swim competition again after 4 years of no training just to see how rusty I was, and surprisingly got some best times! I guess resting > training sometimes.\n50 SCM Freestyle: 24.52 (2023)\n100 SCM Freestyle: 53.34 (2019)\n50 SCM Butterfly: 26.65 (2023)",
            image: ""
        },
        {
            name: "nwPlus",
            logoImage: "image-path",
            description: "nwHacks is Western Canada's largest hackathon, and I've had the privilege of being on the planning team for the iteration in 2022 (coordinator), 2023 (director) and now 2024 (coordinator)! With nwHacks 2020 being my very first hackathon, it truly is a full circle moment to be part of the planning team for such an incredible event:)\nnwHacks > HackCamp",
            image: ""
        },
        {
            name: "Running 10k",
            logoImage: "image-path",
            description: "Genuinely the hardest sport I have ever participated in, I have a huge respect for those who do this regularly. I actually signed up for this race as part of a bet with a friend of mine, and even though I wasn't able to join the sub 40 gang, I'm perfectly content with just going on casual jogs from now on.\n40:15 for the Stanley Park seawall 10k (2022)",
            image: ""
        },
        {
            name: "Handstand pushups",
            logoImage: "image-path",
            description: "Tried to learn how to do a handstand pushup and this was the result",
            image: ""
        },
        {
            name: "Bowling",
            logoImage: "image-path",
            description: "PB of 189",
            image: ""
        },
        {
            name: "UBC Storm the Wall",
            logoImage: "image-path",
            description: "2023 winners of UBC's largest intramural event",
            image: ""
        },
        {
            name: "Animation",
            logoImage: "image-path",
            description: "Been really scuffed at it but trying to get better!",
            image: ""
        },
        {
            name: "3D stuff",
            logoImage: "image-path",
            description: "From trying out Blender, to moving to Spline, 3D modelling has been an interest of mine for a while",
            image: ""
        }
    ]


    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if(!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x-startX) * 0.8; //adjust the speed of mouse scroll
        itemsRef.current.scrollLeft = scrollLeft - walk;

    }
    
    const handleMouseUp = () => {
        setIsMouseDown(false);
    }
    
    const handleMouseLeave = () => {
        setIsMouseDown(false);
    }

    const handleClickLogo = (description) => {
        setSelectedDescription(description);
    }

  return (
    <Box className='fun'>
        <Box className='fun-container'>
            <Text className='section-title'>
                For Fun
            </Text>

            <Text>
                A collection of random stuff that I've been up to!
            </Text>

            <Box className='forFunCarousel' ref={itemsRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                >
                {logosList.map((logo, index) => {
                    return (
                        <Text className='forFunLogo' onClick={() => handleClickLogo(logo.description)} key={index}>
                            {logo.name}
                        </Text>
                    )
                })}
            </Box>

            <Box className='forFunItem'>
                {selectedDescription ? (
                    selectedDescription.split('\n').map((line, index) => (
                        <Text key={index} className='forFunText'>{line}</Text>
                    ))
                ) : (
                    <Text>Click a logo to see its description!</Text>
                )}
            </Box>
        </Box>
    </Box>
  )
}

export default Fun
