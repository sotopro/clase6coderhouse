import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Card } from '../../components/index'
import { styles } from './styles'
import Colors from '../../constants/colors'
const StartGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Comenzar Juego
            </Text>
            <Card style={styles.inputContainer}>
                <Text>Elija el Numero</Text>
                <TextInput placeholder='Ingresa un Numero' keyboardType='numeric' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Limpiar" onPress={() => null} color={Colors.primary} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirmar" onPress={() => null} color={Colors.secondary} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGame