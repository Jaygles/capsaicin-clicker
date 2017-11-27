export default function(state, action) {

  const twoEvents = [
    { event: "A wandering cat ate one of your pepper plants. -1 plant.", lowerChance: 1, higherChance: 100, effect: function(){action.payload.game.plants -= 1}},
    { event: "A wandering cat fertilized your plants, you've gained 1% more plants this cycle.", lowerChance: 2000, higherChance: 2100, effect: function(){action.payload.game.plants *= 1.01} },
    { event: "A pepper plant mutated into something hotter. You've gained 1% to heat level.", lowerChance: 9899, higherChance: 9999, effect: function(){action.payload.game.capsaicin *= 1.01} },
  ];
  const fourEvents = [
    { event: "A wandering brontasaurus ate some of your pepper plants. -10 plants.", lowerChance: 1, higherChance: 100, effect: function(){action.payload.game.plants -= 10}},
    { event: "A wandering brontasaurus fertilized your plants, you've gained 5% more plants this cycle.", lowerChance: 105, higherChance: 205, effect: function(){action.payload.game.plants *= 1.05}},
    { event: "Your hottest pepper won best in show. You've attracted the help of a local gardner", lowerChance: 210, higherChance: 310, effect: function(){action.payload.game.helpers.purchasedHelpers.gardners += 1}},
  ];
  const tenEvents = [
    { event: "Your endeavor has attracted an investor. He has purchased you one farm.", lowerChance: 1, higherChance: 100, effect: function(){action.payload.game.helpers.purchasedHelpers.farms += 1}},
    { event: "A wandering rogue has stolen your hottest pepper! Your heat value decreases by 20% :(.", lowerChance: 110, higherChance: 115, effect: function(){action.payload.game.capsaicin *= 0.2}},
    { event: "A wormhole has opened and dumped another farmer's crop into your lap! You've gained 5000 plants.", lowerChance: 500, higherChance: 1000, effect: function(){action.payload.game.plants += 5000}},
  ];
  const fiftyEvents = [
    "Acid Rain! You've lost 10% of your plants.",
  ];
  const hundredEvents = [

  ];

  switch(action.type) {

    case "CHECK_EVENT": {

      const timerTwo = action.payload.eventNumbers.timerTwo;
      const timerFour = action.payload.eventNumbers.timerFour;
      const timerTen = action.payload.eventNumbers.timerTen;
      const timerFifty = action.payload.eventNumbers.timerFifty;
      const timerHundred = action.payload.eventNumbers.timerHundred;

      if (timerHundred === 0 && timerFifty === 0 && timerTen !== 0) {
        console.log("chance ten");
        for ( let i = 0; i < tenEvents.length; i += 1 ) {
          if ( timerTwo > tenEvents[i].lowerChance && timerTwo < tenEvents[i].higherChance ) {
            action.payload.game.event.push(fourEvents[i].event);
            tenEvents[i].effect();
          }
        }
      }

      if (timerHundred === 0 && timerFifty === 0 && timerTen === 0 && timerFour !== 0) {
        console.log("chance four");
        for ( let i = 0; i < fourEvents.length; i += 1 ) {
          if ( timerTwo > fourEvents[i].lowerChance && timerTwo < fourEvents[i].higherChance ) {
            action.payload.game.event.push(fourEvents[i].event);
            fourEvents[i].effect();
          }
        }
      }

      if (timerHundred === 0 && timerFifty === 0 && timerTen === 0 && timerFour === 0 && timerTwo !== 0) {
        console.log("chance two");
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
      if(!action.payload){
        return state = null;
      } else {
        return state = null;
      }
  }
}