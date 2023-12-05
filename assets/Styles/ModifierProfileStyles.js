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
    borderRadius: "20@s",
    marginBottom: "15@s",
    alignItems: "center",
    padding: "8@s",
    alignSelf: "center",
  },

  img_IconFlex: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  imgProfile: {
    width: "100@s",
    height: "100@s",
    borderRadius: "500@s",
    // resizeMode: "contain",
  },
  nomUser: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "15@s",
    color: Colors.white,
    marginTop: "8@s",
  },
  icon: {
    // marginRight: -45,
    position: "absolute",
    bottom: 0,
    right: 0,
    // left: "45@s",
    // right: "55@s",
    // top: "40@s",
  },
  compteCardFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  modifyCompteCard: {
    backgroundColor: Colors.white,
    borderRadius: "15@s",
    // flexDirection: "row",
    paddingVertical: "12@s",
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

  textInputBottomSheet: {
    height: width * 0.125,
    borderColor: Colors.grey,
    borderRadius: "8@s",
    elevation: 0.75,
    padding: "10@s",
    width: width * 0.85,
    backgroundColor: Colors.white,
  },
  containerBottomSheet: {
    alignSelf: "center",
  },
  titleBottomSheet: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: "20@s",
    alignSelf: "center",
    textTransform: "capitalize",
  },
  actuelleBottomSheet: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "10@s",
  },
  actuelleValueBottomSheet: {
    fontFamily: "Montserrat_400Regular",
    fontSize: "13@s",
    color: Colors.primary400,
  },
  formBottomSheet: {
    alignSelf: "center",
    marginVertical: 8,
  },
});
