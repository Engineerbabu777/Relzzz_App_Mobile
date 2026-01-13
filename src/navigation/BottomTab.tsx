
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/HomeScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import { FC } from 'react';


const Tab = createBottomTabNavigator();


const BottomTab: FC = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Post" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}


export default BottomTab;