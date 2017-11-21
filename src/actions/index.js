export function clickOnce(plants) {
  return {
    type: 'BUTTON_CLICKED',
    payload: plants,
  };
}

export function incrementCapsaicin(capsaicin) {
  return {
    type: 'INTERVAL',
    payload: capsaicin,
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

export function hireGardner(gardners) {
  return {
    type: 'HIRE_GARDNER',
    payload: gardners,
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

export function checkProgress(progress) {
  return {
    type: 'CHECK_PROGRESS',
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
