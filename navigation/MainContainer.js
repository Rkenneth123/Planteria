import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';
import LoadingScreen from './screens/LoadingScreen';

//Screen names

const homeName = 'Dashboard';
const detailsName = 'Scanner';
const settingsName = 'Settings';
const splashName = 'Tutorial';
const loadingName = 'List';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            
<Tab.Navigator initialRouteName={homeName} 
   screenOptions={({route}) => ({
    tabBarIcon:({focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if(rn === homeName){
            iconName = focused ? 'home' : 'home-outline'; 
        }else if (rn===detailsName){
            iconName = focused ? 'scan' : 'scan-outline';
        }else if (rn===settingsName){
            iconName = focused ? 'settings' : 'settings-outline';

        }else if (rn===splashName){
            iconName = focused ? 'apps' : 'apps-outline';

        }
        else if (rn===loadingName){
            iconName = focused ? 'list' : 'list-outline';

        }
        return <Ionicons name={iconName} size={size} color={color}/>
    },
})}
tabBarOptions={{
   activeTintColor: 'green',
   inactiveTintColor: 'grey',
   labelStyle: { paddingBottom: 10, fontSize:10},
    style: {padding: 10, height: 70}
}}


>

<Tab.Screen name={homeName} component={HomeScreen}/>
<Tab.Screen name={loadingName} component={LoadingScreen}/>
<Tab.Screen name={detailsName} component={DetailsScreen}/>
<Tab.Screen name={settingsName} component={SettingsScreen}/>
<Tab.Screen name={splashName} component={SplashScreen}/>

</Tab.Navigator>
        </NavigationContainer>

      
    );
       
    
}