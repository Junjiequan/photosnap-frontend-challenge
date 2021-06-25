import Styled, { keyframes }from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

const textAnim = {
    bg_loop:keyframes`
        0%{background-position:200% center;}
        50%{background-position:0% center;}
        100%{background-position:200% center;}
    `,
    jay_loop:keyframes`
        0%{color:white;}
        25%{color:yellow;}
        50%{color:cyan;}
        75%{color:purple}
    `
}

export const FooterContainer = Styled.footer`
    display:flex;
    background:#000;
    justify-content:center;
    padding:6rem 0;
`
export const FooterWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
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
export const FooterLogoLink = Styled(LinkR)`
    cursor:pointer;
    display:flex;
    max-width:16.9rem;
    width:100%;
`
export const FooterLogo = Styled.img`
    pointer-events:none;
    height:1.6rem;
    width:17rem;
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
    width:2rem;
    height:2rem;
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
export const FooterLink = Styled(LinkR)`
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
export const FooterSign = Styled.p`
    font-weight:400;
    font-size:1.4rem;
    text-align:right;
    user-select:none;
    letter-spacing:.04rem;
    line-height:2.5rem;
    color:rgba(255,255,255,0.3);
    & > a{
        opacity:1;
        color: red;
        background: linear-gradient(to left, rgba(90, 119, 255, 1),rgba(188, 113, 152, 1),rgba(255, 197, 147, 1));
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: ${textAnim.bg_loop} 3s linear infinite;
    }
    @media screen and (max-width:650px){
        font-size:1.3rem;
        margin-top:2rem;
        text-align:center;
    }
`
export const Sign = Styled.a`
    color:white;
    text-transform: uppercase;
    position:relative;
    font-weight:700;
    animation: ${textAnim.jay_loop} 2s linear infinite;
`