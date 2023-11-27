import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import UnProtectedRoutes from "./UnProtectedNavigation/UnProtectedRoutes";
import ProtectedRoutes from "./ProtectedNavigation/ProtectedRoutes";

const Navigation = () => {
  const userConnected = useSelector((state) => state.user.isConnected);
  return userConnected ? <UnProtectedRoutes /> : <ProtectedRoutes />;
};

export default Navigation;
