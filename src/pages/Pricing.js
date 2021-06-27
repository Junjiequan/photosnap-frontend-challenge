import Hero from '../components/Pricing/Hero'
import Price from '../components/Pricing/Price'
import Compare from '../components/Pricing/Compare'
import Banner from '../components/Pricing/Banner'
import {motion} from 'framer-motion'

function Pricing({initial,animate,exit,variants,transition}) {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            variants={variants}
            transition={transition}
        >
        <Hero />
        <Price />
        <Compare />
        <Banner />
        </motion.div>
    )
}

export default Pricing
