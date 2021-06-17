import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLeftSection,
    FooterLinks,
    FooterLogo,
    FooterSocialIcons,
    Link,
    Icon,
    FooterLinksPage,
    FooterLink,
    FooterRightSection,
    FooterCopyRight,
} from './FooterElements';
import { GlobalArrowBtn } from '../../GlobalBtn';
import  logoImg  from '../../assets/shared/desktop/logo-white.svg'
import faceBook from '../../assets/shared/desktop/facebook.svg'
import instagram from '../../assets/shared/desktop/instagram.svg'
import youtube from '../../assets/shared/desktop/youtube.svg'
import pinterest from '../../assets/shared/desktop/pinterest.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLeftSection>
                    <FooterLinks>
                        <FooterLogo src={logoImg} alt="photosnap logo"></FooterLogo>
                        <FooterSocialIcons>
                            <Link><Icon src={faceBook} /></Link>
                            <Link><Icon src={instagram} /></Link>
                            <Link><Icon src={youtube} /></Link>
                            <Link><Icon src={pinterest} /></Link>
                            <Link><Icon src={twitter} /></Link>
                        </FooterSocialIcons>
                    </FooterLinks>
                    <FooterLinksPage>
                        <FooterLink>home</FooterLink>
                        <FooterLink>stories</FooterLink>
                        <FooterLink>features</FooterLink>
                        <FooterLink>pricing</FooterLink>
                    </FooterLinksPage>
                </FooterLeftSection>
                <FooterRightSection>
                    <GlobalArrowBtn left= "false" aria-label="link to the invitation page">
                        GET AN INVITE
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                    </GlobalArrowBtn>
                    <FooterCopyRight>
                        Copyright 2021. All Rights Reserved
                    </FooterCopyRight>
                </FooterRightSection>
            </FooterWrapper>
        </FooterContainer>
    )
}


export default Footer
