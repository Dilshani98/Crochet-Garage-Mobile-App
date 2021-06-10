import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  
} from "react-native";
import IconsMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconPassword from 'react-native-vector-icons/AntDesign'
import {Formik} from 'formik'
import { Item } from "native-base";

export default function Login() {
  return (
    <ImageBackground
      source={require("../Images/login.jpg")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      
        <View style={styles.LoginContainer}>
          
          <Formik
     initialValues={{ email: '' ,password:''}}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{marginTop:"70%"}}>
          <Item style={styles.TextInput}>
              <IconsMaterialCommunityIcons name='email-multiple-outline' size={20}/>
          <TextInput
         style={{marginLeft:6}}
         placeholder="Email Address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
          </Item>
          <Item style={styles.TextInput}>
          <IconPassword name='unlock' size={20}/>
         <TextInput
         style={{marginLeft:6}}
         placeholder="Password"
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
           secureTextEntry={true}
         />
       </Item>
         <Button style={styles.Button} onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
        </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    padding: 10,
    marginTop: 40,
  },
  LoginContainer: {
    
    padding:10,
    width:' 80%',
    height: '80%',
    opacity: 0.7,
    shadowColor:'black'
  },
  TextInput:{
      backgroundColor:'white',
      
      
      fontSize:13,
      textAlign:"left",
      borderRadius:50,
      flexDirection: 'row',
      alignItems:"center",
     padding:10,
      marginBottom:10,
      opacity:10
  },
  Button:{
      color:'gray',
      borderRadius:10
  },
 
});
