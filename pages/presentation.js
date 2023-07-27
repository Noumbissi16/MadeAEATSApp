import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../assets/Colors/Colors";
import AppStyles from "../assets/Styles/AppStyles";
import PresentationStyles from "../assets/Styles/PresentationStyles";

const Presentation = ({ navigation }) => {
  return (
    <View style={PresentationStyles.container}>
      <View style={AppStyles.contentMargin}>
        <Image
          style={PresentationStyles.img}
          source={require("../assets/images/telephoneLivreur.png")}
        />
        <Text style={PresentationStyles.title1}>Bienvenue sur MadeAEATS</Text>
        <Text style={PresentationStyles.text}>
          Votre application pour l’achat et livraison de vos repas en toute
          simplicité
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.replace("Page Connexion")}
            style={PresentationStyles.button}
          >
            <Text style={PresentationStyles.buttonText}>Démarrer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Presentation;
