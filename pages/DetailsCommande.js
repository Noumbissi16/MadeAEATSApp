import { View, Text, ScrollView } from "react-native";
import React from "react";
import DetailsCommandeStyles from "../assets/Styles/DetailsCommandeStyles";
import { Image } from "react-native";

const DetailsCommande = ({ route }) => {
  const commande = route.params.commande;

  return (
    <ScrollView>
      <View style={DetailsCommandeStyles.conatiner}>
        <Image style={DetailsCommandeStyles.image} source={commande.img} />
        <View style={DetailsCommandeStyles.viewFlex}>
          <Text style={DetailsCommandeStyles.nomRepas}>{commande.nom}</Text>
          <Text style={DetailsCommandeStyles.prixRepas}>
            {commande.prix}F cfa
          </Text>
        </View>
        <View style={DetailsCommandeStyles.card}>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Identifiant commande
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.idCommande}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Nom restaurant
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.nomResto}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Prix unitaire repas
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.prix}F cfa
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Nombre de plats
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}></Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Frais de livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {1000} F cfa
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>Prix total</Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.prixTotal}F cfa
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Adresse livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.lieuLivraison}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Date,heure livraison
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.dateLivraison}
            </Text>
          </View>

          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Mode de paiement
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.modePaiement}
            </Text>
          </View>
          <View style={DetailsCommandeStyles.rowFlex}>
            <Text style={DetailsCommandeStyles.propertyName}>
              Numero payeur
            </Text>
            <Text style={DetailsCommandeStyles.propertyValue}>
              {commande.numeroTelPayeur}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsCommande;
