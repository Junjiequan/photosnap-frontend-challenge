import React from 'react'
import {GlobalArrowBtn} from '../../../GlobalBtn'
import {
    BannerContainer,
    BannerWrapper,
    BannerTitle
} from './BannerElements'

function Banner() {
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerTitle>
                    We’re in beta. Get your invite today!
                </BannerTitle>
                <GlobalArrowBtn to="/" data-left-align={true} data-border-width="11rem" aria-label="link to the invitation page">
                        GET AN INVITE
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                            <g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g>
                        </svg>
                </GlobalArrowBtn>
            </BannerWrapper>
        </BannerContainer>
    )
}

export default Banner
