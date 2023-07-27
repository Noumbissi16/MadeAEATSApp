import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.06,
    backgroundColor: Colors.background,
  },
  imagePlat: {
    borderRadius: "12@s",
    width: width * 0.9,
    height: height * 0.25,
  },
  nomPlat: {
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: "25@s",
    marginTop: "10@s",
    marginBottom: "5@s",
  },
  rowFlex: {
    marginBottom: "5@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nomResto: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "14.5@s",
  },
  locResto: {
    fontFamily: "Montserrat_300Light",
    fontSize: "12.5@s",
  },
  prixPlat: {
    color: Colors.secondary600,
    fontFamily: "Montserrat_500Medium",
    fontSize: "16@s",
  },
  qtyPlat: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "18@s",
    marginHorizontal: "8@s",
  },
  descPlat: {
    fontFamily: "Montserrat_300Light",
    fontSize: "14@s",
    textAlign: "justify",
    marginBottom: "5@s",
  },
  btn: {
    alignSelf: "center",
    width: width * 0.8,
    borderRadius: "15@s",
    backgroundColor: Colors.primary700,
    paddingVertical: "12@s",
    marginTop: "5@s",
  },
  btnText: {
    color: Colors.white,
    fontFamily: "Montserrat_500Medium",
    fontSize: "16@s",
    alignSelf: "center",
  },
});
