import styled from 'styled-components'

const plan ={
    regular:`
        display:flex;
        flex-direction:column;
        padding:0 4rem;
        margin:3.6rem 0;
        align-items:center;
        max-width:35rem;
        width:100%;
        min-height:40.7rem;
        background: hsla(0, 0%, 96%, 1);
        position: relative;
        color:#000;
        text-align:center;
        position:relative;
        @media screen and (min-width:600px) and (max-width:1024px){
            max-width:100%;
            align-items:flex-start;
            text-align:left;
            min-height:0;
            padding:4rem;
        }
    `,
    highlighted:`
        position:relative;
        display:flex;
        flex-direction:column;
        padding:3.6rem 4rem;
        margin:0 3rem;
        align-items:center;
        max-width:35rem;
        width:100%;
        min-height:47rem;
        background: hsla(0, 100%, 0%, 1);
        position: relative;
        color:#fff;
        text-align:center;
        &::after{
            position:absolute;
            content:'';
            display:flex;
            background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
            width:100%;
            height:6px;
            top:0;left:0;
        }
        @media screen and (min-width:600px) and (max-width:1024px){
            max-width:100%;
            align-items:flex-start;
            text-align:left;
            margin:0;
            min-height:0;
            padding:4rem;
            &::after{
                position:absolute;
                content:'';
                display:flex;
                background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
                width:6px;
                height:100%;
                top:0;left:0;
            }
        }
        @media screen and (max-width:600px) and (max-width:1024px){
            margin:0;
        }
    `
}

export const PriceContainer = styled.section`
    display:flex;
    justify-content:center;
    margin-top:12rem;
    margin-bottom:16rem;
    padding:0 2.9rem;
`
export const PriceWrapper = styled.div`
    display:flex;
    max-width:1110px;
    align-items:center;
    flex-direction:column;
`
export const PriceToggleWrapper = styled.div`
    display:flex;
    margin-bottom:4.8rem;
`
export const PriceMonth = styled.h3`
    user-select: none;
    font-size:1.8rem;
    line-height:2.5rem;
    font-weight:700;
    transition:all .3s ease;
    opacity:${({isToggled}) => isToggled?`0.3`:`1`};
`
export const PriceYear = styled.h3`
    user-select: none;
    font-size:1.8rem;
    line-height:2.5rem;
    font-weight:700;
    transition:all .3s ease;
    opacity:${({isToggled}) => isToggled?`1`:`0.3`};
`
export const PriceToggle = styled.button`
    margin:0 3.2rem;
    width:6.4rem;
    height:3.2rem;
    border-radius:2.5rem;
    display:flex;
    cursor:pointer;
    padding:0 .5rem;
    align-items:center;
    transition: background-color .3s ease;
    background: ${({isToggled}) => isToggled? `hsl(0, 100%, 0%)`:`hsl(0, 0%, 88%)`};
    position:relative;
    &:focus-visible{
        outline-offset:5px;
        transition:all .3s ease;
    }

`
export const ToggleBall = styled.div`
    position:absolute;
    display:flex;
    cursor: pointer;
    width:2.4rem;
    height:2.4rem;
    border-radius:100%;
    transition: transform .4s ease-out;
    background:${({isToggled}) => isToggled? `#fff`: `#000`};
    transform:${({isToggled}) => isToggled? `translateX(3rem)`: `translateX(0)`};
`

export const PricePlanWrapper = styled.div`
    max-width:1110px;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: flex-start;
`
export const PlanBox = styled.div`
    ${props => props.highlighted 
        ? plan.highlighted 
        : plan.regular
    };
`
export const PlanH2 = styled.h2`
    margin-top:5.6rem;
    margin-bottom:1.8rem;
    font-size:2.4rem;
    font-weight:700;
    line-height:2.5rem;
    @media screen and (min-width:600px) and (max-width:1024px){
        margin-top:0;
    }
`
export const PlanP = styled.p`
    max-width:27rem;
    margin-bottom:4rem;
    font-weight:400;
    font-size:1.5rem;
    line-height:2.5rem;
    letter-spacing:0;
    opacity:.6;
`
export const PlanPrice = styled.div`
    font-weight:700;
    font-size:4rem;
    line-height:4.8rem;
    letter-spacing:0.41rem;
    display:flex;
    flex-direction:column;
    @media screen and (min-width:600px) and (max-width:1024px){
        position:absolute;
        right:4rem;
        align-items:flex-end;
        text-align:right;
        ${PlanP}{
            transform:translateX(-.7rem);
        }
    }
`

export const PlanBtn = styled.button`
    background:${({highlighted}) => highlighted? `#fff` : `#000`};
    color:${({highlighted}) => highlighted? `#000` : `#fff`};
    text-transform:uppercase;
    font-weight:700;
    width:100%;
    height:4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    letter-spacing:.2rem;
    cursor:pointer;
    transition: background-color .3s ease, color .3s ease;
    position:relative;
    &::after{
        position:absolute;
        content:'';
        display:flex;
        bottom:-2px;left:0;
        background: salmon;
        width:0;
        height:2px;
        transition:all .3s ease;
    }
    &:hover:after{
        width:100%;
    }
    &:hover{
        background: hsla(0, 0%, 88%, 1);
        color: #000;
    }
    &:active{
        transform:translateY(2px);
    }
    @media screen and (min-width:600px) and (max-width:1024px){
            max-width:27rem;
            margin-top:0;
        }
`