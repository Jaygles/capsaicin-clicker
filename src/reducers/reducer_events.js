export default function(state, action) {

  //TODO Decide whether I want to prevent values going negative
  //TODO Tweak event chances
  const twoEvents = [
    { event: "A wandering cat ate one of your pepper plants. -1 plant.", lowerChance: 1, higherChance: 50, effect: function(){action.payload.game.plants -= 1}},
    { event: "A wandering cat fertilized your plants. +1% plants", lowerChance: 2000, higherChance: 2050, effect: function(){action.payload.game.plants *= 1.01} },
    { event: "A pepper plant mutated into something hotter. +1% heat", lowerChance: 9949, higherChance: 9999, effect: function(){action.payload.game.capsaicin *= 1.01} },
    { event: "You received a voucher to attend a peppers of the world lecture. It was a very nice talk. Nothing changes.", lowerChance: 222, higherChance: 225, effect: function(){return null}},
    { event: "A passerby hears you sing a song while tending to your peppers and is impressed. He swears fealty to you. +1 Gardener", lowerChance: 700, higherChance: 775, effect: function(){action.payload.helpers.purchasedHelpers.Gardeners += 1} },
    { event: "Someone taps you on the shoulder. When you turn around you see nothing but a pepper plant. +1 plant", lowerChance: 800, higherChance: 900, effect: function(){action.payload.plants += 1} },
    { event: "You've found a seven leaf pepper! You trade this in for a new farm. +1 farm", lowerChance: 9000, higherChance: 9001, effect: function(){action.payload.helpers.purchasedHelpers.Farms += 1} },
  ];
  const fourEvents = [
    { event: "A wandering brontasaurus ate some of your pepper plants. -10 plants.", lowerChance: 1, higherChance: 25, effect: function(){action.payload.game.plants -= 10}},
    { event: "A wandering brontasaurus fertilized your plants. +5% plants.", lowerChance: 105, higherChance: 125, effect: function(){action.payload.game.plants *= 1.05}},
    { event: "Your hottest pepper won best in show. You've attracted the help of a local gardener. +1 gardener", lowerChance: 210, higherChance: 230, effect: function(){action.payload.game.helpers.purchasedHelpers.Gardeners += 1}},
  ];
  const tenEvents = [
    { event: "Your endeavor has attracted an investor. He has purchased you one farm. +1 farm", lowerChance: 1, higherChance: 30, effect: function(){action.payload.game.helpers.purchasedHelpers.Farms += 1}},
    { event: "A wandering rogue has stolen your hottest pepper! -20% heat.", lowerChance: 110, higherChance: 115, effect: function(){action.payload.game.capsaicin *= 0.8}},
    { event: "A wormhole has opened and dumped another farmer's crop into your lap! +5000 plants.", lowerChance: 500, higherChance: 520, effect: function(){action.payload.game.plants += 5000}},
  ];
  const fiftyEvents = [
    { event: "A pepper meteor crashed in the middle of your crop! The strange effects of the meteor seem to make your peppers hotter. Heat +10%", lowerChance: 1, higherChance: 30, effect: function(){action.payload.game.capsaicin *= 1.1}},
    { event: "You happen upon a well. You toss a pepper in and make a wish. The next day a letter arrives telling you you've inherited 10 farms! -1 plant +10 farms", lowerChance: 110, higherChance: 115, effect: function(){action.payload.game.plants -= 1; action.payload.helpers.purchasedHelpers.Farms += 10}},
    { event: "A pepper you found behind the fridge has grown sentient. He tells you the secret to growing the hottest peppers. Heat +15%", lowerChance: 500, higherChance: 520, effect: function(){action.payload.game.capsaicin *= 1.5}},
  ];
  const hundredEvents = [
    { event: "During lunch at Jalapotle you performed the heimlich maneuver on who turned out to be the director of pepper agriculture for your state. He allots you ten experimental aquaponics facilities for saving his life. +10 aquaponics.", lowerChance: 1, higherChance: 30, effect: function(){action.payload.game.helpers.purchasedHelpers.Aquaponics += 10}},
    { event: "There are rumors going around of a pepper faerie in the area. One day you notice your peppers seem to have grown twice as large! Plants +100%!", lowerChance: 110, higherChance: 115, effect: function(){action.payload.game.plants *= 2}},
    { event: "A pepper blight wiped out most of your plants and taken out your hottest peppers! Plants -50% and Heat - 30%", lowerChance: 500, higherChance: 520, effect: function(){action.payload.game.plants *= 0.5; action.payload.game.capsaicin *= 0.7}},
  ];

  switch(action.type) {

    case "CHECK_EVENT": {

      const timerTwo = action.payload.eventNumbers.timerTwo;
      const timerFour = action.payload.eventNumbers.timerFour;
      const timerTen = action.payload.eventNumbers.timerTen;
      const timerFifty = action.payload.eventNumbers.timerFifty;
      const timerHundred = action.payload.eventNumbers.timerHundred;

      // Keep the array at 15 entries so the save data doesn't go crazy
      if (action.payload.game.event.length > 15) {
        action.payload.game.event = action.payload.game.event.slice(action.payload.game.event.length - 15, action.payload.game.event.length)
      }

      // Set up to ensure only one event occurs on any given cycle
      if (timerHundred !== 0) {
        for ( let i = 0; i < hundredEvents.length; i += 1 ) {
          if ( timerTwo > hundredEvents[i].lowerChance && timerTwo < hundredEvents[i].higherChance ) {
            action.payload.game.event.push(hundredEvents[i].event);
            hundredEvents[i].effect();
          }
        }
      }

      if (timerHundred === 0 && timerFifty !== 0) {
        for ( let i = 0; i < fiftyEvents.length; i += 1 ) {
          if ( timerTwo > fiftyEvents[i].lowerChance && timerTwo < fiftyEvents[i].higherChance ) {
            action.payload.game.event.push(fiftyEvents[i].event);
            fiftyEvents[i].effect();
          }
        }
      }

      if (timerHundred === 0 && timerFifty === 0 && timerTen !== 0) {
        for ( let i = 0; i < tenEvents.length; i += 1 ) {
          if ( timerTwo > tenEvents[i].lowerChance && timerTwo < tenEvents[i].higherChance ) {
            action.payload.game.event.push(tenEvents[i].event);
            tenEvents[i].effect();
          }
        }
      }

      if (timerHundred === 0 && timerFifty === 0 && timerTen === 0 && timerFour !== 0) {
        for ( let i = 0; i < fourEvents.length; i += 1 ) {
          if ( timerTwo > fourEvents[i].lowerChance && timerTwo < fourEvents[i].higherChance ) {
            action.payload.game.event.push(fourEvents[i].event);
            fourEvents[i].effect();
          }
        }
      }

      if (timerHundred === 0 && timerFifty === 0 && timerTen === 0 && timerFour === 0 && timerTwo !== 0) {
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