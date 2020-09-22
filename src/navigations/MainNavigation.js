import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Index from '../screens/Index'
import CreateList from '../screens/CreateList'
import EditList from '../screens/EditList'

const Stack = createStackNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator mode='modal' screenOptions={{headerShown: false}} initialRouteName="Index">
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen  name="Create" component={CreateList} />
                <Stack.Screen name="Edit" component={EditList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
