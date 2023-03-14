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
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("./assets/loginR.png")}></Image>  
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email.  "
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
     
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTER</Text> 
      </TouchableOpacity> 
     
      <Button onPress={onPress}
        title="Press me"
        color="#849DF5"
        //  paddingVertical= "12"
        //  paddingHorizontal= "32"
        //  borderRadius= "4"
        //  elevation= "3"
      />
      <Text style={styles.Text} >Count: {count}</Text>
      </View> 
  );
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
  },
});
