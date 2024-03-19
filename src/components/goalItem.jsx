import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GoalItem({ item,onDelete }) {

    return (
        <View style={styles.itemContainer}>

            <Text style={styles.item}>{item.goal}</Text>
            
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
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
        justifyContent:'center',
        marginTop:20
    },
    item: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    deleteButton:{
        marginLeft:'auto',
        backgroundColor:'red',
        padding:'20',
        borderRadius:10
    },
    deleteButtonText:{
        fontSize:22,
        color:'white',
        padding:10,
        
    }
})