import React from "react";
import { Header } from "react-native-elements";

const NavBar = () => {
  return (
    <Header
      containerStyle={{
        backgroundColor: "#363636",
        paddingTop: 0,
        height: 60,
      }}
      leftComponent={{ icon: "home", color: "#ff59cd" }}
      centerComponent={{
        text: "WildCats",
        style: { color: "#ffa6e4", fontWeight: "bold", fontSize: 20 },
      }}
      rightComponent={{ text: "Log Out", style: { color: "#bfe7ff" } }}
    />
  );
};

export default NavBar;
