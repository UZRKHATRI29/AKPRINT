import React from 'react'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products';
import About from '../components/About';

const Home = () => {
    return(
        <div className='home-page'>
            <HeroSection/>
            <Products/>
            <About/>
        </div>
    )
}

export default Home;