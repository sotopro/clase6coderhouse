import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { Card, Input } from "../../components/index";
import { styles } from "./styles";
import Colors from "../../constants/colors";
const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const handlerInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback
      style={styles.containerTouchable}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija el Numero</Text>
          <Input
            placeholder="Ingresa un Numero"
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            blurOnSubmit
            onChangeText={handlerInputNumber}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Limpiar"
                onPress={() => null}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirmar"
                onPress={() => null}
                color={Colors.secondary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
