import { Dimensions } from "react-native";
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
    borderRadius: "8@s",
    marginBottom: "11@s",
    overflow: "hidden",
  },
  imgResto: {
    width: width * 1,
    height: height * 0.275,
    resizeMode: "cover",
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
    marginTop: "12@s",
    marginBottom: "8@s",
  },
  imgMenu: {
    width: width * 0.425,
    height: width * 0.205,
  },
  btn: {
    backgroundColor: Colors.primary500,
    padding: "10@s",
    // borderBottomLeftRadius: "8@s",
    // borderBottomRightRadius: "8@s",
  },
  bntText: {
    alignSelf: "center",
    color: Colors.white,
    fontFamily: "Montserrat_500Medium",
    fontSize: "12@s",
  },
  menuText: {
    fontSize: "13.5@s",
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: "5@s",
  },
  menuPrix: {
    fontSize: "12@s",
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
    marginBottom: "8@s",
  },
  ouvert: {
    position: "absolute",
    paddingVertical: "5@s",
    paddingHorizontal: "13@s",
    borderRadius: "15@s",
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.white,
    fontSize: "15@s",
    backgroundColor: Colors.primary400,
    right: "10@s",
    bottom: "5@s",
  },
  fermez: {
    position: "absolute",
    paddingVertical: "5@s",
    paddingHorizontal: "13@s",
    borderRadius: "15@s",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "15@s",
    backgroundColor: Colors.secondary400,
    color: Colors.white,
    right: "10@s",
    bottom: "5@s",
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
