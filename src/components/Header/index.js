import { useState } from 'react'
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
import { useMediaQuery } from 'react-responsive';
import { slide as Menu} from 'react-burger-menu';
import NavStyles from './NavStyles';

function Header() {
    const [menuOpen,SetMenuOpen] = useState(false);
    const handleStateChange=(state)=>SetMenuOpen(state.isOpen);
    const closeMenu=()=>SetMenuOpen(false);
    
    const isMobile = useMediaQuery({ maxWidth:"767px" });

    if(isMobile)
    return (
        <NavContainer>
            <Nav>
                <NavLogoLink to="/">
                    <NavLogo src={logoImg} alt="photosnap logo" />
                </NavLogoLink>
                <Menu  isOpen={menuOpen} onStateChange={state=> handleStateChange(state)} right styles={NavStyles}  >
                    <NavMenu>
                        <NavItem onClick={() => closeMenu()} to="/stories" activeClassName="active">
                            stories
                        </NavItem>
                        <NavItem onClick={() => closeMenu()} to="/features" activeClassName="active">
                            features
                        </NavItem>
                        <NavItem onClick={() => closeMenu()} to="/pricing" activeClassName="active">
                            pricing
                        </NavItem>
                    </NavMenu>
                    <NavBtnWrapper >
                        <GlobalBtn onClick={() => closeMenu()} href="#"/>
                    </NavBtnWrapper>
                </Menu>
            </Nav>
        </NavContainer>
    );
     
    return (
        <NavContainer>
            <Nav>
                <NavLogoLink to="/">
                    <NavLogo src={logoImg} alt="photosnap logo" />
                </NavLogoLink>
                <NavMenu>
                    <NavItem to="/stories" activeClassName="active">
                        stories
                    </NavItem>
                    <NavItem to="/features" activeClassName="active">
                        features
                    </NavItem>
                    <NavItem to="/pricing" activeClassName="active">
                        pricing
                    </NavItem>
                </NavMenu>
                <NavBtnWrapper >
                    <GlobalBtn href="#"/>
                </NavBtnWrapper>
            </Nav>
        </NavContainer>
    )
}

export default Header
