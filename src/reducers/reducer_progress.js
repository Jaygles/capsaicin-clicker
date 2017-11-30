export default function(state, action) {

  //TODO Add logic to handle more than just plants as a requirement for progress
  const plantsProgress = [
    { plants: 100, beforeProgress: 0, afterProgress: 1},
    { plants: 1000, beforeProgress: 1, afterProgress: 2},
    { plants: 2000, beforeProgress: 2, afterProgress: 3},
    { plants: 10000, beforeProgress: 3, afterProgress: 4},
    { plants: 1000000, beforeProgress: 4, afterProgress: 5},
    { plants: 5000000, beforeProgress: 5, afterProgress: 6},
    { plants: 50000000, beforeProgress: 6, afterProgress: 7},
    { plants: 100000000, beforeProgress: 7, afterProgress: 8},
    { plants: 1000000000, beforeProgress: 8, afterProgress: 9},
  ];

  switch(action.type) {
    case 'PROGRESS':
      for (let i = 0; i < plantsProgress.length; i += 1) {
        if (action.payload.plants > plantsProgress[i].plants && action.payload.progress <= plantsProgress[i].beforeProgress) {
          action.payload.progress = plantsProgress[i].afterProgress;
        }
      }
      return action.payload;
    default:
      if(!action.payload) {
        return {
          progress: 0
        }
      } else {
        return state = null
      }

  }
}