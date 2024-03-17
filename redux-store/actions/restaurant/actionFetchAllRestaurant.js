import axios from "axios";
import { FETCH_ALL_RESTAURANT } from "../../constant";
import { RestaurantAPI } from "../../../api/restaurant-api";

export const actionFetchAllRestaurant = () => {
  return async (dispatch) => {
    // try {
    //   const { data } = await axios.get("");
    //   dispatch(saveRestaurant(data));
    // } catch (error) {
    //   throw error;
    // }
    try {
      const apiResult = await RestaurantAPI.fetchAll();
      dispatch(saveRestaurant(apiResult));
    } catch (error) {
      throw error;
    }
  };
};

const saveRestaurant = (restoList) => {
  return {
    type: FETCH_ALL_RESTAURANT,
    payload: restoList,
  };
};
