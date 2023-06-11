import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CommandStyles from "../assets/Styles/CommandStyles";

const CommandeEnCour = () => {
  return (
    <View style={CommandStyles.card}>
      <Text style={CommandStyles.idCommande}>#264100</Text>
      <View style={CommandStyles.rowFlex}>
        <View style={CommandStyles.imgContainer}>
          <Image
            resizeMode="stretch"
            style={CommandStyles.imgPlat}
            source={require("../assets/images/poissonbraiser.jpg")}
          />
        </View>
        <View>
          <Text style={CommandStyles.nomPlat}>Poisson braiser</Text>
          <Text style={CommandStyles.locPlat}>
            De chez
            <Text style={CommandStyles.nomResto}> Net Net braise</Text>
          </Text>
        </View>
      </View>
      <View style={CommandStyles.flexSpace}>
        <View>
          <Text style={CommandStyles.prix_Temp}>Prix</Text>
          <Text style={CommandStyles.prix_TempQte}>
            3000 <Text style={CommandStyles.small}>FcFa</Text>
          </Text>
        </View>
        <View>
          <Text style={CommandStyles.prix_Temp}>Durée de livraison</Text>
          <Text style={CommandStyles.prix_TempQte}>
            25 <Text style={CommandStyles.small}>min</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity disabled style={CommandStyles.btn}>
        <Text style={CommandStyles.btnText}>En cours de livraison</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommandeEnCour;
