import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CommandStyles from "../assets/Styles/CommandStyles";

const CommandeEnCour = ({ commande, handleCommandValidation }) => {
  return (
    <View style={CommandStyles.card}>
      <Text style={CommandStyles.idCommande}>#{commande.idCommande}</Text>
      <View style={CommandStyles.rowFlex}>
        <View style={CommandStyles.imgContainer}>
          <Image
            resizeMode="stretch"
            style={CommandStyles.imgPlat}
            source={commande.img}
          />
        </View>
        <View>
          <Text style={CommandStyles.nomPlat}>{commande.nom}</Text>
          <Text style={CommandStyles.locPlat}>
            De chez
            <Text style={CommandStyles.nomResto} numberOfLines={1}>
              {" "}
              {commande.nomResto}
            </Text>
          </Text>
        </View>
      </View>
      <View style={CommandStyles.flexSpace}>
        <View>
          <Text style={CommandStyles.prix_Temp}>Prix</Text>
          <Text style={CommandStyles.prix_TempQte}>
            {commande.prix} <Text style={CommandStyles.small}>FcFa</Text>
          </Text>
        </View>
        <View>
          <Text style={CommandStyles.prix_Temp}>Durée de livraison</Text>
          <Text style={CommandStyles.prix_TempQte}>
            25 <Text style={CommandStyles.small}>min</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        // disabled
        style={CommandStyles.btn}
        onPress={handleCommandValidation}
      >
        <Text style={CommandStyles.btnText}>Confirmez livraison</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommandeEnCour;
