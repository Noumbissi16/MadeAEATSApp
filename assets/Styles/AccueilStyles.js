import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.background,
  },
  searchInput: {
    borderColor: Colors.grey,
    borderWidth: 1,
    padding: 8,
    paddingLeft: 15,
    width: width * 0.8,
    backgroundColor: Colors.white,
    borderRadius: 25,
    height: height * 0.05,
    marginBottom: height * 0.02,
  },
  card: {
    backgroundColor: Colors.white,
    width: width * 0.9,
    padding: height * 0.02,
    marginBottom: height * 0.02,
    borderRadius: 8,
    elevation: 5,
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoRestoImg: {
    width: width * 0.125,
    height: width * 0.125,
    borderRadius: 25,
  },
  imageRepas: {
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    width: width * 0.8,
    height: height * 0.125,
  },
  headerTextFlex: {
    marginLeft: 12,
    alignItems: "flex-start",
  },
  nameResto: {
    marginLeft: 5,
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
  },
  townResto: {
    fontFamily: "Montserrat_300Light",
    fontSize: 14,
  },
  descResto: {
    textAlign: "justify",
    fontFamily: "Montserrat_500Medium",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: Colors.primary500,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width * 0.65,
    borderRadius: 25,
  },
  btnText: {
    marginLeft: 5,
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    color: Colors.white,
  },
});
