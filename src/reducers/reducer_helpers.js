export default function(state, action) {
  let helpers = [
    {helper: 'Gardener', text: 'Cost 10 plants, generates .01 plant/sec', progress: 1},
    {helper: 'Greenhouse', text: 'Cost 100 plants and 10 gardeners, generates .5 plants/sec', progress: 2},
    {helper: 'Farm', text: 'Cost 1000 plants and 5 greenhouses, generates 5 plants/sec', progress: 3},
    {helper: 'Aquaponics', text: 'Cost 100 heat and 10 farms, generates 100 plants/sec', progress: 4},
    {helper: 'Aeroponics', text: 'Cost 1000 heat and 1,000,000 plants, generates 1000 plants/sec', progress: 5},
    {helper: 'Biodome', text: 'Cost 10 aeroponics and 5 aquaponics, generates 15,000 plants/sec', progress: 6},
    {helper: 'Pepper Forest', text: 'Cost 1000 farms and 50,000 heat, generates 50,000 plants/sec', progress: 7},
  ];
  let eligibleHelpers = [];

  switch(action.type) {
    case 'HIRE_GARDNER': {
      if(action.payload.plants >= 10) {
        action.payload.plants -= 10;
        action.payload.helpers.purchasedHelpers.Gardeners += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_GREENHOUSE': {
      if(action.payload.plants >= 100 && action.payload.helpers.purchasedHelpers.Gardeners >= 10) {
        action.payload.plants -= 100;
        action.payload.helpers.purchasedHelpers.Gardeners -= 10;
        action.payload.helpers.purchasedHelpers.Greenhouses += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_FARM': {
      if(action.payload.plants >= 1000 && action.payload.helpers.purchasedHelpers.Greenhouses >= 5) {
        action.payload.plants -= 1000;
        action.payload.helpers.purchasedHelpers.Greenhouses -= 5;
        action.payload.helpers.purchasedHelpers.Farms += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_AQUAPONICS': {
      if(action.payload.helpers.purchasedHelpers.Farms >= 10 && action.payload.capsaicin >= 100) {
        action.payload.helpers.purchasedHelpers.Farms -= 10;
        action.payload.capsaicin -= 100;
        action.payload.helpers.purchasedHelpers.Aquaponics += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_AEROPONICS': {
      if(action.payload.capsaicin >= 1000 && action.payload.plants >= 1000000) {
        action.payload.capsaicin -= 1000;
        action.payload.plants -= 1000000;
        action.payload.helpers.purchasedHelpers.Aeroponics += 1;
        return action.payload;
      } else {
        return action.payload;
      }
    }
    case 'BUY_BIODOME': {
    if(action.payload.helpers.purchasedHelpers.Aeroponics >= 10 && action.payload.helpers.purchasedHelpers.Aquaponics >= 5) {
      action.payload.helpers.purchasedHelpers.Aeroponics -= 10;
      action.payload.helpers.purchasedHelpers.Aquaponics -= 5;
      action.payload.helpers.purchasedHelpers.Biodomes += 1;
      return action.payload;
    } else {
      return action.payload;
    }
  }
    case 'BUY_FOREST': {
      if(action.payload.helpers.purchasedHelpers.Farms >= 1000 && action.payload.capsaicin >= 50000) {
        action.payload.helpers.purchasedHelpers.Farms -= 1000;
        action.payload.capsaicin -= 50000;
        action.payload.helpers.purchasedHelpers.Pepper_Forests += 1;
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