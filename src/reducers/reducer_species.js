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
    {species: 'Fresno Pepper', capsaicin: 50000},
    {species: 'Lemon Drop Pepper', capsaicin: 80000},
    {species: 'Àrbol Pepper', capsaicin: 100000},
    {species: 'Jwala Pepper', capsaicin: 125000},
    {species: 'Tabasco Pepper', capsaicin: 200000},
    {species: 'Cayenne Pepper', capsaicin: 300000},
    {species: 'Pequin Pepper', capsaicin: 500000},
    {species: 'Malagueta Pepper', capsaicin: 1000000},
    {species: 'Charleston Hot Pepper', capsaicin: 2500000},
    {species: 'Datil Pepper', capsaicin: 5000000},
    {species: 'Wiri Wiri Pepper', capsaicin: 10000000},
    {species: 'Scotch Bonnet Pepper', capsaicin: 20000000},
    {species: 'Habanero Pepper', capsaicin: 33333333},
    {species: 'Fatalii Pepper', capsaicin: 50000000},
    {species: 'Red Savina Habanero Pepper', capsaicin: 100000000},
    {species: 'Chocolate Habanero Pepper', capsaicin: 300000000},
    {species: 'Bhut Jolokia Chocolate Pepper', capsaicin: 544444444},
    {species: 'Trinidad Scorpion “Butch T” Pepper', capsaicin: 888888888},
    {species: 'Ghost Pepper', capsaicin: 1000000000},
    {species: '7 Pot Douglah Pepper', capsaicin: 5555555555},
    {species: 'Trinidad Moruga Scorpion Pepper', capsaicin: 10000000000},
    {species: 'Komodo Dragon Pepper', capsaicin: 42222222222},
    {species: 'Void Pepper', capsaicin: 66666666666},
    {species: 'Inifinity Pepper', capsaicin: 1000000000000},
    {species: 'Mega Pepper', capsaicin: 2000000000000},
    {species: 'Giga Pepper', capsaicin: 4000000000000},
    {species: 'Peta Pepper', capsaicin: 6000000000000},
    {species: 'Twilight Pepper', capsaicin: 8000000000000},
    {species: 'Sentient Pepper', capsaicin: 10000000000000},
    {species: 'Mechanized Pepper', capsaicin: 40000000000000},
    {species: 'Pepperverse', capsaicin: 80000000000000},
    {species: 'Pepper Deity', capsaicin: 500000000000000},
    {species: 'The Big Pepp', capsaicin: 1000000000000000},
    {species: 'Pure Capsaicin', capsaicin: 10000000000000000},

  ];

  switch(action.type) {
    case 'SPECIES':
      for (let i = 0; i < species.length; i += 1) {
        if((species[i + 1]) !== undefined){
          if (action.payload.capsaicin > species[i].capsaicin && action.payload.capsaicin < species[i + 1].capsaicin) {
            action.payload.species = species[i].species;
            return action.payload;
          }
        } else {
          if(action.payload.capsaicin > species[i].capsaicin) {
            action.payload.species = species[i].species;
            return action.payload;
          }
        }
      }
      break;
    default:
      return {
        species: 'Bell Pepper',
      }
  }
}