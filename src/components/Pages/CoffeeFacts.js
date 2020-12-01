import React from 'react'
import Footer from '../../components/Footer'
import classes from './Test.module.css'

function CoffeeFacts() {
    return (
        <div className={classes.text}>
            <h1>5 Coffee Facts That Every Coffee Lover Should Know</h1>
            <p>We here at Bored Panda have written many posts on weird facts about animals, random facts about life and interesting facts about history, but we've never before shared what we've found about everyone's favorite drink coffee! So this list is dedicated to you, coffee lovers and curious people.Coffee was first introduced in the 15th century, and to this day it maintains its status as one of the most popular beverages, with millions of coffee drinkers worldwide. The black brew is made from ripe berries which are picked from the coffee plant, processed and dried. Once dry, these 'beans' are roasted and ground to be brewed into the coffee drink we all know and love. Over the centuries, coffee has grown into a multi-billion dollar industry and become part of our lifestyle and even cultural phenomena. But how many coffee facts do you know about your beloved beverage? Check out the list below to learn more and share what you learned or which fun facts you knew already in the comments!</p>
            <h1>#1</h1>
            <div id={classes.img}>
                <img src="/images/fact1.png" alt="coffe fact #1" />
            </div>
            <p>People working at the University of Cambridge knew the feeling of finding an empty coffee pot so well, so they invented the first ever webcam with the sole purpose of checking the status of the coffee pot.</p>
            <h1>#2</h1>
            <div id={classes.img}>
                <img src="/images/fact2.png" alt="coffe fact #2" />
            </div>
            <p>Finland consumes the most coffee in the world.</p>
            <h1>#3</h1>
            <div id={classes.img}>
                <img src="/images/fact3.png" alt="coffe fact #3" />
            </div>
            <p>Despite the fact that caffeine is a mild diuretic, you don't lose more fluid than you take in by drinking coffee, so it cannot dehydrate you.</p>
            <h1>#4</h1>
            <div id={classes.img}>
                <img src="/images/fact4.png" alt="coffe fact #4" />
            </div>
            <p>Coffee beans are only called 'beans' because of the resemblance - they’re actually berries.</p>
            <h1>#5</h1>
            <div id={classes.img}>
                <img src="/images/fact5.png" alt="coffe fact #5" />
            </div>
            <p>Before coffee became widely available, the popular breakfast drink was beer.</p>
            <Footer />
        </div>
    )
}

export default CoffeeFacts
