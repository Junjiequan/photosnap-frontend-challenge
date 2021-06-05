import React from 'react'
import{
    NavContainer,
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
    NavBtn,
} from './HeaderElements';
import  logoImg  from '../../assets/shared/desktop/logo.svg'

function Header() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo src={logoImg} alt="photosnap logo"></NavLogo>
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
                <NavBtn>
                    get an invite
                </NavBtn>
            </Nav>
        </NavContainer>
    )
}

export default Header
