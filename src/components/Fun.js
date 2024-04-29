import { Box, Image, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import running10k from './../images/10k.jpg'
import stormthewall from './../images/ubcstw.jpg'
import swimming from './../images/alanswimming.jpg'
import mariokart1 from './../images/bobc.jpg'
import mariokart2 from './../images/sus_mariokart.jpg'
import bowling from './../images/alan_bowling.jpg'
import handstand from './../images/alan_handstand.jpg'
import nwhacks from './../images/alan_nwhacks.jpg'
import nugget_amongus from './../images/Nugget_AmongUs.gif'
import room from './../images/3droom.jpg'

const Fun = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const logosList = [
        {
            name: "Mario Kart 8 Wii U: Playing a video game competitively",
            logoImage: "image-path",
            description: "Despite being considered a 'party game', Mario Kart actually has a competitive community with players all around the world. I can't really remember how or when I decided to take it a step further from just playing casually with friends, but I picked up a controller and I guess the rest is history.\nTop placement: 2nd in the world and 1st in North America (2017)",
            image: mariokart1,
            icon: "Mario Kart 8 (Wii U)"
        },
        {
            name: "Mario Kart 8 Deluxe: Playing a video game competitively pt. 2",
            logoImage: "image-path",
            description: "Similar game, but now on the Nintendo Switch instead of the Wii U. I told myself I wouldn't play another game competitively, let alone another Mario Kart game, but it was generously given as a birthday present so I had to give it a shot!\nTop placement: 8th in the world and 1st in North America (2023)",
            image: mariokart2,
            icon: "Mario Kart 8 Deluxe (Nintendo Switch)"
        },
        {
            name: "Swimming *splish splash*",
            logoImage: "image-path",
            description: "My main sport from high school. I actually signed up for a swim competition again after 4 years of no training just to see how rusty I was, and surprisingly got some best times! I guess resting > training sometimes.\nWhile I will forever cherish the memories that the sport has given me, I definitely do not miss the 5am practices or the feeling of jumping in chilly waters. For now, I'm perfectly happy with just chilling at home watching some Netflix :)\n50 SCM Freestyle: 24.52 (2023)\n100 SCM Freestyle: 53.34 (2019)\n50 SCM Butterfly: 26.65 (2023)",
            image: swimming,
            icon: "Swimming"
        },
        {
            name: "nwPlus - My role with nwHacks",
            logoImage: "image-path",
            description: "nwHacks is Western Canada's largest hackathon, one of nwPlus' 3 annual hackathons and I've had the privilege of being on the planning team for the iteration of nwHacks 2022 (coordinator), 2023 (director) and now 2024 (coordinator)!\nWith nwHacks 2020 being my very first hackathon, it truly is a full circle moment to be part of the planning team for such an incredible event *salutes*\nnwHacks > HackCamp",
            image: nwhacks,
            icon: "nwPlus"
        },
        {
            name: "Running Adventures 🏃‍♂️",
            logoImage: "image-path",
            description: "Genuinely the hardest sport I have ever participated in, I have a huge respect for those who do this regularly. My running background primarily came from high school, so when I signed up for a 10k race in my 4th year of university as part of a bet with a friend, I had high hopes but was ready to expect the worst.\nEven though I wasn't able to get under the elusive 40 minute mark, I'm perfectly content with just going on casual jogs from now on.\n10k Personal Record: 40:15",
            image: running10k,
            icon: "Running"
        },
        {
            name: "Alan, but upside down",
            logoImage: "image-path",
            description: "When the pandemic hit, I thought it would be the perfect time to try and learn a new skill. Maybe I was inspired by the videos online of people doing calisthenics, but somewhere during the quarantine I just full sent it and was able to teach myself the handstand.\n🙂 -> 🙃",
            image: handstand,
            icon: "Handstands"
        },
        {
            name: "*strike* 🎳",
            logoImage: "image-path",
            description: "I feel like bowling is that sport that everyone hasn't played in a couple of years and I was no different. When I was younger, I thought the only people who bowled were retired dads who needed an activity to stay active, but playing my fair share of games, I realize I could not have been more wrong!\nX X X (🦃)\nPersonal Best: 189 (2023)",
            image: bowling,
            icon: "Bowling"
        },
        {
            name: "UBC Storm the Wall",
            logoImage: "image-path",
            description: "Storm the Wall is my university's largest intramural event which is a relay consisting of a 175m swim, a 500m sprint, a 3.5km bike leg, a 1.5km run, and ending with the team scaling a 12 feet tall wall.\nI was the swimmer on the team and had a fun time reliving my competitive swimming days. At the end of the day, I finished the race so it's a W in my books 😎\nUBC Storm the Wall 2023: 1st place\nUBC Storm the Wall 2024: 5th place",
            image: stormthewall,
            icon: "UBC Storm the Wall"
        },
        {
            name: "Losing my sanity with frame-by-frame animation",
            logoImage: "image-path",
            description: "Animation is one of those things that I feel like everybody wants to try in their life. I actually looked through so many different YouTube videos and online forums about what program is the best for animation and ended up trying out Procreate.\nWhile my animations are definitely not going to end up in the next Disney movie, this is just a side hobby that I hope to improve at in the future!",
            image: nugget_amongus,
            icon: "Animation"
        },
        {
            name: "3D 🍩",
            logoImage: "image-path",
            description: "From trying out the famous 3D donut tutorial on Blender, to moving to the program Spline, 3D modelling has been an interest of mine for a while.\nEven the background of this personal website is a 3D room, and I've always wanted to create a website that incorporates 3D aspects.",
            image: room,
            icon: "3D"
        }
    ]

    const itemsRef = useRef(null);
    const [ isMouseDown, setIsMouseDown ] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ scrollLeft, setScrollLeft ] = useState(0);
    const [ selectedItem, setSelectedItem ] = useState(logosList[0]);


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

    const handleClickLogo = (item) => {
        setSelectedItem(item);
    }

  return (
    <Box className='fun'>
        <Box className='fun-container'>
            <Text className='section-title'>
                For Fun
            </Text>

            <Text className='fun-description'>
                Scroll through to see a collection of random stuff that I've been up to!
            </Text>

            <Box className='forFunCarousel' ref={itemsRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                >
                <Slider {...settings} className='forFunSlider'>
                    {logosList.map((logo, index) => {
                        return (
                            <Text className='forFunLogo' onClick={() => handleClickLogo(logo)} key={index}>
                                {logo.icon}
                            </Text>
                        )
                    })}
                </Slider>
            </Box>

            <Box className='forFunItem'>
                    {selectedItem ? (
                        <>
                            <Text className='forFunTextTitle'>{selectedItem.name}</Text>

                            <Box className='forFunBox'>
                                <Image className='forFunImage' src={selectedItem.image} alt='hello'/>

                                {selectedItem.description.split('\n').map((line, index) => (
                                    <Text className='forFunText' key={index}>{line}</Text>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Text className='forFunText'>Click an item to see more</Text>
                    )}
            </Box>
        </Box>
    </Box>
  )
}

export default Fun
