import React from 'react';
import heroImg1 from '../../assets/home/desktop/create-and-share.jpg';
import { ReactComponent as ArrowIcon } from '../../assets/shared/desktop/arrow.svg';
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

function Hero() {
    return (
        <HeroContainer>
            <HeroDescWrapper>
                <HeroDescription>
                    <HeroH1>create and share your photo stories.</HeroH1>
                    <HeroP>
                        Photosnap is a platform for photographers and visual storytellers. 
                        We make it easy to share photos, tell stories and connect with others.
                    </HeroP>
                    <HeroBtn as ="a" href="javascript:void(0)" rel="noopener noreferrer">
                        GET AN INVITE 
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fill-rule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </HeroBtn>
                </HeroDescription>
            </HeroDescWrapper>
            <HeroImgWrapper>
                <HeroImg src={heroImg1} />
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
