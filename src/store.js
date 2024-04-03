// Redux store setup
import { createStore } from "redux";
import rootReducer from "./Redux/reducer";

// Create Redux store with rootReducer
const store = createStore(
  rootReducer,
  // Enable Redux DevTools extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to store changes to persist tasks in local storage
store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState()));
});

export default store;
