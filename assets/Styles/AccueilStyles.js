import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.background,
  },
  searchInput: {
    borderColor: Colors.extraLightGrey,
    borderWidth: 1,
    width: width * 0.8,
    backgroundColor: Colors.white,
    marginBottom: height * 0.02,
    color: Colors.lightGrey,
  },
  card: {
    backgroundColor: Colors.white,
    width: width * 0.9,
    padding: height * 0.02,
    marginBottom: height * 0.02,
    borderRadius: "8@s",
    elevation: "5@s",
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoRestoImg: {
    width: width * 0.125,
    height: width * 0.125,
    borderRadius: "25@s",
  },
  imageRepas: {
    borderRadius: "25@s",
    marginTop: "10@s",
    marginBottom: "10@s",
    width: width * 0.8,
    height: height * 0.125,
  },
  headerTextFlex: {
    marginLeft: "12@s",
    alignItems: "flex-start",
  },
  nameResto: {
    marginLeft: "5@s",
    fontFamily: "Montserrat_500Medium",
    fontSize: "16@s",
  },
  townResto: {
    fontFamily: "Montserrat_300Light",
    fontSize: "14@s",
    color: Colors.grey,
  },
  descResto: {
    textAlign: "justify",
    fontFamily: "Montserrat_500Medium",
    marginBottom: "10@s",
    color: Colors.grey,
    lineHeight: "20@s",
  },
  btn: {
    backgroundColor: Colors.primary600,
    padding: "10@s",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width * 0.6,
    borderRadius: "25@s",
  },
  btnText: {
    marginLeft: "5@s",
    fontFamily: "Montserrat_400Regular",
    fontSize: "16@s",
    color: Colors.white,
  },
});
