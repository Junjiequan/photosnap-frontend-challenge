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
import  heroImg  from '../../../assets/pricing/desktop/hero.jpg';
import  heroImgSmall  from '../../../assets/pricing/mobile/hero.jpg';

function Hero() {

    return (
        <HeroContainer>
            <HeroDescWrapper >
                <HeroDescription>
                    <HeroH1>PRICING</HeroH1>
                    <HeroP>
                        Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
                        It’s the simple way to create and share your photos.
                    </HeroP>
                </HeroDescription>
            </HeroDescWrapper>
            <HeroImgWrapper>
                <ProgressiveImage src={heroImg} placeholder={heroImgSmall}>
                    {(src,loading)=>(
                        <HeroImg style={{filter: loading ? 'blur(20px)' : 'blur(0)'}} src={src} alt="Some description"/>
                    )}
                </ProgressiveImage>
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
