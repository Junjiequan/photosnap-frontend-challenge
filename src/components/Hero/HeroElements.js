import styled from 'styled-components';

export const HeroContainer = styled.section`
    display:flex;
    width:100%;
    justify-content:center;
`
export const HeroDescWrapper = styled.div`
    flex: 1 1 61rem;
    width:100%;
    min-width:49.5rem;
    min-height:65rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#000;
`
export const HeroDescription = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    max-width:38.7rem;
`
export const HeroH1 = styled.h1`
    font-size:4rem;
    text-transform:uppercase;
    letter-spacing:.4rem;
    line-height:4.8rem;
`
export const HeroP = styled.p`
    margin-top:2.1rem;
    margin-bottom:4.8rem;
    opacity:.6;
    font-size:1.5rem;
    line-height:2.5rem;
`

export const HeroImgWrapper = styled.div`
    flex: 1 1 83rem;
`
export const HeroImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`