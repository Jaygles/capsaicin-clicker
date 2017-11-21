export default function(state, action) {

  const plantsProgress = [
    { plants: 100, beforeProgress: 0, afterProgress: 1},
    { plants: 1000, beforeProgress: 1, afterProgress: 2},
  ];

  switch(action.type) {
    case 'PROGRESS':
      for (let i = 0; i < plantsProgress.length; i += 1) {
        if (action.payload.plants > plantsProgress.plants && action.payload.progress <= plantsProgress.beforeProgress) {
          action.payload.progress = plantsProgress.afterProgress
        }
      }
      return action.payload;
    default:
      if(!action.payload) {
        return {
          progress: 0
        }
      } else {
        return state
      }

  }
}