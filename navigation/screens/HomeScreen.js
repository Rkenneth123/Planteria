
  

  import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
Text,


  
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HomeScreen({ navigation }){
  const handlePress = () => {
    navigation.navigate("Splash");
  };
  return (
    <View style={styles.container}>
{/*    
      <TextInput style={styles.textbox}>Welcome, Planteria</TextInput>  */}
        <View style={styles.contentContainer}>
    
       </View>

    
             <View style={styles.label}>
             <Text style={styles.textBox}>
Plant Guide:                              See all
        </Text>
             <View style={styles.search}>
             <TouchableOpacity onPress={handlePress}>
           <Image
          source={require("../../assets/Search.png")}
          style={styles.searchImage}
        />
          </TouchableOpacity>
          <TextInput style={styles.label1}></TextInput>  

            </View>
          
      <ScrollView style={styles.scrollView}>
      <Text style={styles.textBox1}>Plant Guide</Text>
      <Text style={styles.textBox2}>Plant Guide</Text>
         <Image source={require("../../assets/Plant1.jpg")} style={styles.text}>

         </Image>
     
         <Image source={require("../../assets/Plant2.jpg")} style={styles.text1}>

</Image>

<Text style={styles.textBox1}>Plant Guide</Text>
      <Text style={styles.textBox2}>Plant Guide</Text>
         <Image source={require("../../assets/Plant4.jpg")} style={styles.text}>
          
          </Image>
     
          <Image source={require("../../assets/Plant5.jpg")} style={styles.text1}>

</Image>

<Text style={styles.textBox1}>Plant Guide</Text>
      <Text style={styles.textBox2}>Plant Guide</Text>
          <Image source={require("../../assets/Plant6.jpg")} style={styles.text}>
          
          </Image>
   
          <Image source={require("../../assets/Plant7.jpg")} style={styles.text1}>

</Image>

<Text style={styles.textBox1}>Plant Guide</Text>
      <Text style={styles.textBox2}>Plant Guide</Text>
          <Image source={require("../../assets/Plant10.jpg")} style={styles.text}>
          </Image>
          <Image source={require("../../assets/Plant9.jpg")} style={styles.text1}>
</Image>




       
       
      </ScrollView>
  
     
             </View>
    
      </View>

  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
   marginTop: -500,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 50,
    marginTop: 90,
    width: "100%",
    height: "150%",
    borderRadius:10,

  },
  textBox:{
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
    width: '105%',
    height: '10%',
    padding: 10,
    margin: -15,
    borderColor: 'black',
    borderRadius:10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox1:{
    fontSize: 20,
    color: 'black',
    width: '100%',
    height: '-30%',
    padding: 20,
    margin: -40,
    marginLeft:20,
    marginTop:-10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox2:{
    fontSize: 20,
    color: 'black',
    width: '100%',
    height: '-30%',
    padding: 20,
    margin: -20,
    marginLeft:170,
    marginTop:-28,
 
    justifyContent: "center",
    flex: 1,
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    padding: 70,
    margin:20,
    fontSize: 20,
    color: 'green',
    borderColor: 'black',
    borderRadius:10,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  
  
  text1: {
    fontSize: 42,
    flex: -1,
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
    marginLeft:170,
    marginTop:-165,
    marginVertical: 20,
    margin:20,
    fontSize: 20,
    color: 'green',
    borderColor: 'black',
    borderRadius:10,
    backgroundColor: 'white',
    borderWidth: 2,
  },


  // container: {
  //   flex: 1,
  //   marginTop: 30,
  // },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // image: {
   
  //   flex: 1,
  //   width: "100%",
  //   height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop:10,
  //   marginLeft: -1000,
  

 
  // },
  
  label:{
    flex: 1,
    width: "98%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:90,
    marginLeft: 3,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 30,
    color: 'green',
    backgroundColor: 'lightgrey',

  },
  searchImage:{
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:1,
    marginLeft: -150,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 100,
    color: 'green',
    

  },
  search:{
    flex: 1,
    width: "95%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-90,
    marginLeft: 10,
    padding: 6,
    margin:10,
    fontSize: 20,
    color: 'green',
    borderColor: 'black',
    borderRadius:10,
    backgroundColor: 'white',
    borderWidth: 2,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },

  box:{
    flex: 1,
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-100,
    marginLeft: 10,
    padding: 70,
    margin:10,
    fontSize: 20,
    color: 'green',
    borderColor: 'black',
    borderRadius:10,
    backgroundColor: 'white',
    borderWidth: 2,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  label1:{
    flex: -1,
    width: "80%",
    height: "-100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-30,
    marginLeft: 10,
    

    fontSize: 15,
    color: 'green',
    borderColor: 'black',
    borderRadius:10,
   

    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
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

