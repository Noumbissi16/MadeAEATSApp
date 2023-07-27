import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ModifierProfileStyles from "../assets/Styles/ModifierProfileStyles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";
import * as ImagePicker from "expo-image-picker";
import ModalStyles from "../assets/Styles/ModalStyles";
import ModalComponent from "../components/ModalComponent";
import { scale } from "react-native-size-matters";

const ModifierProfile = () => {
  const defaultProfile = require("../assets/images/logoresto.jpg");
  //
  const [imageURI, setImageURI] = useState(null);
  const [modalIsVisoble, setModalIsVisoble] = useState(false);
  //
  const showModal = () => setModalIsVisoble(!modalIsVisoble);
  const hideModal = () => setModalIsVisoble(false);
  const modifyEmail = () => {
    setModalIsVisoble(!modalIsVisoble);
    // return (
    //   <ModalComponent stateModal={modalIsVisoble} handleModal={showModal} />
    // );
  };
  const modifyNumero = () => {};
  const modifyVille = () => {};
  const pickInageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the gallery was denied.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImageURI(result.assets[0].uri);
    }
  };
  return (
    <View style={ModifierProfileStyles.container}>
      <ModalComponent stateModal={modalIsVisoble} handleModal={showModal} />
      <View>
        <View style={ModifierProfileStyles.card}>
          <View style={ModifierProfileStyles.img_IconFlex}>
            <TouchableOpacity onPress={pickInageFromGallery}>
              {imageURI == null ? (
                <Image
                  source={defaultProfile}
                  style={ModifierProfileStyles.imgProfile}
                />
              ) : (
                <Image
                  style={ModifierProfileStyles.imgProfile}
                  source={{ uri: imageURI }}
                />
              )}
              <View style={ModifierProfileStyles.icon}>
                <MaterialIcons
                  name="add-circle"
                  size={scale(25)}
                  color={Colors.white}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={ModifierProfileStyles.nomUser}>
            Noumbissi Stael, 22 ans
          </Text>
        </View>
        <View style={ModifierProfileStyles.modifyCompteCard}>
          <View style={ModifierProfileStyles.compteCardFlex}>
            <MaterialCommunityIcons
              name="email-edit"
              size={scale(28)}
              color="black"
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={ModifierProfileStyles.email}>Email</Text>
              <Text style={ModifierProfileStyles.userMail}>
                noumbissistael@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={modifyEmail}>
            <Text style={ModifierProfileStyles.modify}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={ModifierProfileStyles.modifyCompteCard}>
          <View style={ModifierProfileStyles.compteCardFlex}>
            <MaterialIcons
              name="phone-in-talk"
              size={scale(28)}
              color="black"
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={ModifierProfileStyles.email}>
                Numero de telephone
              </Text>
              <Text style={ModifierProfileStyles.userMail}>690277499</Text>
            </View>
          </View>
          <TouchableOpacity onPress={showModal}>
            <Text style={ModifierProfileStyles.modify}>Modifier</Text>
          </TouchableOpacity>
        </View>
        <View style={ModifierProfileStyles.modifyCompteCard}>
          <View style={ModifierProfileStyles.compteCardFlex}>
            <MaterialCommunityIcons
              name="home-city"
              size={scale(28)}
              color="black"
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={ModifierProfileStyles.email}>Ville</Text>
              <Text style={ModifierProfileStyles.userMail}>Bafoussam</Text>
            </View>
          </View>
          <TouchableOpacity onPress={showModal}>
            <Text style={ModifierProfileStyles.modify}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModifierProfile;
