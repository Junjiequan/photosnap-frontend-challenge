import Hero from '../components/Feature/Hero'
import Feature from '../components/Feature/Features'
import Banner from '../components/Feature/Banner'
import {FeaturesData} from '../components/Feature/Features/FeaturesData'

function Features() {
    return (
        <>
        <Hero  />
        <Feature data={FeaturesData} />
        <Banner />
        </>
    )
}

export default Features
