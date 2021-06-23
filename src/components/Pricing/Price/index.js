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
    return (
        <PriceContainer>
            <PriceWrapper>
                <PriceToggleWrapper>
                    <PriceMonth isToggled={isToggled}>Monthly</PriceMonth>
                    <PriceToggle  isToggled={isToggled} onClick={toggle}>
                        <ToggleBall isToggled={isToggled}></ToggleBall>
                    </PriceToggle>
                    <PriceYear isToggled={isToggled}>Yearly</PriceYear>
                </PriceToggleWrapper>
                <PricePlanWrapper>
                    <PlanBox>
                        <PlanH2>Basic</PlanH2>
                        <PlanP>
                            Includes basic usage of our platform. 
                            Recommended for new and aspiring photographers.
                        </PlanP>
                        <PlanPrice>
                            { isToggled ? `$190.00`:`$19.00`}
                            <PlanP >{ isToggled ? `per year`:`per month`}</PlanP>
                        </PlanPrice>
                        <PlanBtn>
                            pick plan
                        </PlanBtn>
                    </PlanBox>
                    <PlanBox highlighted={true}>
                        <PlanH2>Pro</PlanH2>
                        <PlanP>
                            More advanced features available. 
                            Recommended for photography veterans and professionals.
                        </PlanP>
                        <PlanPrice>
                            { isToggled ? `$390.00`:`$39.00`}
                            <PlanP >{ isToggled ? `per year`:`per month`}</PlanP>
                        </PlanPrice>
                        <PlanBtn highlighted={true}>
                            pick plan
                        </PlanBtn>
                    </PlanBox>
                    <PlanBox>
                        <PlanH2>Business</PlanH2>
                        <PlanP>
                            Additional features available such as more detailed metrics. 
                            Recommended for business owners.
                        </PlanP>
                        <PlanPrice>
                        { isToggled ? `$990.00`:`$99.00`}
                            <PlanP >{ isToggled ? `per year`:`per month`}</PlanP>
                        </PlanPrice>
                        <PlanBtn>
                            pick plan
                        </PlanBtn>
                    </PlanBox>
                </PricePlanWrapper>
            </PriceWrapper>
        </PriceContainer>
    )
}

export default Price
