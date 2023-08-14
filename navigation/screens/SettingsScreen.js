import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingScreens({ navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => navigation.navigate('Splash')} style={{ backgroundColor: 'grey',fontSize: 26 ,fontWeight: 'bold'}}>Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  