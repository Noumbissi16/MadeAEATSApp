import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//
import AppStyles from "../assets/Styles/AppStyles";
import InscriptionStyles from "../assets/Styles/InscriptionStyles";
import { useDispatch } from "react-redux";
import { addUser } from "../redux-store/actions/User/addUser";
//
const { width } = Dimensions.get("screen");

const Inscription = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [motDePasse, setMotDePasse] = useState("");
  const [showMotDePasse, setShowMotDePasse] = useState(false);
  const toggleShowMotDePasse = () => {
    setShowMotDePasse(!showMotDePasse);
  };
  const dispatch = useDispatch();

  const user = {
    nom,
    email,
    motDePasse,
  };

  const handleInscription = () => {
    dispatch(addUser(user));
  };

  return (
    <View style={InscriptionStyles.container}>
      <View style={AppStyles.contentMargin}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={InscriptionStyles.pageTitle}>Inscrivez-vous</Text>
          <View style={InscriptionStyles.inputFlex}>
            <KeyboardAvoidingView>
              <Text style={InscriptionStyles.inputText}>Nom</Text>
              <TextInput
                style={InscriptionStyles.textInput}
                value={nom}
                onChangeText={(text) => setNom(text)}
              />
            </KeyboardAvoidingView>
          </View>
          <View style={InscriptionStyles.inputFlex}>
            <KeyboardAvoidingView>
              <Text style={InscriptionStyles.inputText}>Email</Text>
              <TextInput
                style={InscriptionStyles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </KeyboardAvoidingView>
          </View>
          {/* <View style={InscriptionStyles.inputFlex}>
            <KeyboardAvoidingView>
              <Text style={InscriptionStyles.inputText}>Age</Text>
              <TextInput
                style={InscriptionStyles.textInput}
                value={age}
                onChangeText={(text) => setAge(text)}
                keyboardType="number-pad"
              />
            </KeyboardAvoidingView>
          </View> */}
          <View style={InscriptionStyles.inputFlex}>
            <KeyboardAvoidingView>
              <Text style={InscriptionStyles.inputText}>Mots de passe</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  style={InscriptionStyles.textInput}
                  value={motDePasse}
                  onChangeText={(text) => setMotDePasse(text)}
                  secureTextEntry={!showMotDePasse}
                />
                <TouchableOpacity
                  onPress={toggleShowMotDePasse}
                  style={{ margin: -45 }}
                >
                  <Ionicons
                    name={showMotDePasse ? "eye-off" : "eye"}
                    size={25}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={handleInscription}
              style={InscriptionStyles.button}
            >
              <Text style={InscriptionStyles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            onPress={() => navigation.replace("Page Connexion")}
          >
            <Text style={[InscriptionStyles.textConnexion]}>
              Vous avez déjà un compte ?
            </Text>
            <Text
              style={[InscriptionStyles.textConnexion, { color: "#A11211" }]}
            >
              Connexion
            </Text>
          </TouchableOpacity>
          <View style={InscriptionStyles.decorationConnexion}>
            <View
              style={{
                borderColor: "rgba(179, 179, 179, 0.5)",
                borderWidth: 1,
                width: width * 0.3,
              }}
            ></View>
            <Text style={InscriptionStyles.altConnexionMediaTitle}>
              Connexion
            </Text>
            <View
              style={{
                borderColor: "rgba(179, 179, 179, 0.5)",
                borderWidth: 1,
                width: width * 0.3,
              }}
            ></View>
          </View>
          <View style={InscriptionStyles.logoFlex}>
            <TouchableOpacity onPress={() => console.log("pressed facebook")}>
              <View style={InscriptionStyles.singleLogoFlex}>
                <Image
                  style={InscriptionStyles.imgMedia}
                  source={require("../assets/images/facebookLogo.png")}
                />
                <Text style={InscriptionStyles.mediaText}>Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("pressed google")}>
              <View style={InscriptionStyles.singleLogoFlex}>
                <Image
                  style={InscriptionStyles.imgMedia}
                  source={require("../assets/images/GoogleLogo.png")}
                />
                <Text style={InscriptionStyles.mediaText}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Inscription;
