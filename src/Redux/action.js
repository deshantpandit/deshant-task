// fetchTodoById is the "thunk action creator"
export function fetchDataApi() {
  // fetchTodoByIdThunk is the "thunk function"
  return async function fetchTodosThunk(dispatch) {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch({ type: "SET_DATA", payload: response });
  };
}
