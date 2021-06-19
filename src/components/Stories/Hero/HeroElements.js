import styled from 'styled-components';


export const HeroContainer = styled.section`
    display:flex;
    width:100%;
    justify-content:center;
    position:relative;
    background-image: url(${props => props.bg});
    background-size:cover;
    @media screen and (max-width:767px){
        flex-direction:column-reverse;
        background-image:none;
    }
`
export const HeroDescWrapper = styled.div`
    flex: 1 1 61rem;
    max-width:1440px;
    width:100%;
    min-width:49.5rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    position:relative;
    z-index:2;
    padding:10rem 0;
    margin:0 3.5rem;
    @media screen and (max-width:767px){
        flex:0;
        background:#000;
        min-width:100%;
        max-width:37.5rem;
        padding:7.2rem 3.5rem;
        margin:0;
    }
`
export const HeroDescription = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    max-width:38.7rem;
    @media screen and (max-width:375px){
        &::before{
        width:12.8rem;
        top:5px;bottom:100%;left:3.5rem;
        height:6px;
        background:linear-gradient(to bottom, rgba(90, 119, 255, 1),rgba(188, 113, 152, 1),rgba(255, 197, 147, 1));
        }
    }
`
export const HeroInfo = styled.span`
    font-size:1.2rem;
    font-weight:700;
    letter-spacing:.2rem;
    text-transform:uppercase;
`
export const HeroH1 = styled.h1`
    margin-top:2.4rem;
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
export const HeroDate = styled.span`
    margin-top:1.6rem;
    font-size:1.3rem;
    user-select:none;
`
export const Span = styled.span`
    opacity:0.6;
    margin-right:1.5rem;
`
export const HeroP = styled.p`
    margin-top:2.1rem;
    margin-bottom:4.8rem;
    opacity:.6;
    font-size:1.5rem;
    line-height:2.5rem;
`

export const HeroImgWrapper = styled.div`
    width:100%;
    height:65rem;
    display:none;
    @media screen and (max-width:767px){
        display:flex;
        position:relative;
        max-height:29.4rem;
        opacity:1;
    }
`
export const HeroImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`