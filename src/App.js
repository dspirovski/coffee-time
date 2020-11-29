import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import Production from './components/Pages/Production'
import About from './components/Pages/About'
import EcologicalEffects from './components/Pages/EcologicalEffects'
import CoffeeDrinks from './components/Pages/CoffeeDrinks'
import Coffeehouses from './components/Pages/Coffeehouses'
import HealthAndBenefits from './components/Pages/HealthAndBenefits'
import CoffeeFacts from './components/Pages/CoffeeFacts'
import HistoryOfCoffee from './components/Pages/HistoryOfCoffee'
import LatteRecipe from './components/Pages/LatteRecipe'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Production" component={Production} />
                    <Route path="/Coffeehouses" component={Coffeehouses} />
                    <Route path="/About" component={About} />
                    <Route path="/HealthAndBenefits" component={HealthAndBenefits} />
                    <Route path="/EcologicalEffects" component={EcologicalEffects} />
                    <Route path="/CoffeeDrinks" component={CoffeeDrinks} />                   
                    <Route path="/CoffeeFacts" component={CoffeeFacts} />
                    <Route path="/HistoryOfCoffee" component={HistoryOfCoffee} />
                    <Route path="/LatteRecipe" component={LatteRecipe} />
                </Switch>
            </BrowserRouter>

        </div>

    )

}

export default App