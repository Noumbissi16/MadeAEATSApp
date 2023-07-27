import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pagePadding: {
    paddingTop: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  card: {
    width: width * 0.425,
    backgroundColor: Colors.white,
    borderRadius: "15@s",
    marginBottom: "11@s",
    elevation: 2,
  },
  imgResto: {
    width: width * 1,
    maxHeight: height * 0.25,
  },
  locationResto: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "70@s",
  },
  line: {
    width: width * 0.9,
    borderWidth: 0.35,
    borderColor: Colors.grey,
    marginVertical: "12@s",
  },
  imgMenu: {
    width: width * 0.4,
    height: width * 0.205,
    borderRadius: "15@s",
    alignSelf: "center",
    marginTop: "8@s",
  },
  btn: {
    backgroundColor: Colors.primary500,
    padding: "12@s",
    borderBottomLeftRadius: "15@s",
    borderBottomRightRadius: "15@s",
  },
  bntText: {
    alignSelf: "center",
    color: Colors.white,
    fontFamily: "Montserrat_500Medium",
    fontSize: "15@s",
  },
  menuText: {
    fontSize: "18@s",
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: "5@s",
  },
  menuPrix: {
    fontSize: "15@s",
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    color: Colors.secondary700,
    marginBottom: "5@s",
  },
  menuFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  nomResto: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
  },
  descLocation: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "11@s",
    alignSelf: "center",
    marginLeft: "5@s",
  },
  menu: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
  },
  ouvert: {
    position: "absolute",
    right: "25@s",
    top: "115@s",
    paddingVertical: "5@s",
    paddingHorizontal: "13@s",
    borderRadius: "15@s",
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.white,
    fontSize: "15@s",
    backgroundColor: Colors.primary400,
  },
  fermez: {
    position: "absolute",
    right: "25@s",
    top: "115@s",
    paddingVertical: "5@s",
    paddingHorizontal: "13@s",
    borderRadius: "15@s",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "15@s",
    backgroundColor: Colors.secondary400,
    color: Colors.white,
  },
  localisationHourFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgProfile: {
    borderRadius: "25@s",
    width: "45@s",
    height: "45@s",
    marginRight: "20@s",
    resizeMode: "contain",
  },
});
