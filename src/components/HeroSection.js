import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import CoffeeDrinks from '../components/Pages/CoffeeDrinks'
import { Link } from 'react-router-dom';
import './Button.css'


function HeroSection() {
    return (
        <div className="hero-container">
            <img src="/images/coffee2.png" />
            <h1>START THE DAY WITH GREAT TASTE OF COFFE</h1>
            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
                 facit eorum claritatem. Investigationes demonstraverunt lectores le</p>
            <div>
                <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--large">

                    <Link to="/CoffeeDrinks" className="central_btn" onClick={CoffeeDrinks}>MORE INFO</Link>

                </Button>




            </div>
        </div>
    )
}

export default HeroSection
