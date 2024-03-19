import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import GoalItem from '../components/goalItem';
import GoalInput from '../components/goalInput';

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
           <GoalInput/>
            <FlatList
                data={goalItem}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GoalItem item={item} />
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


})