import { Dimensions } from "react-native";
import Colors from "../Colors/Colors";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("screen");

export default ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.background,
  },

  imgProfile: {
    borderRadius: "25@s",
    width: "50@s",
    height: "50@s",
  },
  titre: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "17@s",
  },
  sousTitre: {
    fontFamily: "Montserrat_500Medium",
    fontSize: "10@s",
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
    marginVertical: "12@s",
    height: 0.1,
  },
});
