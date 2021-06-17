import styled from 'styled-components';

const GlobalBtn = styled.div`
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

export default GlobalBtn