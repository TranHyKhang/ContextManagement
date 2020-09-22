import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,250, 255)',
        flex: 1,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold'
    },
})
