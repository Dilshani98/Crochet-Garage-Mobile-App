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
import IconsEmail from "react-native-vector-icons/MaterialCommunityIcons";
import IconPassword from "react-native-vector-icons/AntDesign";
import IconUser from 'react-native-vector-icons/Feather'
import { Formik } from "formik";
import { Item } from "native-base";
import { Directions } from "react-native-gesture-handler";

export default function Login() {
  return (
    <ImageBackground
      source={require("../Images/login.jpg")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.LoginContainer}>
        <Formik
          initialValues={{ FirstName: "", LastName: "", email:"",password:"",ConfirmPassword:""}}
          onSubmit={(values) => alert(values.password)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ margin: "0.5%" }}>
              <Item style={styles.TextInput}>
                <IconUser
                  name="user"
                  size={20}
                />
                <TextInput
                  style={{ marginLeft: 6 }}
                  placeholder="First Name"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("FirstName")}
                  value={values.FirstName}
                />
              </Item>
              <Item style={styles.TextInput}>
              <IconUser
                  name="user"
                  size={20}
                />
                <TextInput
                  style={{ marginLeft: 6 }}
                  placeholder="Last Name"
                  onChangeText={handleChange("LastName")}
                  onBlur={handleBlur("LastName")}
                  value={values.LastName}
                  
                />
              </Item>
              <Item style={styles.TextInput}>
                <IconsEmail name="email-multiple-outline" size={20} />
                <TextInput
                  style={{ marginLeft: 6 }}
                  placeholder="Email Address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </Item>
              <Item style={styles.TextInput}>
                <IconPassword name="unlock" size={20} />
                <TextInput
                  style={{ marginLeft: 6 }}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
              </Item>
              <Item style={styles.TextInput}>
                <IconPassword name="unlock" size={20} />
                <TextInput
                  style={{ marginLeft: 6 }}
                  placeholder="Confirm Password"
                  onChangeText={handleChange("ConfirmPassword")}
                  onBlur={handleBlur("ConfirmPassword")}
                  value={values.ConfirmPassword}
                  secureTextEntry={true}
                />
              </Item>

              <TouchableOpacity
                style={{
                  marginLeft: 8,
                  padding: 8,
                  backgroundColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
                onPress={handleSubmit}
              >
                <Text style={{ color: "#fafafa" }}>Account Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 8,
                  padding: 8,
                  backgroundColor: "gray",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                  flexDirection:"row"
                }}
                onPress={handleSubmit}
              >
                <IconPassword name="google" size={30} />
                <Text style={{ color: "white",marginLeft:6}}>Sign in with Google</Text>
              </TouchableOpacity>
              
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 25,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    padding: 10,
    marginTop: 40,
  },
  LoginContainer: {
    padding: 10,
    width: " 80%",
    height: "80%",
    opacity: 0.7,
    shadowColor: "black",
    marginTop:50
  },
  TextInput: {
    backgroundColor: "white",

    fontSize: 13,
    textAlign: "left",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    opacity: 10,
  },
  Button: {
    color: "blue",
    borderRadius: 10,
  },
  BottomView:{
      justifyContent:"center",
      flexDirection:"row",
      alignItems:"center",
      padding:15
  },
  BottomText:{
    justifyContent:"center",
    color:'black',
    alignContent:"center",
    padding:1,
    fontSize:11,
    fontWeight:"bold"
  }
});
