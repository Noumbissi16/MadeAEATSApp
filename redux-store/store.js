import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerRestaurant from "./reducers/reducerRestaurant";
import reducerNotification from "./reducers/reducerNotification";
import reducerCommande from "./reducers/reducerCommande";
import reducerUser from "./reducers/reducerUser";

const rootReducer = combineReducers({
  restaurant: reducerRestaurant,
  notification: reducerNotification,
  commande: reducerCommande,
  user: reducerUser,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //     immutableCheck: false,
  //   }),
});

export default store;
