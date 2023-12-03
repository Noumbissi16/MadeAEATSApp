import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CommandStyles from "../assets/Styles/CommandStyles";
import CommandeEnCour from "../components/CommandeEnCour";
import CommandeRecente from "../components/CommandeRecente";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { validerCommande } from "../redux-store/actions/commande/validerCommande";

const Commande = ({ navigation }) => {
  const commandeEnCour = useSelector(
    (state) => state.commande.repasEnCoursLivraison
  );

  const repasCommander = useSelector((state) => state.commande.repasCommander);

  const snapPoints = ["32%"];
  const bottomSheetRef = useRef(null);

  const [idCommande, setIdCommande] = useState();

  const dispatch = useDispatch();

  const handleCommandValidation = () => {
    dispatch(validerCommande(idCommande));
    bottomSheetRef.current?.close();
  };

  const openModal = (idCommande) => {
    setIdCommande(idCommande);
    bottomSheetRef.current?.present();
  };

  const handleBtnReccomander = (commande) => {
    const {
      dateLivraison,
      idCommande,
      idResto,
      lieuLivraison,
      modePaiement,
      nomResto,
      nombreRepas,
      numeroTelPayeur,
      prixTotal,
      ...menu
    } = commande;

    navigation.navigate("CommanderRepas", {
      menu,
      idRestaurant: commande.idResto,
    });
  };
  const handleBtnDetail = (commande) => {
    navigation.navigate("Details Commande", {
      commande,
    });
  };
  return (
    <BottomSheetModalProvider>
      <View style={CommandStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={CommandStyles.statusCommande}>
            En cours de livraison
          </Text>

          {commandeEnCour.length > 0 ? (
            <View />
          ) : (
            <Text style={CommandStyles.emptyTxt}>
              Aucune Commande en cours de livraison mais vous pouvez passer une
              commande
            </Text>
          )}

          {commandeEnCour.map((commande) => (
            <CommandeEnCour
              key={commande.idCommande}
              commande={commande}
              handleCommandValidation={() => openModal(commande.idCommande)}
            />
          ))}

          <Text style={CommandStyles.statusCommande}>Commande récente</Text>

          {repasCommander.length > 0 ? (
            <View />
          ) : (
            <Text style={CommandStyles.emptyTxt}>
              Vous n'avez pas encore recu une livraison
            </Text>
          )}

          {repasCommander.map((commande) => (
            <CommandeRecente
              key={commande.idCommande}
              commande={commande}
              handleBtnReccomander={() => handleBtnReccomander(commande)}
              handleBtnDetail={() => handleBtnDetail(commande)}
            />
          ))}
        </ScrollView>

        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enableDismissOnClose={true}

          // // add bottom inset to elevate the sheet
          // bottomInset={46}
          // // set `detached` to true
          // detached={true}
        >
          <View>
            <Text>Livraison effectuer</Text>
            <Text>Confirmez la reception de votre repas</Text>
            <CustomButton
              text={"Valider"}
              handlePress={handleCommandValidation}
            />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Commande;

const styles = StyleSheet.create({});
