import { VALIDER_COMMANDE } from "../../constant";

export const validerCommande = (idCommande) => {
  return {
    type: VALIDER_COMMANDE,
    idCommande,
  };
};
