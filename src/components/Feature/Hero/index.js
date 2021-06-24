import React from 'react';
import{
    HeroContainer,
    HeroDescWrapper,
    HeroDescription,
    HeroH1,
    HeroP,
    HeroImgWrapper,
    HeroImg,
} from './HeroElements';
import  heroImg  from '../../../assets/features/desktop/hero.jpg';

function Hero() {

    return (
        <HeroContainer>
            <HeroDescWrapper >
                <HeroDescription>
                    <HeroH1>FEATURES</HeroH1>
                    <HeroP>
                        We make sure all of our features are designed to be loved by every aspiring and 
                        even professional photograpers who wanted to share their stories.
                    </HeroP>
                </HeroDescription>
            </HeroDescWrapper>
            <HeroImgWrapper>
                <HeroImg rel="preload" src={heroImg} alt="A man looking at the occean"/>
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
