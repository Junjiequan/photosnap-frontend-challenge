import styled from 'styled-components'
// Header,
// Nav,
// NavLogo,
// NavMenu,
// NavItem,
// NavLinks,
// NavBtn,

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
    margin:0 16.5rem;
    width:100%;
    max-width:1440px;
    font-size:1.2rem;
    font-weight:700;
`
export const NavLogo = styled.img`
    max-width:16.9rem;

`
export const NavMenu = styled.ul`
    width:100%;
    display:flex;
    justify-content:center;
`
export const NavItem = styled.li`
    z-index:2;
    margin:0 2rem;
    text-transform:uppercase;
    letter-spacing:.2rem;
    cursor:pointer;
    transition:all .7s ease;
    mask-position:0;
    mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.2));
    mask-size:280px;
    &:hover{
        mask-position:-100%;
        mask-size:160px;
    }
`

export const NavLinks = styled.div`

`
