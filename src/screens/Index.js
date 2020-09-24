import React, {useContext, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import FlatlistItem from '../components/FlatlistItem';
import {Context as TodoContext} from '../contexts/TodoContext'
import jsonServer from '../api/jsonServer';
import axios from 'axios'

export default function Index({navigation}) {
    const {state, getList} = useContext(TodoContext);
    // console.log(state)

    useEffect(() => {
        getList();
    },[])

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.body}>
                {
                    state.map(item => <FlatlistItem item={item} navigation={navigation}/>)
                }
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Icon style={{color: 'black',left:2}} name='add' size={70}/>
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
        borderWidth: 1.5,
        borderColor: "rgba(0,0,0,0.1)",
    }
})