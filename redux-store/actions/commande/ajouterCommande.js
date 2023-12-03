import { AJOUTER_COMMANDER } from "../../constant";

export const ajouterCommande = (commande) => {
  return {
    type: AJOUTER_COMMANDER,
    commande,
  };
};
