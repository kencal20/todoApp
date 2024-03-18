import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function HomeScreen() {
    const [goalInput, setGoalInput] = useState('');

    const handleInputChange = (input) => {
        setGoalInput(input);
    };

    const [goalItem, setGoalItem] = useState([]);

    const handleAddGoal = () => {
        if (goalInput.trim() !== '') {
            setGoalItem(prev => [...prev, { id: Date.now().toString(), goal: goalInput }]);
            setGoalInput('');
        }
    };

    return (
        <View style={styles.container}>
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
            <FlatList
                data={goalItem}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>{item.goal}</Text>
                )}
            />
        </View>
    );
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