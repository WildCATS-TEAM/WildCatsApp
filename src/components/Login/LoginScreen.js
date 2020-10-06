import React from 'react';
import Form from './Form';
import axios from './axios';
import { StyleSheet, Text, View, AsyncStorageStatic} from "react-native";



const Login = () => {
  const loginUser = () => {
    axios({
      
    })
  }

    return (
           <View style={styles.container}>
               <Text>Logo</Text>
               <Form></Form>
               <Text>Don't have an account yet? signup</Text>
           </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#aaa",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    content: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default Login;