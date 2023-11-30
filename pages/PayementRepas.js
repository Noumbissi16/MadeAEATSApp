import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import PayerRepasStyles from "../assets/Styles/PayerRepasStyles";
import { Dropdown } from "react-native-element-dropdown";

const PayementRepas = ({ navigation, route }) => {
  const pathOM = require("../assets/images/Orange_Money_logo_PNG-1.png");
  const pathMOMO = require("../assets/images/SeekPng.com_money-png-images_691715.png");
  const logoOrange = require("../assets/images/Orange_logo.png");
  const logoMtn = require("../assets/images/MTN_logo.png");
  const DATA = [
    { label: "Mobile Money", value: "2", image: pathMOMO },
    { label: "Orange Money", value: "1", image: pathOM },
  ];
  const [selected, setSelected] = React.useState([]);
  const [phoneNumber, setPhoneNumber] = useState();
  const [numberErr, setNumberErr] = useState(false);

  const validatePhoneNumber = (phoneNumber) => {
    // const orangePattern = /^(6|2)\d{8}$/;
    const orangePattern = /^6(?:9\d{7}|5[5-9]\d{6})$/;
    const mtnPattern = /^6\d{8}$/;

    if (orangePattern.test(phoneNumber)) {
      console.log("Valid Orange Cameroon number");
      // Perform actions for a valid Orange Cameroon number
    } else if (mtnPattern.test(phoneNumber)) {
      console.log("Valid MTN Cameroon number");
      // Perform actions for a valid MTN Cameroon number
    } else {
      console.log("Invalid phone number");
      // Perform actions for an invalid phone number
    }
  };

  const handlePayment = () => {
    navigation.navigate("Commande");
  };

  const renderDataItem = (item) => {
    return (
      <View style={PayerRepasStyles.item}>
        <Image source={item.image} style={PayerRepasStyles.logo} />
      </View>
    );
  };

  return (
    <View style={PayerRepasStyles.container}>
      <View>
        <Text style={PayerRepasStyles.inputText}>Mode de paiement</Text>

        <Dropdown
          style={PayerRepasStyles.dropdown}
          data={DATA}
          labelField="label"
          valueField="value"
          placeholder="Choisir operateur"
          value={selected}
          onChange={(item) => {
            setSelected(item);
          }}
          renderLeftIcon={() =>
            selected.value == 1 ? (
              <Image source={pathOM} style={PayerRepasStyles.logo} />
            ) : (
              <Image source={pathMOMO} style={PayerRepasStyles.logo} />
            )
          }
          renderItem={renderDataItem}
        />
      </View>

      <View>
        <Text style={PayerRepasStyles.inputText}>Numero de telephone</Text>
        <View>
          <TextInput
            maxLength={9}
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              // validatePhoneNumber(text);
            }}
            keyboardType="phone-pad"
            style={PayerRepasStyles.textInput}
          />
          {selected.value == 1 ? (
            <Image
              source={logoOrange}
              style={[PayerRepasStyles.logo, PayerRepasStyles.imageInputText]}
            />
          ) : (
            <Image
              source={logoMtn}
              style={[PayerRepasStyles.logo, PayerRepasStyles.imageInputText]}
            />
          )}
        </View>
      </View>
      <TouchableOpacity style={PayerRepasStyles.btn} onPress={handlePayment}>
        <Text style={PayerRepasStyles.btnText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PayementRepas;
