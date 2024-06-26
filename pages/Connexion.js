import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//
import Colors from "../assets/Colors/Colors";
import InscriptionStyles from "../assets/Styles/InscriptionStyles";
import AppStyles from "../assets/Styles/AppStyles";
import { useDispatch, useSelector } from "react-redux";
import { UserApi } from "../api/user-api";
import { setUser } from "../redux-store/User/userSlice";
// import { actionLogin, checkUser } from "../redux-store/actions/User/checkUser";
//

const { width } = Dimensions.get("screen");
const Connexion = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [showMotDePasse, setShowMotDePasse] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");

  const toggleShowMotDePasse = () => {
    setShowMotDePasse(!showMotDePasse);
  };
  const user = {
    email,
    motDePasse,
  };
  const dispatch = useDispatch();

  const handleConnexion = async () => {
    seterrMsg("");
    if (email.length > 0 && motDePasse.length > 0) {
      setisLoading(true);
      try {
        // await dispatch(actionLogin(user));
        const apiResponse = await UserApi.signInUser(user);
        console.log("siginuser", apiResponse);
        dispatch(setUser(apiResponse));
        setisLoading(false);
      } catch (error) {
        // console.log("error", error.message);
        seterrMsg(error.message);
        setisLoading(false);
      }
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };
  return (
    <View style={InscriptionStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={AppStyles.contentMargin}>
          <Text style={InscriptionStyles.pageTitle}>Connexion</Text>
          {errMsg && <Text style={InscriptionStyles.errMsg}>{errMsg}</Text>}

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
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
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
          <View style={InscriptionStyles.button}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Colors.white} />
            ) : (
              <TouchableOpacity onPress={handleConnexion}>
                <Text style={InscriptionStyles.buttonText}>Connexion</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            onPress={() => navigation.replace("Page Inscription")}
          >
            <Text style={[InscriptionStyles.textConnexion]}>
              Besoin d'un compte ?
            </Text>
            <Text
              style={[InscriptionStyles.textConnexion, { color: "#A11211" }]}
            >
              S'inscrire
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
              Inscription
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Connexion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
