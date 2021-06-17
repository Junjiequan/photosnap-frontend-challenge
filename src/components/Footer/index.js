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
    FooterLogoLink
} from './FooterElements';
import { GlobalArrowBtn } from '../../GlobalBtn';
import  logoImg  from '../../assets/shared/desktop/logo-white.svg'
import faceBook from '../../assets/shared/desktop/facebook.svg'
import instagram from '../../assets/shared/desktop/instagram.svg'
import youtube from '../../assets/shared/desktop/youtube.svg'
import pinterest from '../../assets/shared/desktop/pinterest.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'

function Footer() {
    const rel = "nofollow noreferrer noopener"
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLeftSection>
                    <FooterLinks>
                        <FooterLogoLink><FooterLogo src={logoImg} alt="photosnap logo" /></FooterLogoLink>
                        <FooterSocialIcons>
                            <Link href="https://facebook.com" target="_blank" rel={rel}><Icon src={faceBook} /></Link>
                            <Link href="https://instagram.com" target="_blank" rel={rel}><Icon src={instagram} /></Link>
                            <Link href="https://youtube.com" target="_blank" rel={rel}><Icon src={youtube} /></Link>
                            <Link href="https://pinterest.com" target="_blank" rel={rel}><Icon src={pinterest} /></Link>
                            <Link href="https://twitter.com" target="_blank" rel={rel}><Icon src={twitter} /></Link>
                        </FooterSocialIcons>
                    </FooterLinks>
                    <FooterLinksPage>
                        <FooterLink href="#">home</FooterLink>
                        <FooterLink href="#">stories</FooterLink>
                        <FooterLink href="#">features</FooterLink>
                        <FooterLink href="#">pricing</FooterLink>
                    </FooterLinksPage>
                </FooterLeftSection>
                <FooterRightSection>
                    <GlobalArrowBtn href="#" left= "false" aria-label="link to the invitation page">
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
