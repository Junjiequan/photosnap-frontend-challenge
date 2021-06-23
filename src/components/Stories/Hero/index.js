import React from 'react';
import{
    HeroContainer,
    HeroDescWrapper,
    HeroDescription,
    HeroInfo,
    HeroH1,
    HeroDate,
    HeroP,
    HeroImgWrapper,
    HeroImg,
    Span
} from './HeroElements';
import  heroImg  from '../../../assets/stories/desktop/moon-of-appalacia.jpg';
import { GlobalArrowBtn} from '../../../GlobalBtn';

function Hero() {

    return (
        <HeroContainer bg={heroImg}>
            <HeroDescWrapper >
                <HeroDescription>
                    <HeroInfo>last month's featured story</HeroInfo>
                    <HeroH1>HAZY FULL MOON OF APPALACHIA</HeroH1>
                    <HeroDate><Span>March 2nd 2020 </Span> by John Appleseed</HeroDate>
                    <HeroP>
                        The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," 
                        especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                    </HeroP>
                    <GlobalArrowBtn to="" left="false" border="12rem" aria-label="link to the invitation page" >
                        read the story
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </GlobalArrowBtn>
                </HeroDescription>
            </HeroDescWrapper>
            <HeroImgWrapper>
                <HeroImg src={heroImg} alt="A man looking at the occean"/>
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
