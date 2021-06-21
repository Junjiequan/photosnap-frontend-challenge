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
