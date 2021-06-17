import styled from 'styled-components';
// HeroContainer,
// HeroDescWrapper,
// HeroH1,
// HeroP,
// HeroBtn,
// HeroImgWrapper,
// HeroImg

export const MainContainer = styled.section`
    display:flex;
    flex-direction:${({reversed}) => reversed ? `row-reverse`: `none`};
    width:100%;
    justify-content:center;
    @media screen and (max-width:767px){
        flex-direction:column-reverse;
    }
`
export const MainDescWrapper = styled.div`
    flex: 1 1 61rem;
    width:100%;
    min-width:49.5rem;
    max-height:60rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${({bgWhite})=> bgWhite ? `#fff`: `#000`};
    @media screen and (max-width:767px){
        max-height:42rem;
        min-width:100%;
        max-width:37.5rem;
        padding:0 3.5rem;
    }
`
export const MainDescription = styled.div`
    color:${({colorWhite}) => colorWhite ? `#fff` : `#000`};
    display:flex;
    flex-direction:column;
    max-width:38.7rem;
    @media screen and (max-width:767px){
        max-width:31.8rem;
    }
`
export const MainH1 = styled.h1`
    font-size:4rem;
    text-transform:uppercase;
    letter-spacing:.4rem;
    line-height:4.8rem;
    @media screen and (max-width:767px){
        font-size:3.2rem;
        line-height:4rem;
        letter-spacing:.33rem;
    }
`
export const MainP = styled.p`
    margin-top:2.1rem;
    opacity:.6;
    font-size:1.5rem;
    line-height:2.5rem;
`
export const MainBtn = styled.a`
    cursor:pointer;
    display:flex;
    position:relative;
    margin-top:4.8rem;
    letter-spacing:.2rem;
    line-height:1.5rem;
    justify-content:flex-start;
    align-items:center;
    font-size:1.2rem;
    color:${({colorWhite}) => colorWhite ? `#fff` : `#000`};
    transition:all .3s ease;
    & > svg {
        margin-left:1.8rem;
        transition:transform .3s ease-in;
        transition-delay:220ms;
        & g{
            stroke:${({colorWhite}) => colorWhite ? `#fff` : `#000`};
        }
    }
    &::after{
        content:'';
        position:absolute;
        display:block;
        width:0;
        height:1px;
        bottom:-.1rem;
        background:${({colorWhite}) => colorWhite ? `#fff` : `#000`};
        transition: width .3s ease;
    }
    &:hover:after{
        width:10.5rem;
    }
    &:hover > svg{
        transform:translateX(2rem);
    }
`
export const MainImgWrapper = styled.div`
    flex: 1 1 83rem;
    height:60rem;
    @media screen and (max-width:767px){
        max-height:27.1rem;
    }
`
export const MainImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    
`