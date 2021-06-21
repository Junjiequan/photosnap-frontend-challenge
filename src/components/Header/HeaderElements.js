import styled, { keyframes } from 'styled-components'
import { Link as LinkR, NavLink } from 'react-router-dom'

const animation = {
    flash: keyframes`
        100%{
            mask-position:-150%;
            mask-size:195px;
        }
    `
}

export const NavContainer = styled.section`
    background:#fff;
    position:sticky;
    display:flex;
    justify-content:center;
    align-items:center;
    height:7.2rem;
    top:0;
    z-index:99;
`
export const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 3.5rem;
    width:100%;
    max-width:1100px;
    font-size:1.2rem;
    font-weight:700;
`
export const NavLogoLink = styled(LinkR)`
    display:flex;
    cursor:pointer;
`
export const NavLogo = styled.img`
    pointer-events:none;
    max-width:16.9rem;
    max-height:1.6rem;
`
export const NavMenu = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    @media screen and (max-width:767px){
        display:none;
    }
`
export const NavItem = styled(NavLink)`
    z-index:2;
    color:#000;
    margin:0 2rem;
    text-transform:uppercase;
    letter-spacing:.2rem;
    cursor:pointer;
    transition:all .8s ease-in-out;
    mask-position:0;
    mask-size:400px;
    mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2));
    border-left: 3px solid white;
    padding-left:.3rem;
    &:hover{
        animation: ${animation.flash} .6s ease-in 1;
        border-left: 3px solid rgba(90, 119, 255, 1);
    }
    &.${props => props.activeClassName}{
        border-left: 3px solid rgba(90, 119, 255, 1);
    }

`
export const NavBtnWrapper = styled.div`
    display:block;
    @media screen and (max-width:767px){
        display:none;
    }
`
export const NavLinks = styled.div`

`
