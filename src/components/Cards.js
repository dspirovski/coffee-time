import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
    return (

        <div className="cards">
            <h1>Check this out.</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/coffee-and-benefits.png"
                            text="Health benefits and risks of drinking coffee"
                            path="/HealthAndBenefits"
                            label="Benefits and risks"
                        />
                        <CardItem
                            src="images/coffeeFacts.png"
                            text="5 Coffee Facts That Every Coffee Lover Should Know"
                            path="/CoffeeFacts"
                            label="Facts"

                        />
                        <CardItem
                            src="images/history-of-coffee.png"
                            text="History of coffee"
                            path="/HistoryOfCoffee"
                            label="History"
                        />
                        <CardItem
                            src="images/latte.png"
                            text="Latte recipe"
                            path="/LatteRecipe"
                            label="Recipe"
                        />
                    </ul>
                </div>
            </div>


        </div>



    )
}

export default Cards