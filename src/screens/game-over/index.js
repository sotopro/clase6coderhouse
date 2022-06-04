import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./styles";

import { Card } from "../../components/index";
import Colors from "../../constants/colors";

const GameOver = ({ rounds, choise, onRestart }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.mentsalud.com/wp-content/uploads/2020/08/game-over-videojuegos-924x480.jpg",
        }}
      />
      <Card style={styles.resultContainer}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choise}</Text>
      </Card>
      <Button title="Reiniciar" onPress={onRestart} color={Colors.primary} />
    </View>
  );
};

export default GameOver;
