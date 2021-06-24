import React,{useState}from 'react'
import {
    PriceContainer,
    PriceWrapper,
    PriceToggleWrapper,
    PriceMonth,
    PriceYear,
    PriceToggle,
    ToggleBall,
    PricePlanWrapper,
    PlanBox,
    PlanH2,
    PlanP,
    PlanPrice,
    PlanBtn
} from './PriceElements'

function Price() {
    const [isToggled, setIsToggled] = useState(false);
    const toggle =()=> setIsToggled(!isToggled);
    const priceTags = [
        {
            plan:'Basic', 
            info:`Includes basic usage of our platform. Recommended for new and aspiring photographers.`,
            monthly:`$19.00`,
            yearly:`$190.00`,
            highlighted:false
        },
        {
            plan:'Pro', 
            info:`More advanced features available. Recommended for photography veterans and professionals.`,
            monthly:`$39.00`,
            yearly:`$390.00`,
            highlighted:true
        },
        {
            plan:'Business', 
            info:`Additional features available such as more detailed metrics. Recommended for business owners.`,
            monthly:`$99.00`,
            yearly:`$990.00`,
            highlighted:false
        }
    ]
    const renderPriceTag = (price,index)=>{
        return(
            <PlanBox highlighted={price.highlighted} key={index}>
                <PlanH2>{price.plan}</PlanH2>
                <PlanP>
                    {price.info}
                </PlanP>
                <PlanPrice>
                    { isToggled ? `${price.yearly}`:`${price.monthly}`}
                    <PlanP >{ isToggled ? `per year`:`per month`}</PlanP>
                </PlanPrice>
                <PlanBtn  highlighted={price.highlighted}>
                    pick plan
                </PlanBtn>
            </PlanBox>
        )
    }

    return (
        <PriceContainer>
            <PriceWrapper>
                <PriceToggleWrapper>
                    <PriceMonth isToggled={isToggled}>Monthly</PriceMonth>
                    <PriceToggle  isToggled={isToggled} onClick={toggle} aria-label="price plan toggle button">
                        <ToggleBall isToggled={isToggled}></ToggleBall>
                    </PriceToggle>
                    <PriceYear isToggled={isToggled}>Yearly</PriceYear>
                </PriceToggleWrapper>
                <PricePlanWrapper>
                    {priceTags.map(renderPriceTag)}
                </PricePlanWrapper>
            </PriceWrapper>
        </PriceContainer>
    )
}

export default Price
