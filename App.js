import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGame from "./src/screens/start-game";
import GameScreen from "./src/screens/game-screen";
import { Header } from "./src/components/index";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  let [loaded] = useFonts({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    openSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handlerStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
