
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Dogs from '../pages/Dogs'
import Detail from '../pages/Detail'

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
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
                    options={
                        {
                            title: 'Pets',
                            headerStyle: {
                                backgroundColor: '#80cd76'
                            },
                            headerTintColor: '#ffffff'
                        }
                    } />
                <Stack.Screen
                    name="Detalhes"
                    component={Detail}
                    options={
                        {
                            title: 'Details', 
                            headerStyle: {
                                backgroundColor: '#80cd76'
                            },
                            headerTintColor: '#ffffff'
                        }
                    } />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes