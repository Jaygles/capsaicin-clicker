export default function(state, action) {
  const species = [
    {species: 'Bell Pepper', capsaicin: 0},
    {species: 'Banana Pepper', capsaicin: 100},
    {species: 'Paprika Pepper', capsaicin: 200},
    {species: 'Pepperoncini', capsaicin: 500},
    {species: 'Poblano Pepper', capsaicin: 1000},
    {species: 'Cascabel Pepper', capsaicin: 4000},
    {species: 'Anaheim Pepper', capsaicin: 10000},
    {species: 'Cherry Bomb Pepper', capsaicin: 20000},
    {species: 'Fresno Pepper', capsaicin: 300000},
    {species: 'Lemon Drop Pepper', capsaicin: 60000},
    {species: 'Àrbol Pepper', capsaicin: 80000},
    {species: 'Jwala Pepper', capsaicin: 100000},
    {species: 'Tabasco Pepper', capsaicin: 150000},
    {species: 'Cayenne Pepper', capsaicin: 300000},
    {species: 'Pequin Pepper', capsaicin: 500000},
    {species: 'Malagueta Pepper', capsaicin: 1000000},
    {species: 'Charleston Hot Pepper', capsaicin: 2000000},
    {species: 'Datil Pepper', capsaicin: 5000000},
    {species: 'Wiri Wiri Pepper', capsaicin: 10000000},
    {species: 'Scotch Bonnet Pepper', capsaicin: 20000000},
    {species: 'Habanero Pepper', capsaicin: 33333333},
    {species: 'Fatalii Pepper', capsaicin: 50000000},
    {species: 'Red Savina Habanero Pepper', capsaicin: 100000000},
    {species: 'Chocolate Habanero Pepper', capsaicin: 200000000},
    {species: 'Bhut Jolokia Chocolate Pepper', capsaicin: 444444444},
    {species: 'Trinidad Scorpion “Butch T” Pepper', capsaicin: 888888888},
    {species: 'Ghost Pepper', capsaicin: 1000000000},
    {species: '7 Pot Douglah Pepper', capsaicin: 5555555555},
    {species: 'Trinidad Moruga Scorpion Pepper', capsaicin: 10000000000},
    {species: 'Komodo Dragon Pepper', capsaicin: 22222222222},
    {species: 'Void Pepper', capsaicin: 66666666666},
    {species: 'Inifinity Pepper', capsaicin: 100000000000},
    {species: 'Mega Pepper', capsaicin: 200000000000},
    {species: 'Giga Pepper', capsaicin: 400000000000},
    {species: 'Peta Pepper', capsaicin: 600000000000},
    {species: 'Twilight Pepper', capsaicin: 800000000000},
    {species: 'Sentient Pepper', capsaicin: 1000000000000},
    {species: 'Pepper Deity', capsaicin: 4000000000000},
    {species: 'Pepperverse', capsaicin: 8000000000000},
    {species: 'The Big Pepp', capsaicin: 10000000000000},
  ];

  switch(action.type) {
    case 'SPECIES':
      for (let i = 0; i < species.length; i += 1) {
        if (action.payload.capsaicin > species[i].capsaicin && action.payload.capsaicin < species[i + 1].capsaicin) {
          action.payload.species = species[i].species;
          return action.payload;
        }
      }
      break;
    default:
      return {
        species: 'Bell Pepper',
      }
  }
}