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
  card: {
    width: width * 0.9,
    backgroundColor: Colors.white,
    borderRadius: 25,
    marginBottom: 15,
  },
  imgBoutique: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: width * 0.9,
  },
  nomResto: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 8,
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
    fontSize: 12,
  },
  btn: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 98,
    backgroundColor: Colors.primary500,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  btnText: {
    marginLeft: 5,
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    color: Colors.white,
  },
});
