import React from 'react'
import{
    NavContainer,
    Nav,
    NavLogoLink,
    NavLogo,
    NavMenu,
    NavItem,
    NavBtnWrapper
} from './HeaderElements';
import  { GlobalBtn }  from '../../GlobalBtn';
import  logoImg  from '../../assets/shared/desktop/logo-black.svg'

function Header() {
    return (
        <NavContainer>
            <Nav>
                <NavLogoLink to="/">
                    <NavLogo src={logoImg} alt="photosnap logo" />
                </NavLogoLink>
                <NavMenu>
                    <NavItem to="/stories">
                        stories
                    </NavItem>
                    <NavItem to="/features">
                        features
                    </NavItem>
                    <NavItem to="/pricing">
                        pricing
                    </NavItem>
                </NavMenu>
                <NavBtnWrapper>
                    <GlobalBtn />
                </NavBtnWrapper>
            </Nav>
        </NavContainer>
    )
}

export default Header
