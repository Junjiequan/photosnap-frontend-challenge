import React from 'react'
import { 
    FeaturesContainer,
    FeaturesWrapper,
    FeaturesItem,
    FeaturesIconWrapper,
    FeaturesIcon,
    FeaturesH2,
    FeaturesP
} from './FeaturesElements'

function Features({data}) {
    return (
        <FeaturesContainer>
            <FeaturesWrapper>
                {data.map((props,index)=>{
                    return(
                        <FeaturesItem key={index}>
                            <FeaturesIconWrapper>
                                <FeaturesIcon src={props.icon} alt={props.alt}/>
                            </FeaturesIconWrapper>
                            <FeaturesH2>{props.title}</FeaturesH2>
                            <FeaturesP>{props.desc}</FeaturesP>
                        </FeaturesItem>
                    )
                })}
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Features
