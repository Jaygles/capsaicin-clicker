export function clickOnce(plants) {
  return {
    type: 'BUTTON_CLICKED',
    payload: plants,
  };
}

export function incrementCapsaicin(game, timer) {
  return {
    type: 'INTERVAL',
    payload: { game, timer }
  }
}

export function checkEvent(timer, game) {
  let eventNumbers = {
    timerTwo: 0,
    timerFour: 0,
    timerTen: 0,
    timerFifty: 0,
    timerHundred: 0,
    timerThousand: 0,
    timerFiveThousand: 0,
  };

  if (timer % 2 === 0){
    eventNumbers.timerTwo = Math.random() * 10000;
  }

  if (timer % 4 === 0){
    eventNumbers.timerFour = Math.random() * 10000;
  }

  if (timer % 10 === 0){
    eventNumbers.timerTen = Math.random() * 10000;
  }

  if (timer % 50 === 0){
    eventNumbers.timerFifty = Math.random() * 10000;
  }

  if (timer % 100 === 0){
    eventNumbers.timerHundred = Math.random() * 10000;
  }

  if (timer % 1000 === 0){
    eventNumbers.timerThousand = Math.random() * 10000;
  }

  if (timer % 5000 === 0){
    eventNumbers.timerFiveThousand = Math.random() * 10000;
  }

  return {
    type: 'CHECK_EVENT',
    payload: {
      game: game,
      eventNumbers: eventNumbers,
    },
  }
}

export function checkSpecies(capsaicin) {
  return {
    type: 'SPECIES',
    payload: capsaicin,
  }
}

export function checkHelpers(game) {
  return {
    type: 'CHECK_HELPERS',
    payload: game,
  }
}

export function hireGardner(game) {
  return {
    type: 'HIRE_GARDNER',
    payload: game,
  }
}

export function buyGreenhouse(greenhouses) {
  return {
    type: 'BUY_GREENHOUSE',
    payload: greenhouses,
  }
}

export function buyFarm(game) {
  return {
    type: 'BUY_FARM',
    payload: game,
  }
}

export function buyAquaponics(game) {
  return {
    type: 'BUY_AQUAPONICS',
    payload: game,
  }
}

export function buyAeroponics(game) {
  return {
    type: 'BUY_AEROPONICS',
    payload: game,
  }
}

export function buyBiodome(game) {
  return {
    type: 'BUY_BIODOME',
    payload: game,
  }
}

export function buyForest(game) {
  return {
    type: 'BUY_FOREST',
    payload: game,
  }
}

export function buyExcavator(game) {
  return {
    type: 'BUY_EXCAVATOR',
    payload: game,
  }
}

export function buyMadagascar(game) {
  return {
    type: 'BUY_MADAGASCAR',
    payload: game,
  }
}

export function checkProgress(progress) {
  return {
    type: 'PROGRESS',
    payload: progress,
  }
}

export function setLocalStorage(game) {
  return {
    type: 'SET_LOCAL_STORAGE',
    payload: game,
  }
}

export function getLocalStorage() {
  return {
    type: 'GET_LOCAL_STORAGE',
  }
}

export function checkUpgradeStatus(game) {
  return {
    type: 'CHECK_UPGRADE',
    payload: game,
  }
}

export function purchaseUpgrade(game, upgrade) {
  return {
    type: 'PURCHASE_UPGRADE',
    payload: {
      game: game,
      upgrade: upgrade,
    },
  }
}

export function resetGame(game) {
  return {
    type: 'RESET',
    payload: game,
  }
}
