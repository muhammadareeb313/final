import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase';
import { query, db, addDoc, collection, onSnapshot, doc, getDocs } from '../firebase';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState, useEffect } from "react";
import { Button, Image,  Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Request = ({ navigation }) => {
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [cnic, setCnic] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [familyMemeber, setFamilyMemeber] = useState('')
  const [income, setIncome] = useState('')

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Daily', value: 'Daily' }
  ]);
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');



  const pickImage = async () => {
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result) {
      setImage(result);
      console.log(image);
    }
  };
  console.log("ok",image)


  const pickImage2 = async () => {
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result) {
      setImage2(result);
      console.log(image2);
    }
  };
  console.log("ok",image2)



  const handleRequest = async () => {
    console.log("ok");
    try {
      const docRef = await addDoc(collection(db, "users",), {
        id: auth.currentUser.uid,
        name:name,
        fatherName:fatherName,
        cnic: cnic,
        dateOfBirth: dateOfBirth,
        familyMemeber: familyMemeber,
        income: income,
        value: value,
        url:image,

        

      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigat("Svg")
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }



  // const get = async () => {
  //   const q = query(collection(db, "users"),);
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         console.log("New city: ", change.doc.data());
  //       }
  //       if (change.type === "modified") {
  //         console.log("Modified city: ", change.doc.data());
  //       }
  //       if (change.type === "removed") {
  //         console.log("Removed city: ", change.doc.data());
  //       }
  //     });
  //   });
  // }


  





  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
           required
          placeholder="FatherName"
          value={fatherName}
          onChangeText={text => setFatherName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Cnic"
          value={cnic}
          onChangeText={text => setCnic(text)}
          style={styles.input}
        />
        <TextInput
        type="date"
          placeholder="DateofBirth"
          value={dateOfBirth}
          onChangeText={text => setDateOfBirth(text)}
          style={styles.input}
        />
        <TextInput
        type="number"
          placeholder="FamilyMemeber"
          value={familyMemeber}
          onChangeText={text => setFamilyMemeber(text)}
          style={styles.input}
        />

        <TextInput
        type="number"

          placeholder="Income"
          value={income}
          onChangeText={text => setIncome(text)}
          style={styles.input}
        />
        <DropDownPicker style={{marginBottom:15,marginTop:4 , backgroundColor: "#90EE90", borderRadius: 10, padding: 5 ,}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View style={{ marginTop: 25 }}>
      <Button title="Pick an image" onPress={pickImage} />
      </View>
      <View style={{ marginTop: 5 }}>
      <Button  title="Pick NIC image" onPress={pickImage2} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleRequest}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={get}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity> */}
      </View>

    </KeyboardAvoidingView>
  )
}

export default Request

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderWidth: 5,
    borderColor: "blue",
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'blue'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})