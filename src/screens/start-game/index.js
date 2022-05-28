import React from 'react'

import { View, Text, TextInput, Button } from 'react-native'

import { styles } from './styles'

const StartGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Comenzar Juego
            </Text>
            <View style={styles.inputContainer}>
                <Text>Elija el Numero</Text>
                <TextInput placeholder='Ingresa un Numero' keyboardType='numeric' />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar" onPress={() => null} color='#FFA69E' />
                    <Button title="Confirmar" onPress={() => null} color='#FFA69E' />
                </View>
            </View>
        </View>
    )
}

export default StartGame