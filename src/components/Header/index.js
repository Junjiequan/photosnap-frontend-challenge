import React from 'react'
import{
    NavContainer,
    Nav,
    NavLogoLink,
    NavLogo,
    NavMenu,
    NavItem,
} from './HeaderElements';
import  { GlobalBtn }  from '../../GlobalBtn';
import  logoImg  from '../../assets/shared/desktop/logo-black.svg'

function Header() {
    return (
        <NavContainer>
            <Nav>
                <NavLogoLink>
                    <NavLogo src={logoImg} alt="photosnap logo"></NavLogo>
                </NavLogoLink>
                <NavMenu>
                    <NavItem>
                        stories
                    </NavItem>
                    <NavItem>
                        features
                    </NavItem>
                    <NavItem>
                        pricing
                    </NavItem>
                </NavMenu>
                <GlobalBtn />
            </Nav>
        </NavContainer>
    )
}

export default Header
