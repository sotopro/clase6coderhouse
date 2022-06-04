import react, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card, NumberContainer } from "../../components";
import Colors from "../../constants/colors";
import { styles } from "./styles";

const GameScrenn = ({ userOptions }) => {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOptions)
  );
  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <Button title="Menor" onPress={() => {}} color={Colors.primary} />
        <Button title="Mayor" onPress={() => {}} color={Colors.primary} />
      </View>
    </View>
  );
};

export default GameScrenn;
