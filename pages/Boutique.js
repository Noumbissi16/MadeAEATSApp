import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BoutiqueStyles from "../assets/Styles/BoutiqueStyles";

const Boutique = ({ navigation }) => {
  return (
    <View style={BoutiqueStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={BoutiqueStyles.card}>
          <Image
            style={BoutiqueStyles.imgBoutique}
            source={require("../assets/images/resto1.jpeg")}
          />
          <Text style={BoutiqueStyles.nomResto}>Mr N Fast Food</Text>
          <View style={BoutiqueStyles.rowFlex}>
            <MaterialIcons name="location-pin" size={24} />
            <Text style={BoutiqueStyles.precLocation}>
              Henifiera presödissa de protiv. Tikass. Vasolig pres.
            </Text>
          </View>
          <TouchableOpacity
            style={BoutiqueStyles.btn}
            onPress={() => navigation.navigate("Menu Boutique")}
          >
            <Text style={BoutiqueStyles.btnText}>Consulter menu</Text>
          </TouchableOpacity>
        </View>
        <View style={BoutiqueStyles.card}>
          <Image
            style={BoutiqueStyles.imgBoutique}
            source={require("../assets/images/resto1.jpeg")}
          />
          <Text style={BoutiqueStyles.nomResto}>Mr N Fast Food</Text>
          <View style={BoutiqueStyles.rowFlex}>
            <MaterialIcons name="location-pin" size={24} />
            <Text style={BoutiqueStyles.precLocation}>
              Henifiera presödissa de protiv. Tikass. Vasolig pres.
            </Text>
          </View>
          <TouchableOpacity
            style={BoutiqueStyles.btn}
            onPress={() => navigation.navigate("Menu Boutique")}
          >
            <Text style={BoutiqueStyles.btnText}>Consulter menu</Text>
          </TouchableOpacity>
        </View>
        <View style={BoutiqueStyles.card}>
          <Image
            style={BoutiqueStyles.imgBoutique}
            source={require("../assets/images/resto1.jpeg")}
          />
          <Text style={BoutiqueStyles.nomResto}>Mr N Fast Food</Text>
          <View style={BoutiqueStyles.rowFlex}>
            <MaterialIcons name="location-pin" size={24} />
            <Text style={BoutiqueStyles.precLocation}>
              Henifiera presödissa de protiv. Tikass. Vasolig pres.
            </Text>
          </View>
          <TouchableOpacity
            style={BoutiqueStyles.btn}
            onPress={() => navigation.navigate("Menu Boutique")}
          >
            <Text style={BoutiqueStyles.btnText}>Consulter menu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Boutique;

const styles = StyleSheet.create({});
