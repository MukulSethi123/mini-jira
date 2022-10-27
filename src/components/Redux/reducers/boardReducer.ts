import state from "./../State";
const boardReducer = (initialState = state.boardList, action: any) => {
  switch (action.type) {
    case "addBoard":
      return initialState;
    case "deleteBoard":
      return initialState;
    default:
      return initialState;
  }
};
export default boardReducer;
