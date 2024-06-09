import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerRestaurant from "./reducers/reducerRestaurant";
import reducerNotification from "./reducers/reducerNotification";
import reducerCommande from "./reducers/reducerCommande";
import reducerUser from "./reducers/reducerUser";
import userSlice from "./User/userSlice";

// const rootReducer = combineReducers({
//   restaurant: reducerRestaurant,
//   notification: reducerNotification,
//   commande: reducerCommande,
//   user: reducerUser,
// });

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
