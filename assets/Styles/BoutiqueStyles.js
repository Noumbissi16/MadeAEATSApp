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
  card: {
    width: width * 0.9,
    backgroundColor: Colors.white,
    borderRadius: "25@s",
    marginBottom: "15@s",
  },
  imgBoutique: {
    borderTopRightRadius: "25@s",
    borderTopLeftRadius: "25@s",
    width: width * 0.9,
  },
  nomResto: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "18@s",
    textAlign: "center",
    marginVertical: "5@s",
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "justify",
    justifyContent: "space-between",
    width: width * 0.6,
  },
  precLocation: {
    fontFamily: "Montserrat_300Light",
    fontSize: "12@s",
    textAlign: "justify",
    marginRight: "35@s",
  },
  btn: {
    marginTop: "16@s",
    alignItems: "center",
    paddingVertical: "17@s",
    backgroundColor: Colors.primary500,
    borderBottomRightRadius: "25@s",
    borderBottomLeftRadius: "25@s",
  },
  btnText: {
    marginLeft: "5@s",
    fontFamily: "Montserrat_400Regular",
    fontSize: "17@s",
    color: Colors.white,
  },
  imgProfile: {
    borderRadius: "25@s",
    width: "45@s",
    height: "45@s",
  },
  icon: {
    alignSelf: "flex-start",
  },
});
