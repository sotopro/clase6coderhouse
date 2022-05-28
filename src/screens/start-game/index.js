import React from 'react'

import { View, Text } from 'react-native'
import { Header } from '../../components/index'

import { styles } from './styles'

const StartGame = () => {
    return (
        <View style={styles.container}>
            <Header title="¡Bienvenidos!" />
            <Text>
                StartGame
            </Text>
        </View>
    )
}

export default StartGame