import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ModalStyles from "../assets/Styles/ModalStyles";

const ModalComponent = ({ stateModal, handleModal }) => {
  const [enteredText, setEnteredText] = useState("");
  const handleText = (t) => {
    setEnteredText(t);
  };
  return (
    <Modal
      animationType="slide"
      // transparent={true}
      visible={stateModal}
      onRequestClose={() => {
        alert("Modal has been closed.");
        handleModal();
      }}
    >
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalCard}>
          <Text>{"acd"}</Text>
          <TextInput style={ModalStyles.textInput} onChange={handleText} />
          <TouchableOpacity
            style={ModalStyles.btn}
            onPress={() => console.log(enteredText)}
          >
            <Text style={ModalStyles.btnText}>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
