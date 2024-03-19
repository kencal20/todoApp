import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalItem from '../components/goalItem';
import GoalInput from '../components/goalInput';

export default function HomeScreen() { 
    const [goalItem, setGoalItem] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleAddGoal = (goalInput) => {
        setGoalItem(prev => [...prev, { id: Date.now().toString(), goal: goalInput }]);
    };

    const handleDeleteGoal = (id) => {
        setGoalItem(prev => prev.filter(item => item.id !== id));
    };



    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <View style={styles.container}>
            <Button title="Add Goal" onPress={toggleModal} />
            <GoalInput
                handleAddOnGoal={handleAddGoal}
                toggleModal={toggleModal}
                modalIsOpen={modalIsOpen}
            />
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