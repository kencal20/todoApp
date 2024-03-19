import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import GoalItem from '../components/goalItem';
import GoalInput from '../components/goalInput';

export default function HomeScreen() {

    const [goalItem, setGoalItem] = useState([]);

    const handleAddGoal = (goalInput) => {
        setGoalItem(prev => [...prev, { id: Date.now().toString(), goal: goalInput }]);
    };


    const handleDeleteGoal = (id) => {
        setGoalItem(prev => prev.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <GoalInput handleAddOnGoal={handleAddGoal} />
            <FlatList
                data={goalItem}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GoalItem item={item} onDelete={() => handleDeleteGoal(item.id)} />
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