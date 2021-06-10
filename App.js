import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';

export default function App() {
  return(
    <Home/>
  )
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     alignItems: "center",
//     justifyContent: "center",
//   },

//   listItems: {
//     marginTop: 50,
//     padding: 15,

//     borderRadius: 10,
//   },
//   item: {
//     flexDirection: "row",
//     backgroundColor: "gray",
//     borderRadius: 10,
//     marginBottom: 10,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   button: {
//     color: "gray",
//     opacity: 1,
//   },
// });



// const [text, setText] = useState("");
//   const [currentText, setCurrentText] = useState([]);

//   function Sumbit() {
//     setCurrentText((current) => [...currentText, text]);
//   }

//   function Delete() {
//     alert("delete");
//   }

//   return (
//     <View style={{ padding: 30 }}>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginTop: 20,
//         }}
//       >
//         <TextInput
//           placeholder="Enter task"
//           value={text}
//           onChangeText={(enteredText) => setText(enteredText)}
//           style={styles.input}
//         />

//         <TouchableOpacity
//           style={{
//             marginLeft: 8,
//             padding: 8,
//             backgroundColor: "gray",
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: 10,
//           }}
//           onPress={Sumbit}
//         >
//           <Text style={{ color: "#fafafa" }}>+</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//                     data={currentText}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={({item, index}) => {
//                         return (
//                             <View style={{paddingVertical: 8}}>
//                                 <Text style={{fontSize: 18}}>{item}</Text>
//                             </View>
//                         )
//                     }}
//                 />




//       <ScrollView style={styles.listItems}>
//         {currentText.map((item) => (
//           <View style={styles.item} key={item}>
//             <Text style={{ marginLeft: 10, color: "white" }}>
//               {item}
//             </Text>
//             <View>
//               <TouchableOpacity
//                 style={{
//                   marginLeft: 8,
//                   padding: 8,
//                   backgroundColor: "gray",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: 10,
//                 }}
//                 onPress={Delete}
//               >
//                 <Text style={{ color: "#fafafa" }}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>