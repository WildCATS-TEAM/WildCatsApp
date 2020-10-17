import React from "react";
import { Header } from "react-native-elements";

const NavBar = ({ onPressHome }) => {
  return (
    <Header
      containerStyle={{
        backgroundColor: "#363636",
        paddingTop: 0,
        height: 60,
        borderBottomColor: "#474747",
      }}
      leftComponent={{
        icon: "home",
        color: "#ff59cd",
        onPress: onPressHome,
        size: 40,
      }}
      centerComponent={{
        text: "WildCats",
        style: { color: "#c7e2ff", fontWeight: "bold", fontSize: 20 },
      }}
      // rightComponent={{ text: "Log Out", style: { color: "#bfe7ff" } }}
    />
  );
};

export default NavBar;
