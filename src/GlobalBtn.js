import styled from 'styled-components';

export const GlobalBtn = styled.div`
    min-width:16rem;
    height:4rem;
    color:#fff;
    background:#000;
    display:flex;
    white-space:nowrap;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    letter-spacing:.2rem;
    cursor:pointer;
    transition:all .4s ease-out;
    position:relative;
    &::before{
        content:'get an invite';
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        width:0;
        height:100%;
        background:#dfdfdf;
        transition:all .3s ease;
    }
    &:hover{
        color:#000;
    }
    &:hover:before{
        background:#dfdfdf;
        width:100%;
    }
`
export const GlobalArrowBtn = styled.a`
    cursor:pointer;
    display:flex;
    position:relative;
    letter-spacing:.2rem;
    line-height:1.5rem;
    justify-content:flex-start;
    align-items:center;
    font-size:1.2rem;
    color:#fff;
    transition:all .3s ease;
    & > svg {
        margin-left:1.8rem;
        transition:transform .3s ease-in;
        transition-delay:220ms;
        & g{
            stroke:#fff;
        }
    }
    &::after{
        content:'';
        position:absolute;
        display:block;
        width:0;
        height:1px;
        left:${({left})=> left ? `0` : `7.5rem`};
        bottom:-.1rem;
        background:#fff;
        transition: width .3s ease;
    }
    &:hover:after{
        width:10.5rem;
    }
    &:hover > svg{
        transform:translateX(2rem);
    }
`