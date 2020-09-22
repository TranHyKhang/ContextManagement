import React from 'react'
import { View, Text } from 'react-native'
import MainNavigation from './src/navigations/MainNavigation'
import {Provider} from './src/contexts/TodoContext';

const App = () => {
  return (
    <MainNavigation/>
  )
}

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}
