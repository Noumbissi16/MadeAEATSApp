import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  commonTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 22,
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
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
    color: Colors.white,
  },
});
