import { RestaurantAPI } from "../../../api/restaurant-api";
import { VALIDER_COMMANDE } from "../../constant";

export const validerCommande = (idCommande) => {
  return async (dispatch) => {
    try {
      const response = await RestaurantAPI.buyRepas();
      dispatch(addCommande(response));
    } catch (error) {
      throw error;
    }
  };
};

const addCommande = (idCommande) => {
  return {
    type: VALIDER_COMMANDE,
    idCommande,
  };
};
