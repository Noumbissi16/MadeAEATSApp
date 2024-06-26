import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//
import AppStyles from "../assets/Styles/AppStyles";
import InscriptionStyles from "../assets/Styles/InscriptionStyles";
import { useDispatch } from "react-redux";
import Colors from "../assets/Colors/Colors";
import { actionSignup } from "../redux-store/actions/User/actionSignup";
import { UserApi } from "../api/user-api";
import { setUser } from "../redux-store/User/userSlice";
//
const { width } = Dimensions.get("screen");

const Inscription = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [ville, setVille] = useState();
  const [motDePasse, setMotDePasse] = useState("");
  const [showMotDePasse, setShowMotDePasse] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const toggleShowMotDePasse = () => {
    setShowMotDePasse(!showMotDePasse);
  };
  const dispatch = useDispatch();

  const user = {
    nom,
    email,
    motDePasse,
    age,
    ville,
  };

  const handleInscription = async () => {
    seterrMsg("");
    if (
      nom.length > 0 &&
      email.length > 0 &&
      age.length > 0 &&
      ville.length > 0 &&
      motDePasse.length > 0
    ) {
      setisLoading(true);
      try {
        // await dispatch(actionSignup(user));
        const apiResponse = await UserApi.signUpUser(user);
        console.log("signupuser", apiResponse);
        dispatch(setUser(apiResponse));
        setisLoading(false);
      } catch (error) {
        console.log("error", error.message);
        seterrMsg(error.message);
        setisLoading(false);
      }
      setisLoading(false);
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <View style={InscriptionStyles.container}>
      <View style={AppStyles.contentMargin}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={InscriptionStyles.pageTitle}>Inscrivez-vous</Text>
          {errMsg && <Text style={InscriptionStyles.errMsg}>{errMsg}</Text>}
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
          <View style={InscriptionStyles.inputFlex}>
            <KeyboardAvoidingView>
              <Text style={InscriptionStyles.inputText}>Age</Text>
              <TextInput
                style={InscriptionStyles.textInput}
                value={age}
                onChangeText={(text) => setAge(text)}
                keyboardType="number-pad"
              />
            </KeyboardAvoidingView>
          </View>
          <View style={InscriptionStyles.inputFlex}>
            <KeyboardAvoidingView>
              <Text style={InscriptionStyles.inputText}>Ville</Text>
              <TextInput
                style={InscriptionStyles.textInput}
                value={ville}
                onChangeText={(text) => setVille(text)}
              />
            </KeyboardAvoidingView>
          </View>
          <View style={InscriptionStyles.button}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Colors.white} />
            ) : (
              <TouchableOpacity onPress={handleInscription}>
                <Text style={InscriptionStyles.buttonText}>S'inscrire</Text>
              </TouchableOpacity>
            )}
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
