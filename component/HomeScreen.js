import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Pressable,
  } from "react-native";
  export default function HomeScreen ({navigation}){
return (

<View style={styles.container}>
<Image style={styles.image} source={require("../assets/home.png")}></Image>  


    <View > 

<TouchableOpacity  onPress={()=>navigation.navigate("SignIn")} style={styles.loginBtn}>
      <Text style={styles.Text}>SignIn            </Text> 
    </TouchableOpacity>
   
   
    
    <TouchableOpacity  onPress={()=>navigation.navigate("SignUp")} style={styles.loginBtn}>
      <Text style={styles.Text}>SignUp          </Text> 
    </TouchableOpacity> 
   
    
    </View> 
    </View>
)



  }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 55,
    width: "70%",
    height: 250,
  },
  inputView: {
    backgroundColor: "#AEDEFE",
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 15,

  },
  forgot_button: {
    color :"#083EF8",
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    
    width: "50%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#2344B7",
    flexDirection: 'row',
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Text:{
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 20,
    

  },
});
