import Styled from 'styled-components';


export const FooterContainer = Styled.section`
    display:flex;
    background:#000;
    justify-content:center;
    padding:6rem 0;
`
export const FooterWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1440px;
    width:100%;
    color:#fff;
    font-size:1.2rem;
    height:100%;
    margin: 0 3.5rem;
    @media screen and (max-width:650px){
        margin:0 1rem;
        justify-content:center;
        flex-direction:column;
    }
`
export const FooterLeftSection = Styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:3rem;
    justify-content:space-between;
    align-items:space-between;
    max-width:35rem;
    width:100%;
    min-height:12.5rem;
    @media screen and (max-width:768px){
        flex-direction:column;
        align-items:flex-start;
        text-align:center;
    }
    @media screen and (max-width:650px){
        align-items:center;
    }
`
export const FooterSocialIcons = Styled.div`
    display:flex;
    @media screen and (max-width:768px){
        margin-top:4rem;
        justify-content:center;
    }
`
export const FooterLinks = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;

`
export const FooterLogoLink = Styled.a`
    cursor:pointer;
    display:flex;
`
export const FooterLogo = Styled.img`
    max-width:16.9rem;
    max-height:1.6rem;
`
export const Link = Styled.a`
    cursor:pointer;
    width:2rem;
    height:2rem;
    margin-right:1.5rem;
    @media screen and (max-width:768px){
        margin:0 .7rem;
    }
`
export const Icon = Styled.img`
    pointer-events:none;
    width:100%;
    filter:brightness(6);
    transition:filter .3s ease;
    ${Link}:hover & {
        filter:brightness(1);
    }
`
export const FooterLinksPage = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    @media screen and (max-width:768px){
        flex-direction:row;
    }
    @media screen and (max-width:650px){
        flex-direction:column;
    }
`
export const FooterLink = Styled.a`
    color:#fff;
    text-transform:uppercase;
    letter-spacing:.2rem;
    line-height:1.6rem;
    cursor:pointer;
    transition: opacity .3s ease;
    &:hover{
        opacity:.5;
    }
    @media screen and (max-width:768px){
        padding-right:1.5rem;
    }
    @media screen and (max-width:650px){
        padding:1rem 0;
    }
`
export const FooterRightSection = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-end;
    min-height:12.5rem;
    @media screen and (max-width:650px){
        align-items:center;
        margin-top:5rem;
        min-height:6rem;
    }
`
export const FooterCopyRight = Styled.p`
    font-weight:400;
    font-size:1.5rem;
    user-select:none;
    opacity:.5;
    letter-spacing:.04rem;
    line-height:2.5rem;
    @media screen and (max-width:650px){
        font-size:1.3rem;
        margin-top:2rem;
        text-align:center;
    }
`