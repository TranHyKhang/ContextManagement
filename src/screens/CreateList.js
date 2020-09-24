import React, {useContext, useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Input from '../components/Input'
import Header from '../components/Header'
import {Context as TodoContext} from '../contexts/TodoContext';

export default function CreateList({navigation}) {
    const {addTodo, getList} = useContext(TodoContext);
    const [title, setTitle] = useState('')
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.body}>
                <Input 
                    label='Enter new Todo'
                    _handleAction={() => addTodo(title, () => navigation.goBack())}
                    title={title}
                    setTitle={setTitle}
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
