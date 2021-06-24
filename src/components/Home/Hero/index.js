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
import  heroImg  from '../../../assets/home/desktop/create-and-share.jpg';
import  heroImgSmall  from '../../../assets/home/mobile/create-and-share.jpg';
import { GlobalArrowBtn} from '../../../GlobalBtn';

function Hero() {

    return (
        <HeroContainer>
            <HeroDescWrapper >
                <HeroDescription>
                    <HeroH1>create and share your photo stories.</HeroH1>
                    <HeroP>
                        Photosnap is a platform for photographers and visual storytellers. 
                        We make it easy to share photos, tell stories and connect with others.
                    </HeroP>
                    <GlobalArrowBtn to="" data-left-align={true} data-border-width="11rem" aria-label="link to the invitation page">
                        GET AN INVITE
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </GlobalArrowBtn>
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
