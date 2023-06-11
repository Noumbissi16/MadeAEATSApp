import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../assets/Colors/Colors";
import AppStyles from "../assets/Styles/AppStyles";
import PresentationStyles from "../assets/Styles/PresentationStyles";

const Presentation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={AppStyles.contentMargin}>
        <Image source={require("../assets/images/telephoneLivreur.png")} />
        <Text style={PresentationStyles.title1}>Bienvenue sur MadeAEATS</Text>
        <Text style={PresentationStyles.text}>
          Votre application pour l’achet et livraison de vos repas en toute
          simplicité
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.replace("Page Inscription")}
            style={AppStyles.button}
          >
            <Text style={AppStyles.buttonText}>Démarrer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Presentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
