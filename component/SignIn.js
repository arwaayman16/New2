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
  import auth  from '../firebase-config';
  import { signInWithEmailAndPassword } from "firebase/auth";
  export default function SignIn ({navigation}){
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [count, setCount] = useState(0);
    const hundelSignIn =()=>{
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("done sign")

    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

    }
return (

<View style={styles.container}>
<Image style={styles.image} source={require("../assets/SignIn.jpg")}></Image>  
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email.  "
          value={email}
          placeholderTextColor="#000"
          onChangeText={setEmail}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password "
          value={password}

          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText= {setPassword}
         
          
        /> 
      </View> 

    <View > 
    <TouchableOpacity style={styles.loginBtn}   onPress={hundelSignIn }>
      <Text style={styles.Text}>SignIn            </Text> 
    </TouchableOpacity> 
<TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}>
      <Text style={styles.Text}>Home             </Text> 
    </TouchableOpacity>
   
    {/* <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigat("LogIn")}>
      <Text style={styles.Text}>LOGIN</Text> 
    </TouchableOpacity>  */}
    
    <TouchableOpacity style={styles.loginBtn}   onPress={()=>navigation.navigate("SignUp")}>
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
      marginBottom: 10,
      width: "100%",
      height: 150,
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
      height: 40,
      flex: 1,
     // padding: 10,
     // marginLeft: 10,
      fontSize: 16,
      fontWeight: 'normal',
  
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
  