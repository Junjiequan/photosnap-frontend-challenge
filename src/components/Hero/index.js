import React from 'react';
import{
    HeroContainer,
    HeroDescWrapper,
    HeroDescription,
    HeroH1,
    HeroP,
    HeroBtn,
    HeroImgWrapper,
    HeroImg,
} from './HeroElements';
import  heroImg  from '../../assets/home/desktop/create-and-share.jpg';

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
                    <HeroBtn aria-label="link to the invitation page">
                        GET AN INVITE
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </HeroBtn>
                </HeroDescription>
            </HeroDescWrapper>
            <HeroImgWrapper>
                <HeroImg src={heroImg} alt="A man looking at the occean"/>
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
