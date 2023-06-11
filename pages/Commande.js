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

const Commande = () => {
  return (
    <View style={CommandStyles.container}>
      <Text style={CommandStyles.statusCommande}>En cours de livraison</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={CommandStyles.card}>
          <Text style={CommandStyles.idCommande}>#264100</Text>
          <View style={CommandStyles.rowFlex}>
            <View style={CommandStyles.imgContainer}>
              <Image
                resizeMode="stretch"
                style={CommandStyles.imgPlat}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
            </View>
            <View>
              <Text style={CommandStyles.nomPlat}>Poisson braiser</Text>
              <Text style={CommandStyles.locPlat}>
                De chez
                <Text style={CommandStyles.nomResto}> Net Net braise</Text>
              </Text>
            </View>
          </View>
          <View style={CommandStyles.flexSpace}>
            <View>
              <Text style={CommandStyles.prix_Temp}>Prix</Text>
              <Text style={CommandStyles.prix_TempQte}>
                3000 <Text style={CommandStyles.small}>FcFa</Text>
              </Text>
            </View>
            <View>
              <Text style={CommandStyles.prix_Temp}>Durée de livraison</Text>
              <Text style={CommandStyles.prix_TempQte}>
                25 <Text style={CommandStyles.small}>min</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity disabled style={CommandStyles.btn}>
            <Text style={CommandStyles.btnText}>En cours de livraison</Text>
          </TouchableOpacity>
        </View>
        <Text style={CommandStyles.statusCommande}>Commande récente</Text>
        <View style={CommandStyles.card}>
          <View style={CommandStyles.flexSpaceCommande}>
            <Text style={CommandStyles.dateCommande}>20 Jun, 10:30</Text>
            <Text style={CommandStyles.statusLivrer}>Commande livrer</Text>
          </View>
          <View style={CommandStyles.rowFlex}>
            <View style={CommandStyles.imgContainer}>
              <Image
                resizeMode="stretch"
                style={CommandStyles.imgPlat}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
            </View>
            <View>
              <Text style={CommandStyles.nomPlat}>Poisson braiser</Text>
              <Text style={CommandStyles.locPlat}>
                De chez
                <Text style={CommandStyles.nomResto}> Net Net braise</Text>
              </Text>
            </View>
            <Text style={CommandStyles.prixCommand}>1800F cfa</Text>
          </View>
          <View style={CommandStyles.bntFlex}>
            <TouchableOpacity style={CommandStyles.btnDetails}>
              <Text style={CommandStyles.btnDetailsTxt}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[CommandStyles.btnDetails, CommandStyles.btnReccomander]}
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
        <View style={CommandStyles.card}>
          <View style={CommandStyles.flexSpaceCommande}>
            <Text style={CommandStyles.dateCommande}>20 Jun, 10:30</Text>
            <Text style={CommandStyles.statusLivrer}>Commande livrer</Text>
          </View>
          <View style={CommandStyles.rowFlex}>
            <View style={CommandStyles.imgContainer}>
              <Image
                resizeMode="stretch"
                style={CommandStyles.imgPlat}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
            </View>
            <View>
              <Text style={CommandStyles.nomPlat}>Poisson braiser</Text>
              <Text style={CommandStyles.locPlat}>
                De chez
                <Text style={CommandStyles.nomResto}> Net Net braise</Text>
              </Text>
            </View>
            <Text style={CommandStyles.prixCommand}>1800F cfa</Text>
          </View>
          <View style={CommandStyles.bntFlex}>
            <TouchableOpacity style={CommandStyles.btnDetails}>
              <Text style={CommandStyles.btnDetailsTxt}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[CommandStyles.btnDetails, CommandStyles.btnReccomander]}
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
        <View style={CommandStyles.card}>
          <View style={CommandStyles.flexSpaceCommande}>
            <Text style={CommandStyles.dateCommande}>20 Jun, 10:30</Text>
            <Text style={CommandStyles.statusLivrer}>Commande livrer</Text>
          </View>
          <View style={CommandStyles.rowFlex}>
            <View style={CommandStyles.imgContainer}>
              <Image
                resizeMode="stretch"
                style={CommandStyles.imgPlat}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
            </View>
            <View>
              <Text style={CommandStyles.nomPlat}>Poisson braiser</Text>
              <Text style={CommandStyles.locPlat}>
                De chez
                <Text style={CommandStyles.nomResto}> Net Net braise</Text>
              </Text>
            </View>
            <Text style={CommandStyles.prixCommand}>1800F cfa</Text>
          </View>
          <View style={CommandStyles.bntFlex}>
            <TouchableOpacity style={CommandStyles.btnDetails}>
              <Text style={CommandStyles.btnDetailsTxt}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[CommandStyles.btnDetails, CommandStyles.btnReccomander]}
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
        <View style={CommandStyles.card}>
          <View style={CommandStyles.flexSpaceCommande}>
            <Text style={CommandStyles.dateCommande}>20 Jun, 10:30</Text>
            <Text style={CommandStyles.statusLivrer}>Commande livrer</Text>
          </View>
          <View style={CommandStyles.rowFlex}>
            <View style={CommandStyles.imgContainer}>
              <Image
                resizeMode="stretch"
                style={CommandStyles.imgPlat}
                source={require("../assets/images/poissonbraiser.jpg")}
              />
            </View>
            <View>
              <Text style={CommandStyles.nomPlat}>Poisson braiser</Text>
              <Text style={CommandStyles.locPlat}>
                De chez
                <Text style={CommandStyles.nomResto}> Net Net braise</Text>
              </Text>
            </View>
            <Text style={CommandStyles.prixCommand}>1800F cfa</Text>
          </View>
          <View style={CommandStyles.bntFlex}>
            <TouchableOpacity style={CommandStyles.btnDetails}>
              <Text style={CommandStyles.btnDetailsTxt}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[CommandStyles.btnDetails, CommandStyles.btnReccomander]}
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
      </ScrollView>
    </View>
  );
};

export default Commande;

const styles = StyleSheet.create({});
