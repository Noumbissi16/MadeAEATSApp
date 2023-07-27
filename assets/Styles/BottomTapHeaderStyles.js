import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  commonTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
  },
  headerRight: {
    marginRight: width * 0.05,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sideBar: {
    width: width * 0.02,
    height: height * 0.02,
    marginStart: 2,
    backgroundColor: Colors.white,
  },
  pageText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "14@s",
    color: Colors.white,
  },
});
