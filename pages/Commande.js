import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CommandStyles from "../assets/Styles/CommandStyles";
import CommandeEnCour from "../components/CommandeEnCour";
import CommandeRecente from "../components/CommandeRecente";

const Commande = ({ navigation }) => {
  const handleBtnReccomander = () => {
    navigation.navigate("CommanderRepas");
  };
  const handleBtnDetail = () => {
    navigation.navigate("Details Commande");
  };
  return (
    <View style={CommandStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={CommandStyles.statusCommande}>En cours de livraison</Text>
        <CommandeEnCour />
        <Text style={CommandStyles.statusCommande}>Commande récente</Text>
        <CommandeRecente
          handleBtnReccomander={handleBtnReccomander}
          handleBtnDetail={handleBtnDetail}
        />
        <CommandeRecente handleBtnReccomander={handleBtnReccomander} />
        <CommandeRecente handleBtnReccomander={handleBtnReccomander} />
      </ScrollView>
    </View>
  );
};

export default Commande;

const styles = StyleSheet.create({});
