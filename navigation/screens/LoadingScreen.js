
  

  import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  
} from "react-native";

export default function LoadingScreen({ }){
  const handlePress = () => {
    navigation.navigate("Loading");
  };
  return (
    <View style={styles.container}>
   
     
        {/* <TextInput style={styles.textbox}>Welcome, Planteria</TextInput> */}
        <View style={styles.contentContainer}>
       
       </View>
        <ImageBackground
          source={require("../../assets/background.jpeg")}
          style={styles.image}
        >
             <View style={styles.label}></View>
          <TouchableOpacity onPress={handlePress}>
            {/* <Image
              source={require("../../assets/play-button.png")}
              style={styleas.image2}
            /> */}
          </TouchableOpacity>
        </ImageBackground>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
   
    flex: 1,
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-700,
    marginLeft: -0,
  

 
  },
  textbox:{
    flex: 1,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-200,
    marginLeft: 10,
    borderRadius: 20,
    borderColor: 'red',
    padding: 0,
    margin: 10,
    fontSize: 30,
    color: 'green',
 

  },
  label:{
    flex: 1,
    width: "98%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:100,
    marginLeft: 10,
    borderRadius: 20,
    borderColor: 'red',
    padding: 0,
    margin: 10,
    fontSize: 30,
    color: 'green',
    backgroundColor: 'lightgrey',

  },
  image2: {
    position: "absolute",
    flex: 1,
    width: 150,
    height: 90,
    marginLeft: -80,
    alignItems: "center",
    justifyContent: "center",
  },
});

