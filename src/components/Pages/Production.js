import React from 'react'
import Footer from '../../components/Footer'
import classes from './Test.module.css'


function Production() {
    return (
        <div className={classes.text}>
            <h1>Production</h1>
            <p>In 2018, world production of green coffee beans was 10.3 million tonnes, led by Brazil with 35% of the total (table). Vietnam, Indonesia, and Colombia were other major producers.</p>
            <h3>Processing</h3>
            <p>Coffee berries and their seeds undergo several processes before they become the familiar roasted coffee. Berries have been traditionally selectively picked by hand; a labor-intensive method, it involves the selection of only the berries at the peak of ripeness. More commonly, crops are strip picked, where all berries are harvested simultaneously regardless of ripeness by person or machine. After picking, green coffee is processed by one of two methods—the dry process method, simpler and less labor-intensive as the berries can be strip picked, and the wet process method, which incorporates fermentation into the process and yields a mild coffee.

            Then they are sorted by ripeness and color, and most often the flesh of the berry is removed, usually by machine, and the seeds are fermented to remove the slimy layer of mucilage still present on the seed. When the fermentation is finished, the seeds are washed with large quantities of fresh water to remove the fermentation residue, which generates massive amounts of coffee wastewater. Finally, the seeds are dried.

            The best (but least used) method of drying coffee is using drying tables. In this method, the pulped and fermented coffee is spread thinly on raised beds, which allows the air to pass on all sides of the coffee, and then the coffee is mixed by hand. In this method the drying that takes place is more uniform, and fermentation is less likely. Most African coffee is dried in this manner and certain coffee farms around the world are starting to use this traditional method.

            Next, the coffee is sorted, and labeled as green coffee. Some companies use cylinders to pump in heated air to dry the coffee seeds, though this is generally in places where the humidity is very high.

            An Asian coffee known as kopi luwak undergoes a peculiar process made from coffee berries eaten by the Asian palm civet, passing through its digestive tract, with the beans eventually harvested from feces. Coffee brewed from this process is among the most expensive in the world, with bean prices reaching $160 per pound or $30 per brewed cup. Kopi luwak coffee is said to have uniquely rich, slightly smoky aroma and flavor with hints of chocolate, resulting from the action of digestive enzymes breaking down bean proteins to facilitate partial fermentation.

In Thailand, black ivory coffee beans are fed to elephants whose digestive enzymes reduce the bitter taste of beans collected from dung. These beans sell for up to $1,100 a kilogram ($500 per lb), achieving the world's most expensive coffee, three times costlier than palm civet coffee beans.</p>
            <div className="text-image">
                <img src="/images/coffee-production.png" />
            </div>
            <h3>Roasting</h3>
            <p>The next step in the process is the roasting of the green coffee. Coffee is usually sold in a roasted state, and with rare exceptions, such as infusions from green coffee beans, coffee is roasted before it is consumed. It can be sold roasted by the supplier, or it can be home roasted.[92] The roasting process influences the taste of the beverage by changing the coffee bean both physically and chemically. The bean decreases in weight as moisture is lost and increases in volume, causing it to become less dense. The density of the bean also influences the strength of the coffee and requirements for packaging.

            The actual roasting begins when the temperature inside the bean reaches approximately 200 °C (392 °F), though different varieties of seeds differ in moisture and density and therefore roast at different rates. During roasting, caramelization occurs as intense heat breaks down starches, changing them to simple sugars that begin to brown, which alters the color of the bean.

            Sucrose is rapidly lost during the roasting process, and may disappear entirely in darker roasts. During roasting, aromatic oils and acids weaken, changing the flavor; at 205 °C (401 °F), other oils start to develop.One of these oils, caffeol, is created at about 200 °C (392 °F), which is largely responsible for coffee's aroma and flavor.

Roasting is the last step of processing the beans in their intact state. During this last treatment, while still in the bean state, more caffeine breaks down above 235 °C (455 °F). Dark roasting is the utmost step in bean processing removing the most caffeine. Although, dark roasting is not to be confused with the decaffeination process.</p>
            <Footer />
        </div>
    )
}

export default Production
