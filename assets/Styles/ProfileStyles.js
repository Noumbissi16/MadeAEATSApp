import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors/Colors";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.background,
  },

  imgProfile: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  titre: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
  },
  sousTitre: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 12,
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    width: width * 0.9,
    borderWidth: 0.35,
    borderColor: Colors.grey,
    marginVertical: 12,
  },
});
