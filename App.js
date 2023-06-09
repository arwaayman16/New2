import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import HomeScreen from './component/HomeScreen';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';


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

 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  // const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name= "Home" component={HomeScreen} />
<Stack.Screen name= "SignIn" component={SignIn} />
<Stack.Screen name= "SignUp" component={SignUp} />

</Stack.Navigator>
</NavigationContainer>
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
