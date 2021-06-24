import React from 'react';
import  ProgressiveImage  from 'react-progressive-image'
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
import  heroImgSmall  from '../../../assets/features/mobile/hero.jpg';

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
            <ProgressiveImage src={heroImg} placeholder={heroImgSmall}>
                    {(src,loading)=>(
                        <HeroImg style={{filter: loading ? 'blur(10px)' : 'blur(0)'}} src={src} alt="Some description"/>
                    )}
                </ProgressiveImage>
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
