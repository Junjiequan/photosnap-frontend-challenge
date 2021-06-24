import Hero from '../components/Stories/Hero'
import Gallery from '../components/Stories/Gallery'
import { galleryCollections } from '../components/Stories/Gallery/GalleryData'
import {motion} from 'framer-motion'

function Stories({initial,animate,exit,variants,transition}) {
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
        <Gallery data={galleryCollections} />
        </motion.div>
        </>
    )
}

export default Stories
