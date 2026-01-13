


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { mergedStack } from './ScreenCollection';

const Stack = createNativeStackNavigator()
const MainNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={()=>({
           headerShown:false 
        })}
        >
            {
                mergedStack.map((screen) => {
                    const { name, component } = screen;
                    return (
                        <Stack.Screen key={name} name={name} component={component} />
                    )
                })
            }

        </Stack.Navigator>
    )
}

export default MainNavigation
