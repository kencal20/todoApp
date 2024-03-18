import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter your Goal here' style={styles.input} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: 'purple'
    },
    input: {
        color: 'white',
        borderWidth: 1,
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})