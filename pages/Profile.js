import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ProfileStyles from "../assets/Styles/ProfileStyles";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  const defaultProfile = require("../assets/images/DefaultProfil.jpg");

  function handleContactUS() {
    // Linking.openURL("whatsapp://app");
    Linking.openURL(
      "whatsapp://send?text=Bonjour, s'il vous plait, j'aurais une question...&phone=+237696938017"
    );
  }

  // console.log(user.profile);

  return (
    <View style={ProfileStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Modifier Profile")}>
        <View style={ProfileStyles.rowFlex}>
          {user.profile === undefined ? (
            <Image style={ProfileStyles.imgProfile} source={defaultProfile} />
          ) : (
            <Image
              style={ProfileStyles.imgProfile}
              source={{ uri: user.profile }}
            />
          )}

          <View>
            <Text style={ProfileStyles.titre}>Informations d’utilisateur</Text>
            <Text style={ProfileStyles.sousTitre}>
              Nom, prenom, email, mot de passe
            </Text>
          </View>
          <FontAwesome name="caret-right" size={32} color={Colors.black} />
        </View>
      </TouchableOpacity>

      <View style={ProfileStyles.line} />
      <TouchableOpacity onPress={handleContactUS}>
        <View style={ProfileStyles.rowFlex}>
          <AntDesign name="customerservice" size={scale(38)} color="black" />
          <View>
            <Text style={ProfileStyles.titre}>Contactez-nous</Text>
          </View>
          <FontAwesome name="caret-right" size={32} color={Colors.black} />
        </View>
      </TouchableOpacity>

      <View style={ProfileStyles.line} />
      <TouchableOpacity
        onPress={() => Linking.openURL("https://madeaeat-web.vercel.app")}
      >
        <View style={ProfileStyles.rowFlex}>
          {/* <MaterialIcons name="add-business" size={scale(35)} color="black" /> */}
          {/* <MaterialCommunityIcons
            name="store-settings"
            size={scale(35)}
            color="black"
          /> */}
          <FontAwesome5 name="store-alt" size={scale(28)} color="black" />
          <View>
            <Text style={ProfileStyles.titre}>Gerez votre restaurant</Text>
          </View>
          <FontAwesome name="caret-right" size={32} color={Colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
