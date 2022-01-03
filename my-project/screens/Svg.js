import { query, db, deleteDoc, addDoc, collection, onSnapshot, doc, where } from '../firebase';
import { useEffect, useState } from "react"
import React from 'react'
import { StyleSheet, Text, View, TextInput,ScrollView } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { auth, signInWithEmailAndPassword } from '../firebase';

export default function Svg() {
  const [acceptOrders, setAcceptOrders] = useState([]);
  const [email, setEmail] = useState('areeb')

  useEffect(() => {
    const q = query(collection(db, "accept"),);
    onSnapshot(q, (querySnapshot) => {
      const accept = [];
      querySnapshot.forEach((doc) => {
        let id = doc.id
        let data = doc.data()
        accept.push({
          id: id,
          name: data.name,
          fatherName: data.fatherName,
          cnic: data.cnic,
          dateOfBirth: data.dateOfBirth,
          familyMemeber: data.familyMemeber,
          income: data.income,
          value: data.value,
        });
      });
      setAcceptOrders(accept);
      console.log(acceptOrders);
    });
  }, [])












  return (
    <ScrollView>
      {
        acceptOrders.map((eachTodo, i) => {
          return (
            <View style={{justifyContent:"center",alignItems:"center",marginTop:10}} key={i}>
              <Text>id:{eachTodo.id} </Text>
              <Text>name:{eachTodo.name}</Text>
              <Text>fatherName:{eachTodo.fatherName}</Text>
              <Text>CNiC:{eachTodo.cnic}</Text>
              <Text>DateofBirth:{eachTodo.dateOfBirth}</Text>
              <Text>income:{eachTodo.income}</Text>
              <Text>category:{eachTodo.value}</Text>
              <Text>familyMemeber:{eachTodo.familyMemeber}</Text>
              <View style={{marginTop:5}}>
          <QRCode
            value={eachTodo.id}
          />
      </View>

              </View>
          )
        })
      }








</ScrollView>

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