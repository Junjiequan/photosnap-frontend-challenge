import styled from 'styled-components'
import bannerBG from '../../../assets/shared/desktop/bg-beta.jpg'



export const BannerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:url(${bannerBG});
    background-repeat:no-repeat;
    background-size:cover;
    height:28rem;
`
export const BannerWrapper = styled.div`
    max-width:1100px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin:0 3.5rem;
    @media screen and (max-width:650px){
        max-height:16rem;
        height:100%;
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
        font-size:3.2rem;
    }
`