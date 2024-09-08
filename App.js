import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from "./src/pages/Home"
import Dogs from "./src/pages/Dogs"
import Detail from "./src/pages/Detail"

const Stack = createNativeStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name="Lista"
        component={Dogs}
        options={{
          title: 'Pets'
        }}
      />

      <Stack.Screen 
        name="Detalhes"
        component={Detail}
        options={{
          title: 'Details'
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App