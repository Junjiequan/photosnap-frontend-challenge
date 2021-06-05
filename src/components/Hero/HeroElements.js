import styled from 'styled-components';
// HeroContainer,
// HeroDescWrapper,
// HeroH1,
// HeroP,
// HeroBtn,
// HeroImgWrapper,
// HeroImg

export const HeroContainer = styled.section`
    display:flex;
    width:100%;
    justify-content:center;
`
export const HeroDescWrapper = styled.div`
    flex: 1 1 61rem;
    width:100%;
    min-height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#000;
`
export const HeroDescription = styled.div`
    display:flex;
    flex-direction:column;
    max-width:38.7rem;
`
export const HeroH1 = styled.h1`
    font-size:4rem;
    text-transform:uppercase;
    letter-spacing:.4rem;
    line-height:4.8rem;
    color:#fff;
`
export const HeroP = styled.p`
    color:#fff;
    margin-top:2.1rem;
    opacity:.6;
    font-size:1.5rem;
    line-height:2.5rem;
`
export const HeroBtn = styled.button`
    color:#fff;
    display:flex;
    position:relative;
    margin-top:4.8rem;
    letter-spacing:.2rem;
    line-height:1.5rem;
    justify-content:flex-start;
    align-items:center;
    font-size:1.2rem;
    transition:all .3s ease;
    & > svg {
        margin-left:1.8rem;
        & g{
            stroke:#fff;
        }
    }
    &::after{
        content:'';
        position:absolute;
        display:block;
        width:0;
        height:1px;
        bottom:-.1rem;
        background:#fff;
        transition: width .3s ease;
    }
    &:hover:after{
        width:10.7rem;
    }
`
export const HeroImgWrapper = styled.div`
    flex: 1 1 83rem;
`
export const HeroImg = styled.img`
    width:100%;
`