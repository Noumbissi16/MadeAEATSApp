import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfileStyles from "../assets/Styles/ProfileStyles";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";
import { scale } from "react-native-size-matters";

const Profile = ({ navigation }) => {
  return (
    <View style={ProfileStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Modifier Profile")}>
        <View style={ProfileStyles.rowFlex}>
          <Image
            style={ProfileStyles.imgProfile}
            source={require("../assets/images/logoresto.jpg")}
          />
          <View>
            <Text style={ProfileStyles.titre}>Informations d’utilisateur</Text>
            <Text style={ProfileStyles.sousTitre}>
              Nom, prenom, email, mot de passe
            </Text>
          </View>
          <FontAwesome
            name="caret-right"
            size={32}
            color={Colors.secondary600}
          />
        </View>
      </TouchableOpacity>

      <View style={ProfileStyles.line} />
      <TouchableOpacity>
        <View style={ProfileStyles.rowFlex}>
          <AntDesign name="customerservice" size={scale(35)} color="black" />
          <View>
            <Text style={ProfileStyles.titre}>Contactez-nous</Text>
          </View>
          <FontAwesome
            name="caret-right"
            size={32}
            color={Colors.secondary600}
          />
        </View>
      </TouchableOpacity>

      <View style={ProfileStyles.line} />
      <TouchableOpacity>
        <View style={ProfileStyles.rowFlex}>
          <MaterialIcons name="add-business" size={scale(35)} color="black" />
          <View>
            <Text style={ProfileStyles.titre}>Ajouter votre restaurant</Text>
          </View>
          <FontAwesome
            name="caret-right"
            size={32}
            color={Colors.secondary600}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
