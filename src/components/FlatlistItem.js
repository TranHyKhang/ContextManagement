import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { round } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Entypo'
import {Context as TodoContext} from '../contexts/TodoContext'

export default function FlatlistItem({item, navigation}) {
    const {removeTodo} = useContext(TodoContext);
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.iconContainer}>
                    <Icon name='pencil' 
                        size={30}
                        onPress={() => navigation.navigate('Edit', {item: item})}
                    />
                    <Icon 
                        name='trash' 
                        size={30}
                        onPress={() => removeTodo(item.id)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    item: {
        flexDirection: "row",
        width: '90%',
        backgroundColor: 'rgb(0,255,255)',
        padding: 15,
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row'
    }
})
