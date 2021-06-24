import Hero from '../components/Feature/Hero'
import Feature from '../components/Feature/Features'
import Banner from '../components/Feature/Banner'
import {FeaturesData} from '../components/Feature/Features/FeaturesData'
import {motion} from 'framer-motion'

function Features({initial,animate,exit,variants,transition}) {
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
        <Feature data={FeaturesData} />
        <Banner />
        </motion.div>
        </>
    )
}

export default Features
