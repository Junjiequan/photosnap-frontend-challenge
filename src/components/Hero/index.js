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

function Hero({reversed,title,info,btnText,svgColor,img,bgWhite,textColor,btnColor}) {
    return (
        <HeroContainer reversed={reversed}>
            <HeroDescWrapper bgWhite={bgWhite}>
                <HeroDescription colorWhite={textColor}>
                    <HeroH1>{title}</HeroH1>
                    <HeroP>
                        {info}
                    </HeroP>
                    <HeroBtn colorWhite={btnColor} as ="a" href="javascript:void(0)" rel="noopener noreferrer">
                        {btnText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fill-rule="evenodd" stroke={svgColor}><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </HeroBtn>
                </HeroDescription>
            </HeroDescWrapper>
            <HeroImgWrapper>
                <HeroImg src={img} />
            </HeroImgWrapper>
        </HeroContainer>
    )
}

export default Hero
