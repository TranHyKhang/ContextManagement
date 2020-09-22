import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export default function Input({label, _handleAction, title, setTitle}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <TouchableOpacity style={styles.button} onPress={() => _handleAction()}>
                <Text style={styles.buttonTitle}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        fontSize: 32,
        fontWeight:'bold'
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        width: "90%",
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        width: "40%",
        padding: 15,
        backgroundColor: 'rgb(0,250, 255)',
        alignItems:'center',
        borderRadius: 20,
        marginTop: 70, 
        borderWidth: 1.5,
        borderColor: "rgba(0,0,0,0.1)",
    },
    buttonTitle: {
        fontSize: 24,
        color: 'black',
        fontWeight:'bold'
    }
})