import styled, { keyframes } from 'styled-components'
import { Link as LinkR, NavLink } from 'react-router-dom'


const animation = {
    flash: keyframes`
        100%{
            mask-position:-140%;
            mask-size:200px;
        }
    `
}

export const NavContainer = styled.header`
    background:#fff;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    height:7.2rem;
    width:100%;
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
    position:relative;
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
    position:relative;
    @media screen and (max-width:767px){
        outline:0;
        border:0;
        min-width:100%;
        margin-top:3.5rem ;
        &::after{
            content:'';
            position:absolute;
            bottom:-1rem;left:0;
            width:100%;
            height:1px;
            opacity:.3;
            background:#000;
        }
    }

`
export const NavItem = styled(NavLink)`
    z-index:2;
    color:#000;
    margin:0 1.5rem;
    text-transform:uppercase;
    letter-spacing:.2rem;
    cursor:pointer;
    transition:all .8s ease-in-out;
    mask-position:0;
    mask-size:400px;
    mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(66,22,33,0.1));
    padding-left:1rem;
    position:relative;
    &::before{
        content:'';
        position:absolute;
        display:flex;
        width:3px;
        height:0;
        align-items:center;
        top:0;bottom:0;
        margin:auto 0;
        background:rgba(90, 119, 255, 1);
        transform:translateX(-7px);
        transition:height .3s linear;
    }
    &:hover{
        animation: ${animation.flash} 1.4s linear 1;
    }
    &:hover:before{
        height:70%;
    }
    &.${props => props.activeClassName}{
        &::before{
            height:70%;
        }
    }
    &:focus-visible:before{
        height:70%;
    }
    @media screen and (max-width:767px){
        margin:1.5rem 0;
    }
`
export const NavBtnWrapper = styled.div`
    display:block;
    @media screen and (max-width:767px){
        display:none;
    }
`
