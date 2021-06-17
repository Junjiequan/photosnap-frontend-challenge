import React from 'react'
import{
    NavContainer,
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
} from './HeaderElements';
import  GlobalBtn  from '../../GlobalBtn';
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
                <GlobalBtn />
            </Nav>
        </NavContainer>
    )
}

export default Header
