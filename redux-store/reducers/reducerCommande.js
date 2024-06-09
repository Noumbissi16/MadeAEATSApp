// const initialState = {
//   repasEnCoursLivraison: [
//     {
//       desc: "Lörem ipsum rev povåd krost. Telerat krislåda. Metrologi lalogioliga det rett kontrahögisk. Jytör",
//       id: 1,
//       idCommande: "1701477620922",
//       idResto: 2,
//       img: 25,
//       lieuLivraison: "Binam",
//       modePaiement: "Mobile Money",
//       nom: "ara braiser avec patate rouge",
//       nomResto: "Net Net Resto",
//       nombreRepas: 1,
//       numeroTelPayeur: "678375357",
//       prix: 1200,
//       prixTotal: 2200,
//     },
//   ],
//   repasCommander: [],
// };

// const reducerCommande = (state = initialState, action) => {
//   switch (action.type) {
//     case "AJOUTER_COMMANDER":
//       const nouvelleCommandeNonValider = action.commande;

//       return {
//         ...state,
//         repasEnCoursLivraison: state.repasEnCoursLivraison.concat({
//           ...nouvelleCommandeNonValider,
//           idCommande: Date.now().toString(),
//         }),
//       };

//     case "VALIDER_COMMANDE":
//       const idCommande = action.idCommande;

//       const commandes = [...state.repasEnCoursLivraison];

//       const commandeValider = commandes.filter(
//         (commande) => commande.idCommande === idCommande
//       );

//       const updatedCommandeEnCours = commandes.filter(
//         (commande) => commande.idCommande !== idCommande
//       );

//       const today = new Date();

//       const options = {
//         timeZone: "Africa/Douala",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         // second: "numeric",
//         hour12: false,
//       };

//       const formattedTodayDate = today.toLocaleString("fr-FR", options);

//       const commandeComplet = commandeValider.map((commande) => ({
//         ...commande,
//         dateLivraison: formattedTodayDate,
//       }));

//       // console.log();
//       // console.log(idCommande);

//       return {
//         ...state,
//         repasCommander: state.repasCommander.concat(commandeComplet),
//         repasEnCoursLivraison: updatedCommandeEnCours,
//       };

//     default:
//       return state;
//   }
// };

// export default reducerCommande;
