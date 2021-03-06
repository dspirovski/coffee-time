import React from 'react'
import Footer from '../Footer'
import classes from './Test.module.css'


function About() {
    return (
        <div className={classes.text}>
            <h1>About coffee</h1>
            <div className="text-image">
                <img src="/images/Roasted-coffee-beans.png" />
            </div>


            <p>Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds (referred to as "beans") are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.

            Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content. It is one of the most popular drinks in the world, and can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). It is usually served hot, although chilled or iced coffee is common. Sugar, sugar substitutes, milk or cream are often used to lessen the bitter taste.

            Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.

            The earliest credible evidence of coffee-drinking as the modern beverage appears in modern-day Yemen in southern Arabia in the middle of the 15th century in Sufi shrines where coffee seeds were first roasted and brewed in a manner similar to how it is now prepared for drinking. The Yemenis procured the coffee beans from the Ethiopian Highlands via coastal Somali intermediaries, and began cultivation. By the 16th century, the drink had reached the rest of the Middle East and North Africa, later spreading to Europe.

            The two most commonly grown coffee bean types are C. arabica and C. robusta. Coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, the Indian subcontinent, and Africa. As of 2018, Brazil was the leading grower of coffee beans, producing 35% of the world total.

Coffee is a major export commodity as the leading legal agricultural export for numerous countries. It is one of the most valuable commodities exported by developing countries. Green, unroasted coffee is one of the most traded agricultural commodities in the world. The way developed countries trade coffee with developing nations has been criticised, as well as the impact on the environment with regards to the clearing of land for coffee-growing and water use. Consequently, the markets for fair trade and organic coffee are expanding.</p>

            <Footer />
        </div>



    )
}

export default About


