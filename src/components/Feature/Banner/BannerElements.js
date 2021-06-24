import styled from 'styled-components'
import bannerBG from '../../../assets/shared/desktop/bg-beta.jpg'



export const BannerContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    background:url(${bannerBG});
    background-repeat:no-repeat;
    background-size:cover;
    height:28rem;
    position:relative;
    &::before{
        position:absolute;
        content:'';
        display:flex;
        align-items:center;
        margin:auto 0;
        width:6px;
        top:0;bottom:0;left:0;
        height:100%;
        background:linear-gradient(to bottom, rgba(90, 119, 255, 1),rgba(188, 113, 152, 1),rgba(255, 197, 147, 1));
    }
    @media screen and (max-width:375px){
        height:100%;
        &::before{
        width:12.8rem;
        top:5px;bottom:100%;left:3.5rem;
        height:6px;
        background:linear-gradient(to bottom, rgba(90, 119, 255, 1),rgba(188, 113, 152, 1),rgba(255, 197, 147, 1));
        }
    }
`
export const BannerWrapper = styled.div`
    max-width:1100px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin:7rem 3.5rem;
    @media screen and (max-width:650px){
        max-height:20rem;
        flex-direction:column;
        align-items:flex-start;
    }
`
export const BannerTitle = styled.h1`
    color:white;
    font-weight:700;
    font-size:4rem;
    line-height:4.8rem;
    letter-spacing:.417rem;
    max-width:40rem;
    text-transform:uppercase;
    @media screen and (max-width:650px){
        margin-bottom:2rem;
        font-size:3.2rem;
        line-height:3.8rem;
    }
`