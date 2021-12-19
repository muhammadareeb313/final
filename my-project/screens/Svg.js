
// import * as React from 'react';
// import QRCode from 'react-native-qrcode-svg';
// import { query, db,deleteDoc, addDoc, collection, onSnapshot, doc, where } from '../firebase';
// import { useEffect, useState } from "react"
// import { SafeAreaView,Text } from 'react-native-safe-area-context';
// export default function Svg() {

// const [acceptOrders, setAcceptOrders] = useState([]);
//     useEffect(() => {
//       const q = query(collection(db, "accept"),);
//       onSnapshot(q, (querySnapshot) => {
//         const accept = [];
//         querySnapshot.forEach((doc) => {
//           let id = doc.id
//           let data =doc.data()
//           accept.push({
//             id:id,
//             name:data.name,
//             fatherName:data.fatherName,
//             cnic:data.cnic,
//             dateOfBirth:data.dateOfBirth,
//             familyMemeber:data.familyMemeber,
//             income:data.income,
//             value:data.value,
//             url:data.image,
//             urlNic:data.image2

//           });
//         });
//         setAcceptOrders(accept);
//       });
//     }, []) 
   
    
    
    
  import { query, db,deleteDoc, addDoc, collection, onSnapshot, doc, where } from '../firebase';
  
  import { useEffect, useState } from "react"
  import React from 'react'
  import { StyleSheet, Text, View } from 'react-native'
  import QRCode from 'react-native-qrcode-svg';
import {auth,signInWithEmailAndPassword} from '../firebase';
  
  export default function Svg() {
  const [acceptOrders, setAcceptOrders] = useState([]);
 
  
    return (
      <>
         <QRCode
            value="auth.currentUser"
          />


          
    </>
    )
  }
  
  const styles = StyleSheet.create({})

    
    
    
    
    
    
    
    // return (
        
         
{/* 
{acceptOrders.map((eachTodo, i) => {

            return (
      
    <View key={i} style={{display:"flex",flexDirection:'row',flexWrap:'wrap'}}>
        <Text> id: {eachTodo.id} </Text>
        <Text>name: {eachTodo.name}</Text>
        <Text> fatherName:{eachTodo.fatherName}</Text>
        <Text> CNiC: {eachTodo.cnic}</Text>
        <Text> DateofBirth: {eachTodo.dateOfBirth}</Text>
        <Text>  income: {eachTodo.income}</Text>
        <Text> category: {eachTodo.value}</Text>
        <Text>familyMemeber:{eachTodo.familyMemeber}</Text>
    
    </SafeAreaView>
        )
      })}
          

//  */}
        
//         );
//       };