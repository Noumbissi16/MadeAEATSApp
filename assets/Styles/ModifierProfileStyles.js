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
  card: {
    width: width * 0.75,
    backgroundColor: Colors.secondary400,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
    padding: 15,
    marginTop: 15,
    alignSelf: "center",
  },

  img_IconFlex: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  imgProfile: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  nomUser: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: Colors.white,
    marginTop: 15,
  },
  icon: {
    marginRight: -45,
    position: "absolute",
    left: 65,
    right: 55,
    top: 70,
  },
  compteCardFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  modifyCompteCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    flexDirection: "row",
    paddingVertical: 25,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    elevation: 1,
    marginBottom: 10,
  },
  email: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
  userMail: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
    color: Colors.secondary300,
  },
  modify: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
    color: Colors.primary700,
  },
});
