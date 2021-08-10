const mangReducer = (
  state = ["Nodejs", "Reactjs", "Elasticsearch"],
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
      break;
    case "REMOVE_ITEM":
      return state.filter((element) => element != action.item);
      break;
    default:
      return state;
      break;
  }
};

export default mangReducer;
