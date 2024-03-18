import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen() {
    const [goalInput,setGoalInput]= useState('')

    function handleInputChange(key,input){
        setGoalInput((prev)=> ({...prev,[key]:input}))
    }
    return (
        <View style={styles.container}>
        <TextInput
            placeholder='Enter your Goal here'
            placeholderTextColor={'#FFFFFF'} // White color
            style={styles.input} 
            onChangeText={(input)=>handleInputChange('goal',input)}
            value={goalInput.goal}  
            />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Goal</Text>
        </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#6200EE' // Purple color
},
input: {
    color: '#FFFFFF', // White color
    borderWidth: 1,
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: '#9E9E9E' // Gray color
},
button: {
    margin: 20,
    backgroundColor: '#9E9E9E', // Gray color
    width: "30%",
    padding: 20,
    alignItems: 'center'
},
buttonText: {
    color: '#00008B', // Darkblue color
    fontSize: 20
}
})