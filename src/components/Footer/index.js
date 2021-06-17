import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLeftSection,
    FooterLinks,
    FooterLogo,
    FooterSocialIcons,
    FooterLinksPage,
    FooterLink,
    FooterRightSection,
    FooterBtn
} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLeftSection>
                    <FooterLinks>
                        <FooterLogo></FooterLogo>
                        <FooterSocialIcons></FooterSocialIcons>
                    </FooterLinks>
                    <FooterLinksPage>
                        <FooterLink>home</FooterLink>
                        <FooterLink>stories</FooterLink>
                        <FooterLink>features</FooterLink>
                        <FooterLink>pricing</FooterLink>
                    </FooterLinksPage>
                </FooterLeftSection>
                <FooterRightSection>
                    <FooterBtn aria-label="link to the invitation page">
                        GET AN INVITE
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </FooterBtn>
                </FooterRightSection>
            </FooterWrapper>
        </FooterContainer>
    )
}


export default Footer
