export default function(state, action) {
  let helpers = [
    {helper: 'gardner', text: 'Cost 10 plants, generates .01 plant/sec', progress: 1},
    {helper: 'greenhouse', text: 'Cost 100 plants and 10 gardners, generates .5 plants/sec', progress: 2},
    {helper: 'farm', text: 'Cost 1000 plants and 5 greenhouses, generates 5 plants/sec', progress: 3},
    {helper: 'aquaponics', text: 'Cost 10 farms, generates 100 plants/sec', progress: 4},
    {helper: 'aeroponics', text: 'Cost 1000 capsaicin and 1,000,000 plants, generates 1000 plants/sec', progress: 5},
    {helper: 'biodome', text: 'Cost 10 aeroponics and 5 aquaponics, generates 15000 plants/sec', progress: 6},
  ];
  let eligibleHelpers = [];

  switch(action.type) {
    case 'HIRE_GARDNER': {
      if(action.payload.plants >= 10) {
        action.payload.plants -= 10;
        action.payload.helpers.purchasedHelpers.gardners += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_GREENHOUSE': {
      if(action.payload.plants >= 100 && action.payload.helpers.purchasedHelpers.gardners >= 10) {
        action.payload.plants -= 100;
        action.payload.helpers.purchasedHelpers.gardners -= 10;
        action.payload.helpers.purchasedHelpers.greenhouses += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_FARM': {
      if(action.payload.plants >= 1000 && action.payload.helpers.purchasedHelpers.greenhouses >= 5) {
        action.payload.plants -= 1000;
        action.payload.helpers.purchasedHelpers.greenhouses -= 5;
        action.payload.helpers.purchasedHelpers.farms += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_AQUAPONICS': {
      if(action.payload.helpers.purchasedHelpers.farms >= 10) {
        action.payload.helpers.purchasedHelpers.farms -= 10;
        action.payload.helpers.purchasedHelpers.aquaponics += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_AEROPONICS': {
      if(action.payload.capsaicin >= 1000 && action.payload.plants >= 1000000) {
        action.payload.capsaicin -= 1000;
        action.payload.plants -= 1000000;
        action.payload.helpers.purchasedHelpers.aeroponics += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_BIODOME': {
      if(action.payload.helpers.purchasedHelpers.aeroponics >= 10 && action.payload.helpers.purchasedHelpers.aquaponics >= 5) {
        action.payload.helpers.purchasedHelpers.aeroponics -= 10;
        action.payload.helpers.purchasedHelpers.aquaponics -= 5;
        action.payload.helpers.purchasedHelpers.biodomes += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'CHECK_HELPERS': {
      for (let i = 0; i < helpers.length; i += 1) {
        if (helpers[i].progress <= action.payload.progress) {
          eligibleHelpers.push(helpers[i]);
        }
      }
      action.payload.helpers.eligibleHelpers = eligibleHelpers;
      return action.payload;
    }
    default:
      return helpers;
  }
}