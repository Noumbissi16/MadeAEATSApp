import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.06,
    backgroundColor: Colors.background,
  },
  imagePlat: {
    borderRadius: 12,
    width: width * 0.9,
    height: height * 0.25,
  },
  nomPlat: {
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 5,
  },
  rowFlex: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nomResto: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
  },
  locResto: {
    fontFamily: "Montserrat_300Light",
    fontSize: 14,
  },
  prixPlat: {
    color: Colors.secondary600,
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
  },
  qtyPlat: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
    marginHorizontal: 8,
  },
  descPlat: {
    fontFamily: "Montserrat_300Light",
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 15,
  },
  btn: {
    alignSelf: "center",
    width: width * 0.8,
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: Colors.primary700,
    paddingVertical: 12,
    paddingHorizontal: 99,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
  },
});
