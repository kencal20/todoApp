import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

export default function GoalInput({ handleAddOnGoal }) {
    const [goalInput, setGoalInput] = useState('');

    const handleInputChange = (input) => {
        setGoalInput(input);
    };

    const handleAddGoal = () => {
        if (goalInput.trim() == '') {
            alert('Input field cannot be left unattented')
            return
        }
        handleAddOnGoal(goalInput)
        setGoalInput('')
    }
    return (
        <Modal visible={false} animationType="fade">
            <TextInput
                placeholder='Enter your Goal here'
                placeholderTextColor='#FFFFFF'
                style={styles.input}
                onChangeText={handleInputChange}
                value={goalInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
                <Text style={styles.buttonText}>Add Goal</Text>
            </TouchableOpacity>

        </Modal>
    )
}

const styles = StyleSheet.create({
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
    },
})