import React from 'react'
import Footer from '../../components/Footer'
import classes from './Test.module.css'

function LatteRecipe() {
    return (
        <div className={classes.text}>
            <h3>   Ingredients</h3>
            <p>18g ground espresso , or 1 espresso pod
            250ml milk</p>
            <h3>You will also need</h3>
            <p>large cup , 300-350ml capacity</p>
            <h3>Method</h3>
            <h3>STEP 1</h3>
            <p>Make around 35ml espresso using your coffee machine and pour it into the base of your cup.</p>
            <h3>STEP 2</h3>
            <p>Steam the milk with the steamer attachment so that it has around 2-3cm of foam on top. Hold the jug so that the spout is about 3-4cm above the cup and pour the milk in steadily. As the volume within the cup increases, bring the jug as close to the surface of the drink as possible whilst aiming to pour into the centre. Once the milk jug is almost touching the surface of the coffee, tilt to speed up the rate of pour. As you accelerate, the milk will hit the back of the cup and start naturally folding in on itself to create a pattern on the top.</p>

           <Footer />
        </div>
    )
}

export default LatteRecipe
