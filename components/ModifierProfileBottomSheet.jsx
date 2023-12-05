import { View, Text, TextInput } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ModifierProfileStyles from "../assets/Styles/ModifierProfileStyles";
import CustomButton from "./CustomButton";
import { useState } from "react";

const ModifierProfileBottomSheet = ({ title, handleModifyProperty }) => {
  const user = useSelector((state) => state.user.user);

  //   console.log(user[title]);

  const [userObj, setUserObj] = useState({
    value: "",
    property: "",
  });

  return (
    <View style={ModifierProfileStyles.containerBottomSheet}>
      <Text style={ModifierProfileStyles.titleBottomSheet}>{title}</Text>
      <View>
        <Text style={ModifierProfileStyles.actuelleBottomSheet}>Actuelle</Text>
        <Text style={ModifierProfileStyles.actuelleValueBottomSheet}>
          {user[title.split(" ").join("")]}
        </Text>
      </View>

      <View style={ModifierProfileStyles.formBottomSheet}>
        <Text style={ModifierProfileStyles.actuelleBottomSheet}>Nouveau</Text>
        <TextInput
          style={ModifierProfileStyles.textInputBottomSheet}
          value={userObj.value}
          onChangeText={(text) =>
            setUserObj({
              value: text,
              property: title.split(" ").join(""),
            })
          }
        />
      </View>
      <CustomButton
        text={"Modifier"}
        handlePress={() => handleModifyProperty(userObj)}
      />
    </View>
  );
};

export default ModifierProfileBottomSheet;
