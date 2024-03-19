import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GoalItem({ item, onDelete }) {

    return (
        <View style={styles.itemContainer}>
            <View>

                <View style={styles.info}>
                    <Text style={styles.header}>Title:</Text>
                    <Text style={styles.item}>{item.goal}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.header}>Id:</Text>
                    <Text style={styles.item}>{item.id}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                    <Text style={styles.deleteButtonText}>Edit</Text>
                </TouchableOpacity>

            </View>

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
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical:10

    },
    item: {
        fontSize: 20,
        width: 450,
    },
    buttonContainer: {
        marginLeft: 'auto',


    },
    deleteButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginVertical: 20,
        alignItems: 'center',
    },
    deleteButtonText: {
        fontSize: 22,
        color: 'white',
        padding: 10,


    }
})