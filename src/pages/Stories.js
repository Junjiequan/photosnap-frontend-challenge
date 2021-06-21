import Hero from '../components/Stories/Hero'
import Gallery from '../components/Stories/Gallery'
import { galleryCollections } from '../components/Stories/Gallery/GalleryData'

function Stories() {
    return (
        <>
        <Hero  />
        <Gallery data={galleryCollections} />
        </>
    )
}

export default Stories
