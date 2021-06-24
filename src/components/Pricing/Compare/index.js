import React from 'react'
import Table from 'react-bootstrap/Table'
import './TableBootstrap.css'
import checkIcon from '../../../assets/pricing/desktop/check.svg'
import {
    CompareContainer,
    CompareWrapper,
    CompareTitle
} from './CompareElements'

function Compare() {
    const check = <img src={checkIcon} style={{display:'inline-flex'}} alt="check mark" />
    const features = [
        {feature:"UNLIMITED STORY POSTING", basic:check, pro:check, business:check},
        {feature:"UNLIMITED PHOTO UPLOAD", basic:check, pro:check, business:check},
        {feature:"EMBEDDING CUSTOM CONTENT", basic:'', pro:check, business:check},
        {feature:"CUSTOMIZE METADATA", basic:'', pro:check, business:check},
        {feature:"ADVANCED METRICS", basic:'', pro:'', business:check},
        {feature:"PHOTO DOWNLOADS", basic:'', pro:'', business:check},
        {feature:"SEARCH ENGINE INDEXING", basic:'', pro:'', business:check},
        {feature:"CUSTOM ANALYTICS", basic:'', pro:'', business:check},
    ]
    const renderFeatures = (feature, index)=>{
        return (
            <tr key={index}>
                <td >{feature.feature}</td>
                <td >{feature.basic}</td>
                <td >{feature.pro}</td>
                <td >{feature.business}</td>
            </tr>
        )
    }
    return (
        <CompareContainer>
            <CompareWrapper>
                <CompareTitle>Compare</CompareTitle>

                <Table className="table"  responsive hover >
                    <thead className="table-dark ">
                        <tr>
                            <th >THE FEATURES</th>
                            <th >BASIC</th>
                            <th >Pro</th>
                            <th >Business</th>
                        </tr>
                    </thead>
                    <tbody >
                        {features.map(renderFeatures)}
                    </tbody>
                </Table>
            </CompareWrapper>
        </CompareContainer>
    )
}

export default Compare
