import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 26 ,fontWeight: 'bold'}}>Splash Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  