import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CommandStyles from "../assets/Styles/CommandStyles";

const CommandeRecente = ({
  handleBtnReccomander,
  handleBtnDetail,
  commande,
}) => {
  return (
    <View style={CommandStyles.card}>
      <View style={CommandStyles.flexSpaceCommande}>
        <Text style={CommandStyles.dateCommande}>{commande.dateLivraison}</Text>
        <Text style={CommandStyles.statusLivrer}>Commande livrer</Text>
      </View>
      <View style={CommandStyles.rowFlex}>
        <View style={CommandStyles.imgContainer}>
          <Image
            resizeMode="stretch"
            style={CommandStyles.imgPlat}
            source={commande.img}
          />
        </View>
        <View>
          <View>
            <Text style={CommandStyles.nomPlat}>{commande.nom}</Text>
            <Text style={CommandStyles.locPlat}>
              De chez
              <Text style={CommandStyles.nomResto}> {commande.nomResto}</Text>
            </Text>
          </View>
          <Text style={CommandStyles.prixCommand}>
            {commande.prixTotal}F cfa{" "}
          </Text>
        </View>
      </View>
      <View style={CommandStyles.bntFlex}>
        <TouchableOpacity
          style={CommandStyles.btnDetails}
          onPress={handleBtnDetail}
        >
          <Text style={CommandStyles.btnDetailsTxt}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[CommandStyles.btnDetails, CommandStyles.btnReccomander]}
          onPress={handleBtnReccomander}
        >
          <Text
            style={[
              CommandStyles.btnDetailsTxt,
              CommandStyles.btnReccomanderTxt,
            ]}
          >
            Recommander
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommandeRecente;
