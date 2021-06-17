import Styled from 'styled-components';

// FooterContainer,
// FooterWrapper,
// FooterLeftSection,
// FooterLinks,
// FooterLogo,
// FooterSocialIcons,
// FooterLinksPage,
// FooterLink,
// FooterRightSection,
// FooterBtn

export const FooterContainer = Styled.section`
    display:flex;
    min-height:25rem;
    background:#000;
    justify-content:center;
`
export const FooterWrapper = Styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
    justify-content:space-between;
    align-items:center;
    max-width:1440px;
    width:100%;
    margin:0 1rem;
    padding:6rem 0;
    color:#fff;
    font-size:1.2rem;
`
export const FooterLeftSection = Styled.div`
    display:flex;
    justify-content:space-between;
    max-width:35rem;
    width:100%;
    height:100%;
`
export const FooterSocialIcons = Styled.div`
    display:flex;
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
`
export const FooterLink = Styled.a`
    text-transform:uppercase;
    letter-spacing:.2rem;
    line-height:1.6rem;
    cursor:pointer;
    transition: opacity .3s ease;
    &:hover{
        opacity:.5;
    }
`
export const FooterRightSection = Styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:space-between;
    align-items:flex-end;
`
export const FooterCopyRight = Styled.p`
    font-weight:400;
    font-size:1.5rem;
    user-select:none;
    opacity:.5;
    letter-spacing:.04rem;
`