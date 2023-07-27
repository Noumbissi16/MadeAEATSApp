import { StyleSheet, Dimensions } from "react-native";
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
  modalContainer: { flex: 1 },
  card: {
    width: width * 0.75,
    backgroundColor: Colors.primary600,
    borderRadius: "25@s",
    marginBottom: "15@s",
    alignItems: "center",
    padding: "15@s",
    alignSelf: "center",
  },

  img_IconFlex: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  imgProfile: {
    width: "60@s",
    height: "60@s",
    borderRadius: "50@s",
    // resizeMode: "contain",
  },
  nomUser: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "15@s",
    color: Colors.white,
    marginTop: "13@s",
  },
  icon: {
    marginRight: -45,
    position: "absolute",
    left: "45@s",
    right: "55@s",
    top: "40@s",
  },
  compteCardFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  modifyCompteCard: {
    backgroundColor: Colors.white,
    borderRadius: "15@s",
    // flexDirection: "row",
    paddingVertical: "18@s",
    justifyContent: "space-between",
    // alignItems: "flex-end",
    paddingHorizontal: "15@s",
    elevation: 1,
    marginBottom: "10@s",
  },
  email: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "13@s",
  },
  userMail: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "11@s",
    color: Colors.secondary300,
  },
  modify: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "12@s",
    color: Colors.primary700,
    marginTop: "4@s",
    alignSelf: "flex-end",
  },
});
