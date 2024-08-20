import { motion } from 'framer-motion'

const HeroSection = () => (
    <motion.div
        className='hero-section'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
    >
        <h1>Welcome to AK print Solution</h1>
        <p>Your Trusted Partner for LED Boards</p>
    </motion.div>    
)

export default HeroSection;