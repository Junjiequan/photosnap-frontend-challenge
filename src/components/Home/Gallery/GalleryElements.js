import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';


export const GalleryGrid = styled.section`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
    grid-template-rows:auto;
    height:100%;
    @media screen and (max-width:767px){
        grid-template-columns: repeat(auto-fit,minmax(100%,1fr));
    }
`
export const GalleryGridItem = styled(LinkR)`
    background-image:url(${(bgImg)=> bgImg.bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height:50rem;
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    position:relative;
    cursor:pointer;
    transition:transform .3s ease;
    
    &:before{
        position:absolute;
        content:'';
        width:100%;
        height:100%;
        background:linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,.9) 100%);
    }
    &:after{
        content:'';
        position:absolute;
        bottom:0;left:0;
        width:0;
        height:0;
        background:linear-gradient(170deg, rgba(255, 197, 147, 1) 0%, rgba(188, 113, 152, 1) 60%, rgba(90, 119, 255, 1) 100%);
        transition:width .4s ease-out;
        transition-delay:100ms;
    }
    &:hover{
        transform:translateY(-2.4rem);
    }
    &:hover:after{
        width:100%;
        height:6px;
    }
    &:focus-visible{
        transform:translateY(-2.4rem);
        outline:0;
    }
    &:focus-visible:after{
        width:100%;
        height:6px;
    }
    @media screen and (max-width:767px){
        min-height:37.5rem;
        padding:0 1rem;
    }

`
export const GalleryDesc = styled.div`
    max-width:28rem;
    width:100%;
    position:relative;
    &:after{
        content:'';
        position:absolute;
        width:100%;
        height:1px;
        background:#ffff;
        opacity:.25;
        bottom:7rem;
    }
`
export const GalleryH2 = styled.h2`
    font-size:1.8rem;
    line-height:2.5rem;
    letter-spacing:.1rem;
    margin-bottom:.4rem;
    font-weight:700;
`
export const GalleryP = styled.p`
    font-size:1.3rem;
    line-height:1.7rem;
    margin-bottom:3rem;
    letter-spacing:.03rem;
`
export const GalleryBtn = styled.span`
    background:transparent;
    user-select:none;
    font-size:1.2rem;
    line-height:1.5rem;
    letter-spacing:.2rem;
    text-transform:uppercase;
    font-weight:700;
    display:flex;
    justify-content:space-between;
    margin-top:3rem;
    margin-bottom:4rem;
    transition:all .5s ease; 
    opacity:.5;
    & > svg {
        margin-left:1.8rem;
        transition:transform .3s ease-in;
        transition-delay:300ms;
        & g{
            stroke:#fff;
        }
    }
    ${GalleryGridItem}:hover &{
        opacity:1;
    }
`