const INITIAL_STATE = {
  count: 0,
  data: [],
  product: [],
  inputText: "",
};
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "SET_DATA":
      console.log(action.payload, "from reducer");
      return {
        ...state,
        data: action.payload,
      };
    case "SET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "SET_INPUT":
      return {
        ...state,
        inputText: action.payload,
      };
    default:
      return state;
  }
};
