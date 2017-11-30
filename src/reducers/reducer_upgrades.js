export default function(state, action) {
  //Add new click upgrades in the game reducer at the BUTTON_CLICKED action
  //Add helper upgrades in the game reducer at the INTERVAL action
  //TODO Think about how I can remove the purchased status in the upgrades array since it seems messy
  let upgrades = [
    {upgrade: 'click_plus_one', text:'50 Heat - Increase plant per click by 2', capsaicinCheck: 50, purchased: false},
    {upgrade: 'better_gardeners', text:'100 Heat - You buy your gardners better tools. Double effectiveness of gardeners', capsaicinCheck: 100, purchased: false},
    {upgrade: 'click_plus_ten', text:'150 Heat - Increase plant per click by 10', capsaicinCheck: 150, purchased: false},
    {upgrade: 'better_greenhouses', text:'200 Heat - You ramp up the quality control in your greenhouses. Double effectiveness of greenhouses', capsaicinCheck: 200, purchased: false},
    {upgrade: 'double_click_one', text:'300 Heat - Double plants per click', capsaicinCheck: 300, purchased: false},
    {upgrade: 'hiring_manager', text: '400 Heat - This hiring manager will hire one gardener per second but at double cost', capsaicinCheck: 400, purchased: false},
    {upgrade: 'better_farms', text: '500 Heat - Double effectiveness of farms', capsaicinCheck: 500, purchased: false},
    {upgrade: 'glass_factory', text: '750 Heat - You purchase a glass factory. You gain one greenhouse per second at double cost', capsaicinCheck: 750, purchased: false},
    {upgrade: 'double_click_two', text:'1000 Heat - Double plants per click', capsaicinCheck: 1000, purchased: false},
    {upgrade: 'double_click_three', text:'2000 Heat - Double plants per click', capsaicinCheck: 2000, purchased: false},
    {upgrade: 'automated-greenhouses', text:'2500 Heat - You buy some tools to automate tasks in your greenhouses. Greenhouses require half as many gardners to purchase.', capsaicinCheck: 2500, purchased: false},
    {upgrade: 'hiring_firm', text: '3000 Heat - This hiring firm will hire ten gardeners per second but at triple cost', capsaicinCheck: 3000, purchased: false},
    {upgrade: 'corporate_farms', text: '5000 Heat - Incorporate your farm empire, will create one farm per second at double cost.', capsaicinCheck: 5000, purchased: false},
    {upgrade: 'double_click_four', text:'7500 Heat - Double plants per click', capsaicinCheck: 7500, purchased: false},
    {upgrade: 'click_times_ten', text:'10000 Heat - Your plants per click increases ten fold!', capsaicinCheck: 10000, purchased: false},
    {upgrade: 'assembly_line', text:'15000 Heat - Adding assembly lines to your glass factory increases the efficiency ten fold', capsaicinCheck: 15000, purchased: false},
    {upgrade: 'double_click_five', text:'25000 Heat - Double plants per click', capsaicinCheck: 25000, purchased: false},
    {upgrade: 'mass_recruiting', text: '50000 Heat - A global recruitment push brings one hundred gardeners to your employment per second but at quadruple cost', capsaicinCheck: 50000, purchased: false},
    {upgrade: 'better_aquaponics', text: '100000 Heat - You source extra pure glacial spring water for your aquaponics facilities. Double effectiveness of aquaponics', capsaicinCheck: 100000, purchased: false},
    {upgrade: 'double_click_six', text:'250000 Heat - Double plants per click', capsaicinCheck: 250000, purchased: false},
    {upgrade: 'better_aeroponics', text: '500000 Heat - You source extra pure glacial air for your aeroponics facilities. Double effectiveness of aeroponics', capsaicinCheck: 500000, purchased: false},
    {upgrade: 'universal_click_times_ten', text:'666666 Heat - You pray to false pepper idols and they reward you.. for a price. All click values increase 10x. (Does not affect Madagascar)', capsaicinCheck: 750000, purchased: false},
    {upgrade: 'double_click_seven', text:'750000 Heat - Double plants per click', capsaicinCheck: 750000, purchased: false},
    {upgrade: 'better_biodomes', text: '1000000 Heat - You watched Bio-Dome(1996) which inspired you to make some improvements to your own. Double effectiveness of biodomes', capsaicinCheck: 1000000, purchased: false},
    {upgrade: 'genetic_modifying', text: '2500000 Heat - You hire scientists to look into modifying your pepper\'s genetic code directly. Your heat grows twice as fast.', capsaicinCheck: 2500000, purchased: false},
    {upgrade: 'double_click_eight', text:'50000000 Heat - Double plants per click', capsaicinCheck: 50000000, purchased: false},
    {upgrade: 'improved_genetics', text: '75000000 Heat - You have acquired Government funding for you genetic research. Your scientists achieved a breakthrough. Doubles heat gain', capsaicinCheck: 75000000, purchased: false},
    {upgrade: 'double_click_nine', text:'88888888 Heat - Double plants per click', capsaicinCheck: 88888888, purchased: false},
    {upgrade: 'better_forests', text: '100000000 Heat - You found a hermit who mastered the ways of permaculture. He agrees to tend your forests. Double effectiveness of pepper forests', capsaicinCheck: 100000000, purchased: false},
    {upgrade: 'better_excavators', text: '200000000 Heat - You acquire orichalcum excavator buckets. Excavators double in effectiveness.', capsaicinCheck: 200000000, purchased: false},
    {upgrade: 'double_click_ten', text:'250000000 Heat - Double plants per click', capsaicinCheck: 250000000, purchased: false},
    {upgrade: 'min_max_madagascar', text: '300000000 Heat - You min/max Madagascar. Pepper production increases ten-fold.', capsaicinCheck: 300000000, purchased: false},
    {upgrade: 'click_times_ten_two', text:'500000000 Heat - Increases plants per click ten-fold', capsaicinCheck: 500000000, purchased: false},
    {upgrade: 'squeeze_madagascar', text: '1000000000 Heat - You squeeze Madagascar for everything it has. Pepper production increases a hundred times over!', capsaicinCheck: 1000000000, purchased: false},
  ];

  let eligibleUpgrades = [];

  switch(action.type) {
    case 'PURCHASE_UPGRADE': {
      //Checks to see if the chosen upgrade is in the eligible upgrades array
      for (let i = 0; i < action.payload.game.upgrades.eligibleUpgrades.length; i += 1) {
        //Checks if there is enough capsaicin to purchase the upgrades
        if (action.payload.game.upgrades.eligibleUpgrades[i].upgrade === action.payload.upgrade && action.payload.game.upgrades.eligibleUpgrades[i].capsaicinCheck <= action.payload.game.capsaicin) {
          //Add upgrades to purchased upgrades array
          action.payload.game.upgrades.purchasedUpgrades.push(action.payload.upgrade);
          //Subtract the cost of the upgrade from the player's capsaicin
          action.payload.game.capsaicin -= action.payload.game.upgrades.eligibleUpgrades[i].capsaicinCheck;
          //Remove purchased upgrade from eligible upgrades
          action.payload.game.upgrades.eligibleUpgrades.splice(i, 1);
        }
      }
      return action.payload.game;
    }
    case 'CHECK_UPGRADE': {
      //Add any upgrade that meets requirements to eligible upgrades array
      for(let i = 0; i < action.payload.upgrades.purchasedUpgrades.length; i += 1) {
        for(let j = 0; j < upgrades.length; j += 1) {
          if (action.payload.upgrades.purchasedUpgrades[i] === upgrades[j].upgrade) {
            upgrades[j].purchased = true;
          }
        }
      }
      for(let i = 0; i < upgrades.length; i += 1) {
        if (action.payload.capsaicin > upgrades[i].capsaicinCheck && !upgrades[i].purchased) {
          eligibleUpgrades.push(upgrades[i])
        }
      }
      action.payload.upgrades.eligibleUpgrades = eligibleUpgrades;
      return action.payload;
    }
    default:
      if(!action.payload){
        return {upgrades: []}
      } else {
        return state
      }
  }
}