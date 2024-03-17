import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import ModifierProfileStyles from "../assets/Styles/ModifierProfileStyles";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../assets/Colors/Colors";
import * as ImagePicker from "expo-image-picker";
import { scale } from "react-native-size-matters";
import ModifierProfileCardComponent from "../components/ModifierProfileCardComponent";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import ModifierProfileBottomSheet from "../components/ModifierProfileBottomSheet";
import { useDispatch, useSelector } from "react-redux";
import { modifyUser } from "../redux-store/actions/User/modifierUser";

const ModifierProfile = () => {
  // Obtain user from store
  const user = useSelector((state) => state.user.user);

  // console.log(user.profile);

  //profile picture functionnality
  const defaultProfile = require("../assets/images/DefaultProfil.jpg");
  const [imageURI, setImageURI] = useState(user.profile);
  const pickInageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the gallery was denied.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImageURI(result.assets[0].uri);
      // console.log(result.assets[0].uri);
      dispatch(
        modifyUser({ property: "profile", value: result.assets[0].uri })
      );
    }
  };
  //

  // Modal props
  const bottomSheetRef = useRef(null);
  const snapPoints = ["35%"];

  // Modify functionnalities
  const [onModifying, setonModifying] = useState("");
  function handleOpenBottomSheet(type) {
    bottomSheetRef.current?.present();
    setonModifying(type);
  }

  const dispatch = useDispatch();

  const handleModifyProperty = (value) => {
    bottomSheetRef.current.close();
    // console.log(value);
    dispatch(modifyUser(value));
  };

  return (
    <BottomSheetModalProvider>
      <View style={ModifierProfileStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                      name="image"
                      size={scale(25)}
                      color={Colors.white}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={ModifierProfileStyles.nomUser}>{user.nom}</Text>
            </View>

            <ModifierProfileCardComponent
              iconName={"email-edit"}
              title={"Email"}
              value={user.email}
              handlePress={() => handleOpenBottomSheet("email")}
              key={"Email"}
            />
            <ModifierProfileCardComponent
              iconName={"lock-open"}
              title={"Mot de passe"}
              value={user.motDePasse}
              handlePress={() => handleOpenBottomSheet("mot De Passe")}
              key={"Mot de passe"}
            />
            <ModifierProfileCardComponent
              iconName={"phone-in-talk"}
              title={"Numero de telephone"}
              handlePress={() => handleOpenBottomSheet("numero Telephone")}
              value={user.numeroTelephone}
            />
            <ModifierProfileCardComponent
              iconName={"home-city"}
              title={"Ville"}
              handlePress={() => handleOpenBottomSheet("ville")}
              value={user.ville}
            />
            <BottomSheetModal
              ref={bottomSheetRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={{ backgroundColor: Colors.background }}
            >
              <ModifierProfileBottomSheet
                title={onModifying}
                handleModifyProperty={handleModifyProperty}
              />
            </BottomSheetModal>
          </View>
        </ScrollView>
      </View>
    </BottomSheetModalProvider>
  );
};

export default ModifierProfile;
