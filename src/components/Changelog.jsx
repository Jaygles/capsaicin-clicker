import React, { Component } from 'react';

class Changelog extends Component {
  render() {
    return (
      <div className="cell medium-6 small-12" style={{height: 400}}>
        <div className="card medium-cell-block-y" style={{height: 400}}>
          <h3>Changelog</h3>
          <br />
          <span>Changelog Nov 30th 7:46pm</span>
          <br />
          <span>Added Footer</span>
          <span>Added Changelog</span>
          <br />
          <span>Changelog Nov 30th 4:38pm</span>
          <br />
          <span>Nerfed costs of some helpers</span>
          <span>Greenhouse - 10 gardeners to 4 gardeners</span>
          <span>Farm - 5 greenhouses to 3 greenhouses</span>
          <span>Aquaponics - 10 farms to 5 farms</span>
          <span>Pepper Forest - 1000 farms to 500 farms</span>
          <br />
          <span>Changelog Nov 30th 3:40pm</span>
          <br />
          <span>Added per second indicators and number truncation</span>
          <br />
          <span>Quick-fix</span>
          <br />
          <span>Function that determined the species was trying to read a non existent array value when you were on the final one. You should now be able to become the last species</span>
          <br />
          <span>Changelog Nov 29th 11:55pm</span>
          <br />
          <span>-Events</span>
          <span>Nerfed chances of wandering rogue event (-20% heat). Was 5/10000 chance every 2.5 seconds now 1/10000 chance (I got this like twice in a row wtf)</span>
          <span>Nerfed chances of pepper blight (-50% plants -30% heat). Was 20/10000 chance every 25 seconds now 1/10000 chance every 250 seconds</span>
          <span>Many many new events</span>
          <br />
          <span>Quick update</span>
          <br />
          <span>Madagascar upgrade increases production ten fold instead of doubling</span>
          <span>Another click doubling at 88888888 heat</span>
          <span>Another click doubling at 250000000 heat</span>
          <span>Click increase ten-fold at 500000000 heat</span>
          <span>Second Madagascar upgrade at 1000000000 heat. Increases production by 100x</span>
          <br />
          <span>Changelog Nov 29th 6:00pm</span>
          <br />
          <span>-Events</span>
          <span>Nerfed the chance of the tap on the back event since it was appearing too often</span>
          <br />
          <span>-Helpers</span>
          <span>New helper - Pepper Excavator</span>
          <span>Unlocks at 100,000,000 plants</span>
          <span>Costs - </span>
          <span>5,000,000 plants</span>
          <span>500,000 heat</span>
          <span>10 aeroponics</span>
          <span>Generates 500,000 plants per second</span>
          <span>If you buy Madagascar it will show as purchased and the button will turn gold</span>
          <br />
          <span>-Upgrades</span>
          <span>Added more descriptive text to each upgrade for immersion</span>
          <span>New Upgrade - Automated Greenhouses</span>
          <span>Costs 2500 Heat</span>
          <span>Halves the gardener requirement on purchasing including the automated purchasing</span>
          <br />
          <span>This update shouldn't reset your game. If it does I'll make it up somehow</span>
          <br />
          <span>Mini-update - Chat should load in the correct order now on page load</span>
          <br />
          <span>Changelog Nov 28th 8:57pm</span>
          <br />
          <span>-Added new helper</span>
          <span>-Madagascar - costs 100 pepper forests and 1,000,000 heat. Generates 20,000,000 plants per second. You can only have one of these.</span>
          <br />
          <span>-Added new upgrades</span>
          <span>-Min/Max Madagascar - costs 250,000,000 heat, You min/max Madagascar doubling pepper production there.</span>
          <span>-Click x10 modifier for 10,000 heat</span>
          <br />
          <span>-Added new events</span>
          <span>-Added super extra rare event you have .01% chance of this happening every 1250 seconds</span>
          <br />
          <span>Due to adding new helpers this will reset your game again</span>
          <br />
          <span>Changelog Nov 28th 8:21pm</span>
          <br />
          <span>-Added new events</span>
          <span>-Added an extra rare event category rolling once every 250 seconds</span>
          <br />
          <span>-Added new helper</span>
          <span>-Pepper forests - costs 1000 farms and 50,000 heat. Generates 50,000 plants per second.</span>
          <br />
          <span>-Added new upgrades</span>
          <span>-Assembly Lines -15000 Heat. Adding assembly lines to your factories increases the efficiency ten fold</span>
          <span>-Mass Recruiting - 50000 Heat. A global recruitment push brings one hundred gardeners to your employment per second but at quadruple cost</span>
          <span>-Genetic Modifying - 2500000 Heat. You hire scientists to look into modifying your pepper's genetic code directly. Your heat grows twice as fast.</span>
          <span>-Better Forests - 100000000 Heat. Double effectiveness of pepper forests</span>
          <span>-More click doubling at 250,000, 750,000, 5,000,000 Heat</span>
          <br />
          <span>-Typo fixes</span>
          <br />
          <span>-Event fixes</span>
          <span>-Rare +1 farm event didn't add a farm</span>
          <span>-Rare +1 gardener event didn't add a gardener</span>
          <br />
          <span>This patch will reset your game</span>
          <br />
          <span>Changelog Nov 28th 2017 3:15pm</span>
          <span>-Added timestamps to chat</span>
          <br />
          <span>Beginning of history</span>
        </div>
      </div>
    )
  }
}

export default Changelog