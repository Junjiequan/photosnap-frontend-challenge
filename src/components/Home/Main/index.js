import React from 'react';
import{
    MainContainer,
    MainDescWrapper,
    MainDescription,
    MainH2,
    MainP,
    MainBtn,
    MainImgWrapper,
    MainImg,
} from './MainElements';

function Main({reversed,title,info,btnText,svgColor,img,bgWhite,alt}) {
    return (
        <MainContainer data-reversed={reversed}>
            <MainDescWrapper bgWhite={bgWhite}>
                <MainDescription>
                    <MainH2>{title}</MainH2>
                    <MainP>
                        {info}
                    </MainP>
                    <MainBtn to="/stories">
                        {btnText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke={svgColor}><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </MainBtn>
                </MainDescription>
            </MainDescWrapper>
            <MainImgWrapper>
                <MainImg rel="preload" src={img} alt={alt}/>
            </MainImgWrapper>
        </MainContainer>
    )
}

export default Main
