import React from 'react';
import{
    MainContainer,
    MainDescWrapper,
    MainDescription,
    MainH1,
    MainP,
    MainBtn,
    MainImgWrapper,
    MainImg,
} from './MainElements';

function Main({reversed,title,info,btnText,svgColor,img,bgWhite,textColor,btnColor}) {
    return (
        <MainContainer reversed={reversed}>
            <MainDescWrapper bgWhite={bgWhite}>
                <MainDescription colorWhite={textColor}>
                    <MainH1>{title}</MainH1>
                    <MainP>
                        {info}
                    </MainP>
                    <MainBtn colorWhite={btnColor} as ="a" href="javascript:void(0)" rel="noopener noreferrer">
                        {btnText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fill-rule="evenodd" stroke={svgColor}><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </MainBtn>
                </MainDescription>
            </MainDescWrapper>
            <MainImgWrapper>
                <MainImg src={img} />
            </MainImgWrapper>
        </MainContainer>
    )
}

export default Main
