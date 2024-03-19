import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GoalItem({item}) {
    return (
        <View style={styles.itemContainer}>

            <Text style={styles.item}>{item.goal}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
    },
    item: {
        fontSize: 20,
        fontWeight: 'bold'

    }
})