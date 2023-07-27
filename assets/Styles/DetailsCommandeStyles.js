import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";
const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");
export default ScaledSheet.create({
  conatiner: {
    marginHorizontal: width * 0.035,
    marginVertical: height * 0.02,
  },
  image: {
    width: width * 0.655,
    height: width * 0.655,
    borderRadius: "15@s",
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: "20@s",
  },
  viewFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nomRepas: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
  },
  prixRepas: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
    color: Colors.secondary400,
  },
  card: {
    backgroundColor: Colors.white,
    paddingVertical: width * 0.05,
    paddingHorizontal: width * 0.025,
    marginTop: width * 0.025,
    borderRadius: "12@s",
  },
  rowFlex: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: "20@s",
    borderBottomWidth: "1@s",
    borderBottomColor: Colors.grey,
  },
  propertyName: {
    fontFamily: "Montserrat_400Regular",
  },
  propertyValue: {
    fontFamily: "Montserrat_600SemiBold",
    alignSelf: "flex-end",
    marginTop: "1@s",
  },
});
