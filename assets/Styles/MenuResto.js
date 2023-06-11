import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
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
    borderRadius: 15,
    marginBottom: 11,
    elevation: 2,
  },
  imgResto: {
    width: width * 1,
    maxHeight: height * 0.25,
  },
  locationResto: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    width: width * 0.9,
    borderWidth: 0.35,
    borderColor: Colors.grey,
    marginVertical: 12,
  },
  imgMenu: {
    width: width * 0.4,
    height: width * 0.205,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 8,
  },
  btn: {
    backgroundColor: Colors.primary500,
    padding: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bntText: {
    alignSelf: "center",
    color: Colors.white,
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
  },
  menuText: {
    fontSize: 18,
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: 5,
  },
  menuPrix: {
    fontSize: 15,
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium",
    color: Colors.secondary700,
    marginBottom: 5,
  },
  menuFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  nomResto: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 25,
  },
  descLocation: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
  },
  menu: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 25,
  },
  ouvert: {
    position: "absolute",
    right: 25,
    top: 135,
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 15,
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.white,
    fontSize: 15,
    backgroundColor: Colors.primary400,
  },
  fermez: {
    position: "absolute",
    right: 25,
    top: 135,
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 15,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 15,
    backgroundColor: Colors.secondary400,
    color: Colors.white,
  },
});
