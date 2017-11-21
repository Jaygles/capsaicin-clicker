export default function(state, action) {
  let upgrades = [
    {upgrade: 'click_plus_one', text:'50 Heat - Increase plant per click by 2', capsaicinCheck: 50, purchased: false},
    {upgrade: 'better_gardners', text:'100 Heat - Double effectiveness of gardners', capsaicinCheck: 100, purchased: false},
    {upgrade: 'better_greenhouses', text:'200 Heat - Double effectiveness of greenhouses', capsaicinCheck: 200, purchased: false},
    {upgrade: 'better_farms', text: '500 Heat - Double effectiveness of farms', capsaicinCheck: 500, purchased: false},
    {upgrade: 'better_aquaponics', text: '10000 Heat - Double effectiveness of aquaponics', capsaicinCheck: 10000, purchased: false},
    {upgrade: 'better_aeroponics', text: '20000 Heat - Double effectiveness of aeroponics', capsaicinCheck: 20000, purchased: false},
    {upgrade: 'better_biodomes', text: '50000 Heat - Double effectiveness of biodomes', capsaicinCheck: 50000, purchased: false},
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