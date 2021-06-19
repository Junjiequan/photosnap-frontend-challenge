import React from 'react'
import Hero from '../components/Stories/Hero'
import Main from '../components/Stories/Main'
import Gallery from '../components/Stories/Gallery'
import Features from '../components/Stories/Features'
import { MainObjOne,MainObjTwo } from '../components/Stories/Main/MainData'
import { galleryCollections } from '../components/Stories/Gallery/GalleryData'
import { FeaturesData } from '../components/Stories/Features/FeaturesData'

function Stories() {
    return (
        <>
        <Hero  />
        <Main {...MainObjOne} />
        <Main {...MainObjTwo} />
        <Gallery data={galleryCollections} />
        <Features data={FeaturesData} />
        </>
    )
}

export default Stories
