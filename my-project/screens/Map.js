import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Dimensions,button } from 'react-native';
export default function Map({navigation}) {

    const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
const form =()=>{
  navigation.navigate("Request")
}

  return (

    
    <View style={styles.container} >
      <MapView style={styles.map}
    
    
      region= {{
        latitude: 24.918027100000035,
        longitude: 67.09709159999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
     
     >
     <Marker onPress={form} coordinate={{
       latitude:location? location.latitude:24.9200172,
       longitude:location? location.longitude: 67.0612345,
     


     }
     }/>
      <Marker onPress={form} coordinate={{
       latitude:location? location.latitude:24.918027100000035,
       longitude:location? location.longitude: 67.0337457,
     


     }
     }/>
      <Marker  onPress={form} coordinate={{
       latitude:location? location.latitude: 24.8949528,
       longitude:location? location.longitude: 67.1767206,
     


     }
     }/>
     </MapView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});