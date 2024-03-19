import { View, Text } from 'react-native'
import React from 'react'

export default function ItemDetailsScreen({ route }) {
    console.log(route.params);
    const { item } = route.params
    return (
        <View>
            <Text>Title: {item.goal}</Text>
            <Text>Id:{item.id}</Text>
        </View>
    )
}