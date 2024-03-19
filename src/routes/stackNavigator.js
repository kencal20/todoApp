import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../pages/homeScreen'
import ItemDetailsScreen from '../pages/itemDetailsScreen'

export default function StackNavigator() {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='itemDetails' component={ItemDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}