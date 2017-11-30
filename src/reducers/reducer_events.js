export default function(state, action) {

  //TODO Tweak event chances
  const twoEvents = [
    { event: "A wandering cat ate one of your pepper plants. -1 plant.", lowerChance: 1, higherChance: 25, effect: function(){if(action.payload.game.plants >= 1){action.payload.game.plants -= 1}}},
    { event: "A wandering cat fertilized your plants. +1% plants", lowerChance: 2000, higherChance: 2025, effect: function(){action.payload.game.plants *= 1.01} },
    { event: "A pepper plant mutated into something hotter. +1% heat", lowerChance: 9949, higherChance: 9969, effect: function(){action.payload.game.capsaicin *= 1.01} },
    { event: "You received a voucher to attend a peppers of the world lecture. It was a very nice talk. Nothing changes.", lowerChance: 222, higherChance: 225, effect: function(){return null}},
    { event: "A passerby hears you sing a song while tending to your peppers and is impressed. He swears fealty to you. +1 Gardener", lowerChance: 700, higherChance: 725, effect: function(){action.payload.game.helpers.purchasedHelpers.Gardeners += 1} },
    { event: "Someone taps you on the shoulder. When you turn around you see nothing but a pepper plant. +1 Plant", lowerChance: 800, higherChance: 825, effect: function(){action.payload.plants += 1} },
    { event: "You've found a seven leaf pepper! You trade this in for a new farm. +1 Farm", lowerChance: 9000, higherChance: 9001, effect: function(){action.payload.game.helpers.purchasedHelpers.Farms += 1} },
    { event: "Something tugs on your pant sleeve, you look down and see a pepper plant. +1 Plant", lowerChance: 5100, higherChance: 5105, effect: function(){action.payload.plants += 1} },
    { event: "A magician pulls a pepper plant from behind your ears. +1 Plant", lowerChance: 6106, higherChance: 6110, effect: function(){action.payload.plants += 1} },
    { event: "You've won best prize at a salsa contest. The prize was 100 pepper plants. +100 Plants", lowerChance: 7115, higherChance: 7120, effect: function(){action.payload.plants += 1} },
    { event: "You wake up from a feverish dream of nothing but peppers. You find a pepper plant under your pillow. +1 Plant", lowerChance: 5125, higherChance: 5130, effect: function(){action.payload.plants += 1} },
    { event: "The pollen from a neighboring farm pollinates some of your crop. The genetic diversity increased your peppers' heat. +1% Heat ", lowerChance: 5135, higherChance: 5140, effect: function(){action.payload.capsaicin *= 1.01} },
    { event: "Your dear mother came by and gave you a pepper plant. +1 Plant", lowerChance: 5145, higherChance: 5150, effect: function(){action.payload.plants += 1} },
  ];
  const fourEvents = [
    { event: "A wandering brontasaurus ate some of your pepper plants. -10 Plants.", lowerChance: 1, higherChance: 13, effect: function(){if(action.payload.game.plants >= 10){action.payload.game.plants -= 10}}},
    { event: "A wandering brontasaurus fertilized your plants. +5% Plants.", lowerChance: 105, higherChance: 115, effect: function(){action.payload.game.plants *= 1.05}},
    { event: "Your hottest pepper won best in show. You've attracted the help of a local gardener. +1 Gardener", lowerChance: 210, higherChance: 220, effect: function(){action.payload.game.helpers.purchasedHelpers.Gardeners += 1}},
    { event: "You black out in the sun. When you awaken you find you've fallen on a few pepper plants. -3 Plants", lowerChance: 5100, higherChance: 5105, effect: function(){if(action.payload.game.plants >= 3){action.payload.game.plants -= 3}} },
    { event: "A local school arranged a tour of your farm. Those rascal kids ruined some of your plants. -5 Plants", lowerChance: 5115, higherChance: 5120, effect: function(){if(action.payload.game.plants >= 5){action.payload.game.plants -= 5}} },
    { event: "You tour a competing pepper farm incognito. You swipe a few pepper plants ehehe. +10 Plants", lowerChance: 6125, higherChance: 6130, effect: function(){action.payload.game.plants += 10} },
    { event: "You were on Pepperwang the game show and won a small fortune. You bought a few farms. +3 Farms", lowerChance: 7135, higherChance: 7140, effect: function(){action.payload.game.helpers.purchasedHelpers.Farms += 3} },
    { event: "You sneeze and a pepper plant appears in your handkerchief? +1 Plant", lowerChance: 8145, higherChance: 8150, effect: function(){action.payload.game.plants += 1} },
    { event: "You've won a local jump rope competition. People look up to you a little more.", lowerChance: 9151, higherChance: 9152, effect: function(){} },
  ];
  const tenEvents = [
    { event: "Your endeavor has attracted an investor. He has purchased you one farm. +1 Farm", lowerChance: 1, higherChance: 20, effect: function(){action.payload.game.helpers.purchasedHelpers.Farms += 1}},
    { event: "A wandering rogue has stolen your hottest pepper! -20% Heat.", lowerChance: 110, higherChance: 111, effect: function(){action.payload.game.capsaicin *= 0.8}},
    { event: "A wormhole has opened and dumped another farmer's crop into your lap! +5000 Plants.", lowerChance: 500, higherChance: 520, effect: function(){action.payload.game.plants += 5000}},
    { event: "World renown chef El Peprizio showcased your peppers on his show. A pepper enthusiast sees this and gives you a few aeroponics facilities. +3 Aeroponics", lowerChance: 9000, higherChance: 9005, effect: function(){action.payload.game.helpers.purchasedHelpers.Aeroponics += 1} },
    { event: "A UFO crash landed on your property. It was full of nothing but peppers. +2500 Plants", lowerChance: 9006, higherChance: 9011, effect: function(){action.payload.game.plants += 2500} },
    { event: "You found a few pepper plants in a jacket. +3 Plants", lowerChance: 9012, higherChance: 9017, effect: function(){action.payload.game.plants += 3  } },
  ];
  const fiftyEvents = [
    { event: "A pepper meteor crashed in the middle of your crop! The strange effects of the meteor seem to make your peppers hotter. Heat +10%", lowerChance: 1, higherChance: 30, effect: function(){action.payload.game.capsaicin *= 1.1}},
    { event: "You happen upon a well. You toss a pepper in and make a wish. The next day a letter arrives telling you you've inherited 10 farms! -1 Plant +10 Farms", lowerChance: 110, higherChance: 115, effect: function(){action.payload.game.plants -= 1; action.payload.helpers.purchasedHelpers.Farms += 10}},
    { event: "A pepper you found behind the fridge has grown sentient. He tells you the secret to growing the hottest peppers. Heat +15%", lowerChance: 500, higherChance: 520, effect: function(){action.payload.game.capsaicin *= 1.5}},
    { event: "You've climbed Mount Pepperest and at the top you find the wise pepper guru. He shares with you ancient secrets of pepper cultivation. +10% Heat", lowerChance: 9000, higherChance: 9005, effect: function(){action.payload.game.capsaicin *= 1.1} },
    { event: "While site-seeing in Pepperado you find a peculiar wild pepper species. You cross breed this with your own crop and it creates a hotter pepper. +5% Heat", lowerChance: 9006, higherChance: 9010, effect: function(){action.payload.game.capsaicin *= 1.05} },
  ];
  const hundredEvents = [
    { event: "During lunch at Jalapotle you performed the heimlich maneuver on who turned out to be the director of pepper agriculture for your state. He allots you ten experimental aquaponics facilities for saving his life. +10 Aquaponics.", lowerChance: 1, higherChance: 30, effect: function(){action.payload.game.helpers.purchasedHelpers.Aquaponics += 10}},
    { event: "There are rumors going around of a pepper faerie in the area. One day you notice your peppers seem to have grown twice as large! Plants +100%!", lowerChance: 110, higherChance: 115, effect: function(){action.payload.game.plants *= 2}},
  ];
  const thousandEvents = [
    { event: "A pepper blight wiped out most of your plants and taken out your hottest peppers! Plants -50% and Heat - 30%", lowerChance: 500, higherChance: 501, effect: function(){action.payload.game.plants *= 0.5; action.payload.game.capsaicin *= 0.7}},
    { event: "You've found the pot of peppers at the end of a rainbow. +1,000,000 Peppers", lowerChance: 1, higherChance: 30, effect: function(){action.payload.game.plants += 10}},
  ];
  const fiveThousandEvents = [
    { event: "Your uncle a Nigerian Prince died. You inherited the country of Madagascar?", lowerChance: 2, higherChance: 3, effect: function(){action.payload.game.helpers.purchasedHelpers.Madagascar += 1}},
  ];

  switch(action.type) {

    case "CHECK_EVENT": {

      const timerTwo = action.payload.eventNumbers.timerTwo;
      const timerFour = action.payload.eventNumbers.timerFour;
      const timerTen = action.payload.eventNumbers.timerTen;
      const timerFifty = action.payload.eventNumbers.timerFifty;
      const timerHundred = action.payload.eventNumbers.timerHundred;
      const timerThousand = action.payload.eventNumbers.timerThousand;
      const timerFiveThousand = action.payload.eventNumbers.timerFiveThousand;

      // Keep the array at 15 entries so the save data doesn't go crazy
      if (action.payload.game.event.length > 15) {
        action.payload.game.event = action.payload.game.event.slice(action.payload.game.event.length - 15, action.payload.game.event.length)
      }

      if (timerFiveThousand !== 0) {
        for ( let i = 0; i < fiveThousandEvents.length; i += 1 ) {
          if ( timerTwo > fiveThousandEvents[i].lowerChance && timerTwo < fiveThousandEvents[i].higherChance ) {
            action.payload.game.event.push(fiveThousandEvents[i].event);
            fiveThousandEvents[i].effect();
          }
        }
      }

      if (timerThousand !== 0) {
        for ( let i = 0; i < thousandEvents.length; i += 1 ) {
          if ( timerTwo > thousandEvents[i].lowerChance && timerTwo < thousandEvents[i].higherChance ) {
            action.payload.game.event.push(thousandEvents[i].event);
            thousandEvents[i].effect();
          }
        }
      }

      // Set up to ensure only one event occurs on any given cycle
      if (timerThousand === 0 && timerHundred !== 0) {
        for ( let i = 0; i < hundredEvents.length; i += 1 ) {
          if ( timerTwo > hundredEvents[i].lowerChance && timerTwo < hundredEvents[i].higherChance ) {
            action.payload.game.event.push(hundredEvents[i].event);
            hundredEvents[i].effect();
          }
        }
      }

      if (timerThousand === 0 && timerHundred === 0 && timerFifty !== 0) {
        for ( let i = 0; i < fiftyEvents.length; i += 1 ) {
          if ( timerTwo > fiftyEvents[i].lowerChance && timerTwo < fiftyEvents[i].higherChance ) {
            action.payload.game.event.push(fiftyEvents[i].event);
            fiftyEvents[i].effect();
          }
        }
      }

      if (timerThousand === 0 && timerHundred === 0 && timerFifty === 0 && timerTen !== 0) {
        for ( let i = 0; i < tenEvents.length; i += 1 ) {
          if ( timerTwo > tenEvents[i].lowerChance && timerTwo < tenEvents[i].higherChance ) {
            action.payload.game.event.push(tenEvents[i].event);
            tenEvents[i].effect();
          }
        }
      }

      if (timerThousand === 0 && timerHundred === 0 && timerFifty === 0 && timerTen === 0 && timerFour !== 0) {
        for ( let i = 0; i < fourEvents.length; i += 1 ) {
          if ( timerTwo > fourEvents[i].lowerChance && timerTwo < fourEvents[i].higherChance ) {
            action.payload.game.event.push(fourEvents[i].event);
            fourEvents[i].effect();
          }
        }
      }

      if (timerThousand === 0 && timerHundred === 0 && timerFifty === 0 && timerTen === 0 && timerFour === 0 && timerTwo !== 0) {
        for ( let i = 0; i < twoEvents.length; i += 1 ) {
          if ( timerTwo > twoEvents[i].lowerChance && timerTwo < twoEvents[i].higherChance ) {
            action.payload.game.event.push(twoEvents[i].event);
            twoEvents[i].effect();
          }
        }
      }

      return action.payload;
    }
    default:
      return state = null;
  }
}