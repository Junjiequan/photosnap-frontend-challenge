import Hero from '../components/Home/Hero'
import Main from '../components/Home/Main'
import Gallery from '../components/Home/Gallery'
import Features from '../components/Home/Features'
import { MainObjOne,MainObjTwo } from '../components/Home/Main/MainData'
import { galleryCollections } from '../components/Home/Gallery/GalleryData'
import { FeaturesData } from '../components/Home/Features/FeaturesData'
import {motion} from 'framer-motion'

function Home({initial,animate,exit,variants,transition}) {
    return (
        <>
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            variants={variants}
            transition={transition}
        >
            <Hero  />
            <Main {...MainObjOne} />
            <Main {...MainObjTwo} />
            <Gallery data={galleryCollections} />
            <Features data={FeaturesData} />
        </motion.div>
        </>
    )
}

export default Home
