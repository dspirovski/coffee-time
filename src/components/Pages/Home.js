import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'


function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home
