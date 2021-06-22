import styled from 'styled-components';


export const FeaturesContainer = styled.section`
    margin:10.8rem 2rem;
    display:flex;
    justify-content:center;
`
export const FeaturesWrapper = styled.div`
    display:flex;
    max-width:1100px;
    flex-wrap:wrap;
    justify-content:space-between;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`
export const FeaturesItem = styled.div`
    display:flex;
    margin:5.2rem 0;
    flex-direction: column;
    align-items:center;
    height:23.6rem;
    max-width:35rem;
    text-align:center;
    @media screen and (max-width:1160px){
        margin:4rem 0;
    }

`
export const FeaturesIconWrapper = styled.div`
    margin-bottom:4.8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height:7.2rem;
`
export const FeaturesIcon = styled.img`
    width:100%;
`
export const FeaturesH2 = styled.h2`
    font-size:1.8rem;
    line-height:2.5rem;
    margin-bottom:1.6rem;
`
export const FeaturesP = styled.p`
    font-size:1.5rem;
    line-height:2.5rem;
`