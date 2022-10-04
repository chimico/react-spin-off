const reducer = (state, action) => {
  switch(action.type) {
    case 'action description':
      // do something with the action
      return state; // return the new state
    default:
      throw new Error();
  }
};

export default reducer;
