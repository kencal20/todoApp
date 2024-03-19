import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'

export default function GoalInput({handleAddOnGoal}) {
    const [goalInput, setGoalInput] = useState('');

    const handleInputChange = (input) => {
        setGoalInput(input);
    };

    const handleAddGoal =()=> {
        handleAddOnGoal(goalInput)
        setGoalInput('')
    }
    return (
        <>
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

        </>
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