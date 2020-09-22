import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Input from '../components/Input'
import Header from '../components/Header'
import {Context as TodoContext} from '../contexts/TodoContext';

export default function EditList({navigation, route}) {
    const {item} = route.params
    const [title, setTitle] = useState('');
    const {editTodo} = useContext(TodoContext);
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.body}>
                <Input 
                    label='Enter new title'
                    title={title}
                    setTitle={setTitle}
                    _handleAction={() => editTodo(item.id ,title, () => navigation.goBack())}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        flex: 8,
        justifyContent:'center',
    },
})
