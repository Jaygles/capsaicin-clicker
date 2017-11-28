export default function(state, action) {
  //TODO Think about a naming convention for constants
  //TODO Figure out how to handle too large numbers
  //Master game state
  const blankGame = {
    plants: 10,
    multiplier: 0.000025,
    capsaicin: 1,
    species: 'Bell Pepper',
    helpers: {
      eligibleHelpers: [],
      purchasedHelpers: {
        Gardners: 0,
        Greenhouses: 0,
        Farms: 0,
        Aquaponics: 0,
        Aeroponics: 0,
        Biodomes: 0,
      },
    },
    progress: 0,
    upgrades: {
      eligibleUpgrades: [],
      purchasedUpgrades: [],
    },
    event: [],
  };

  switch(action.type) {
    case 'GET_LOCAL_STORAGE':
      if (localStorage.payload) {
        //TODO Think about if making this incredibly simple encryption is worth it
        // let save = localStorage.payload.split('');
        // let done = [];
        // for (let i = 0; i < save.length; i += 1) {
        //   if (save[i] === 'a') {
        //     done.push('l');
        //   } else if (save[i] === 'b') {
        //     done.push('a');
        //   } else if (save[i] === 'c') {
        //     done.push('p');
        //   } else if (save[i] === 'd') {
        //     done.push('s');
        //   } else if (save[i] === 'e') {
        //     done.push('0');
        //   } else if (save[i] === 'f') {
        //     done.push('q');
        //   } else if (save[i] === 'g') {
        //     done.push('r');
        //   } else if (save[i] === 'h') {
        //     done.push('j');
        //   } else if (save[i] === 'i') {
        //     done.push('v');
        //   } else if (save[i] === 'j') {
        //     done.push('f');
        //   } else if (save[i] === 'k') {
        //     done.push('x');
        //   } else if (save[i] === 'l') {
        //     done.push('i');
        //   } else if (save[i] === 'm') {
        //     done.push('3');
        //   } else if (save[i] === 'n') {
        //     done.push('o');
        //   } else if (save[i] === 'o') {
        //     done.push('k');
        //   } else if (save[i] === 'p') {
        //     done.push('4');
        //   } else if (save[i] === 'q') {
        //     done.push('b');
        //   } else if (save[i] === 'r') {
        //     done.push('d');
        //   } else if (save[i] === 's') {
        //     done.push('5');
        //   } else if (save[i] === 't') {
        //     done.push('u');
        //   } else if (save[i] === 'u') {
        //     done.push('c');
        //   } else if (save[i] === 'v') {
        //     done.push('g');
        //   } else if (save[i] === 'w') {
        //     done.push('9');
        //   } else if (save[i] === 'x') {
        //     done.push('7');
        //   } else if (save[i] === 'y') {
        //     done.push('6');
        //   } else if (save[i] === 'z') {
        //     done.push('1');
        //   } else if (save[i] === '0') {
        //     done.push('y');
        //   } else if (save[i] === '1') {
        //     done.push('z');
        //   } else if (save[i] === '2') {
        //     done.push('8');
        //   } else if (save[i] === '3') {
        //     done.push('m');
        //   } else if (save[i] === '4') {
        //     done.push('2');
        //   } else if (save[i] === '5') {
        //     done.push('e');
        //   } else if (save[i] === '6') {
        //     done.push('t');
        //   } else if (save[i] === '7') {
        //     done.push('w');
        //   } else if (save[i] === '8') {
        //     done.push('n');
        //   } else if (save[i] === '9') {
        //     done.push('h');
        //   } else {
        //     done.push(save[i]);
        //   }
        // }
        // done = done.join('');
        //Check if latest change is in the user's save if not give them a blank game
        //TODO Make it so their save is modified rather than replaced with a blank game
        if((JSON.parse(localStorage.payload).helpers.purchasedHelpers.Gardners) !== undefined) {
          return (JSON.parse(localStorage.payload))
        } else {
          return blankGame
        }
      }
      return state;
    case 'BUTTON_CLICKED':
      let plantGains = 100;
      if(action.payload.upgrades.purchasedUpgrades.includes('click_plus_one')) {
        plantGains += 2;
      }
      if(action.payload.upgrades.purchasedUpgrades.includes('click_plus_ten')) {
        plantGains += 10;
      }
      if(action.payload.upgrades.purchasedUpgrades.includes('double_click_one')) {
        plantGains *= 2;
      }
      if(action.payload.upgrades.purchasedUpgrades.includes('double_click_two')) {
        plantGains *= 2;
      }
      if(action.payload.upgrades.purchasedUpgrades.includes('double_click_three')) {
        plantGains *= 2;
      }

      action.payload.plants += plantGains;
      return action.payload;
    case 'INTERVAL':
      // Intervals at four cycles per second
      let gardnerMultiplier = 0.0025;
      let greenhouseMultiplier = .125;
      let farmsMultiplier = 1.25;
      let aquaponicsMultiplier = 25;
      let aeroponicsMultiplier = 250;
      let biodomesMultiplier = 3750;

      // Capsaicin increment logic
      action.payload.game.capsaicin = action.payload.game.capsaicin + (action.payload.game.plants * action.payload.game.multiplier);

      // Auto-plant creation logic
      if(action.payload.game.upgrades.purchasedUpgrades.includes('better_gardners')) {
        gardnerMultiplier += 0.0025;
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('better_greenhouses')) {
        greenhouseMultiplier += .125;
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('better_farms')) {
        farmsMultiplier += 1.25;
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('better_aquaponics')) {
        aquaponicsMultiplier += 25;
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('better_aeroponics')) {
        aeroponicsMultiplier += 250;
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('better_biodomes')) {
        biodomesMultiplier += 3750;
      }

      // Auto helper creation logic
      if(action.payload.game.upgrades.purchasedUpgrades.includes('hiring_manager')) {
        if(action.payload.timer % 4 === 0 && action.payload.game.plants >= 20) {
          action.payload.game.plants -= 20;
          action.payload.game.helpers.purchasedHelpers.Gardners += 1;
        }
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('glass_factory')) {
        if(action.payload.timer % 4 === 0 && action.payload.game.plants >= 200 && action.payload.game.helpers.purchasedHelpers.Gardners >= 20) {
          action.payload.game.plants -= 200;
          action.payload.game.helpers.purchasedHelpers.Gardners -= 20;
          action.payload.game.helpers.purchasedHelpers.Greenhouses += 1;
        }
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('hiring_firm')) {
        if(action.payload.timer % 2 === 0 && action.payload.game.plants >= 150) {
          action.payload.game.plants -= 150;
          action.payload.game.helpers.purchasedHelpers.Gardners += 5;
        }
      }
      if(action.payload.game.upgrades.purchasedUpgrades.includes('corporate_farms')) {
        if(action.payload.timer % 4 === 0 && action.payload.game.helpers.purchasedHelpers.Greenhouses >= 10 && action.payload.game.plants >= 2000) {
          action.payload.game.helpers.purchasedHelpers.Greenhouses -= 10;
          action.payload.game.plants -= 2000;
          action.payload.game.helpers.purchasedHelpers.Farms += 1;
        }
      }

      action.payload.game.plants = action.payload.game.plants
        + (action.payload.game.helpers.purchasedHelpers.Gardners * gardnerMultiplier)
        + (action.payload.game.helpers.purchasedHelpers.Greenhouses * greenhouseMultiplier)
        + (action.payload.game.helpers.purchasedHelpers.Farms * farmsMultiplier)
        + (action.payload.game.helpers.purchasedHelpers.Aquaponics * aquaponicsMultiplier)
        + (action.payload.game.helpers.purchasedHelpers.Aeroponics * aeroponicsMultiplier)
        + (action.payload.game.helpers.purchasedHelpers.Biodomes * biodomesMultiplier);

      // //Progress logic
      // if (action.payload.plants >= 100 && action.payload.progress < 1) {
      //   action.payload.progress = 1;
      // }
      // if (action.payload.plants >= 1000 && action.payload.progress < 2) {
      //   action.payload.progress = 2;
      // }
      // if (action.payload.plants >= 2000 && action.payload.progress < 3) {
      //   action.payload.progress = 3;
      // }
      // if (action.payload.capsaicin >= 4000 && action.payload.progress < 4) {
      //   action.payload.progress = 4;
      // }
      // if (action.payload.capsaicin >= 8000 && action.payload.progress < 5) {
      //   action.payload.progress = 5;
      // }
      // if (action.payload.capsaicin >= 20000 && action.payload.progress < 6) {
      //   action.payload.progress = 6;
      // }
      return action.payload.game;
    case 'SPECIES': {
      return state
    }
    case 'HIRE_GARDNER': {
      return state
    }
    case 'BUY_GREENHOUSE': {
      return state
    }
    case 'BUY_FARM': {
      return state
    }
    case 'BUY_AQUAPONICS': {
      return state
    }
    case 'BUY_AEROPONICS': {
      return state
    }
    case 'BUY_BIODOME': {
      return state
    }
    case 'CHECK_HELPERS': {
      return state
    }
    case 'PROGRESS': {
      return state
    }
    case 'CHECK_EVENT': {
      return state
    }
    case 'SET_LOCAL_STORAGE': {
      // let save = JSON.stringify(action.payload);
      // let saveSplit = save.split('');
      // let done = [];
      // for (let i = 0; i < saveSplit.length; i += 1) {
      //   if (saveSplit[i] === 'a') {
      //     done.push('b');
      //   } else if (saveSplit[i] === 'b') {
      //     done.push('q');
      //   } else if (saveSplit[i] === 'c') {
      //     done.push('u');
      //   } else if (saveSplit[i] === 'd') {
      //     done.push('r');
      //   } else if (saveSplit[i] === 'e') {
      //     done.push('5');
      //   } else if (saveSplit[i] === 'f') {
      //     done.push('j');
      //   } else if (saveSplit[i] === 'g') {
      //     done.push('v');
      //   } else if (saveSplit[i] === 'h') {
      //     done.push('9');
      //   } else if (saveSplit[i] === 'i') {
      //     done.push('l');
      //   } else if (saveSplit[i] === 'j') {
      //     done.push('h');
      //   } else if (saveSplit[i] === 'k') {
      //     done.push('o');
      //   } else if (saveSplit[i] === 'l') {
      //     done.push('a');
      //   } else if (saveSplit[i] === 'm') {
      //     done.push('3');
      //   } else if (saveSplit[i] === 'n') {
      //     done.push('8');
      //   } else if (saveSplit[i] === 'o') {
      //     done.push('n');
      //   } else if (saveSplit[i] === 'p') {
      //     done.push('c');
      //   } else if (saveSplit[i] === 'q') {
      //     done.push('f');
      //   } else if (saveSplit[i] === 'r') {
      //     done.push('g');
      //   } else if (saveSplit[i] === 's') {
      //     done.push('d');
      //   } else if (saveSplit[i] === 't') {
      //     done.push('6');
      //   } else if (saveSplit[i] === 'u') {
      //     done.push('t');
      //   } else if (saveSplit[i] === 'v') {
      //     done.push('i');
      //   } else if (saveSplit[i] === 'w') {
      //     done.push('7');
      //   } else if (saveSplit[i] === 'x') {
      //     done.push('k');
      //   } else if (saveSplit[i] === 'y') {
      //     done.push('0');
      //   } else if (saveSplit[i] === 'z') {
      //     done.push('1');
      //   } else if (saveSplit[i] === '0') {
      //     done.push('e');
      //   } else if (saveSplit[i] === '1') {
      //     done.push('z');
      //   } else if (saveSplit[i] === '2') {
      //     done.push('4');
      //   } else if (saveSplit[i] === '3') {
      //     done.push('m');
      //   } else if (saveSplit[i] === '4') {
      //     done.push('p');
      //   } else if (saveSplit[i] === '5') {
      //     done.push('s');
      //   } else if (saveSplit[i] === '6') {
      //     done.push('y');
      //   } else if (saveSplit[i] === '7') {
      //     done.push('x');
      //   } else if (saveSplit[i] === '8') {
      //     done.push('2');
      //   } else if (saveSplit[i] === '9') {
      //     done.push('w');
      //   } else {
      //     done.push(saveSplit[i]);
      //   }
      // }
      // save = done.join('');
      localStorage.setItem('payload', JSON.stringify(action.payload));

      return state
    }
    case 'CHECK_UPGRADE': {
      return state
    }
    case 'PURCHASE_UPGRADE': {
      return state
    }
    case 'RESET': {
      return blankGame
    }
    default:
      return blankGame
  }
}