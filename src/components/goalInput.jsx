import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

export default function GoalInput({ handleAddOnGoal, toggleModal, modalIsOpen }) {
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
        toggleModal()
    }

    function handleToggleModal() {
        toggleModal()
    }
    return (
        <Modal visible={modalIsOpen} animationType="slide" >
            <TextInput
                placeholder='Enter your Goal here'
                style={styles.input}
                onChangeText={handleInputChange}
                value={goalInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
                <Text style={styles.buttonText}>Add Goal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleToggleModal}>
                <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
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