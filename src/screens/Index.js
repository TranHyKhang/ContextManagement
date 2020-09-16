import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Todo App</Text>
            </View>
            <View style={styles.body}>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Icon style={{color: 'white',left:2}} name="add" size={70}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,250, 255)',
        flex: 1,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold'
    },
    body: {
        flex: 8,
    },
    footer: {
        flex: 1,
        backgroundColor: 'rgb(0,250, 255)',
        borderRadius: 3000, 
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 30,
        marginBottom: 30,
        borderWidth: 0.2,
        borderColor: "black",
    }
})