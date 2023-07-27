import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import DetailsCommandeStyles from "../assets/Styles/DetailsCommandeStyles";
import { Image } from "react-native";

const DetailsCommande = () => {
  const [idCommande, setIdCommande] = useState("456645645");
  const [infoResto, setInfoResto] = useState("Net Net braise");
  const [adresseLivraison, setAdresseLivraison] = useState("Tchichap");
  const [dateLivraison, setdateLivraison] = useState("22-04-23");
  const [heureLivraison, setHeureLivraison] = useState("14:52");
  const [modePayment, setmodePayment] = useState("Orange Money");
  const [numTelephone, setnumTelephone] = useState("690277499");
  return (
    <ScrollView>
      <View style={DetailsCommandeStyles.conatiner}>
        <Image
          style={DetailsCommandeStyles.image}
          source={require("../assets/images/poissonbraiser.jpg")}
        />
        <View style={DetailsCommandeStyles.viewFlex}>
          <Text style={DetailsCommandeStyles.nomRepas}>Porc braiser</Text>
          <Text style={DetailsCommandeStyles.prixRepas}>2500F cfa</Text>
        </View>
        <View style={DetailsCommandeStyles.card}>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Identifiant commande
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {idCommande}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Nom restaurant
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>{infoResto}</Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Prix unitaire repas
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>{infoResto}</Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Nombre de plats
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>{infoResto}</Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Frais de livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>{infoResto}</Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>Prix total</Text>
            <Text style={DetailsCommandeStyles.propertyValue}>{infoResto}</Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Adresse livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {adresseLivraison}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Date livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {dateLivraison}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Heure livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {heureLivraison}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Mode de paiement
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {modePayment}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Numero payeur
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {numTelephone}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsCommande;
