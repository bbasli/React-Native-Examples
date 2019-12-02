import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(initialState);
  let myMap
  /*
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords;
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude
      })
    },
      error => alert(error.message),
      { timeout: 20000, maximumAge: 1000 }
    )
  },
    []
  ); */

  return (
    <MapView
      style={styles.map}
      ref={ref => myMap = ref}
      showsUserLocation
      initialRegion={{
        latitude: 39.8619131,
        longitude: 32.7333758,
        latitudeDelta: 0.0094,
        longitudeDelta: 0.008995
      }}
    >
      <Marker
        coordinate={{
          latitude: 39.862771,
          longitude: 32.735828
        }}
        title={"Kahveci"}
        description={"Yakındaki kahveci"}
        onPress={() => {
          myMap.fitToCoordinates([{
            latitude: 39.862678,
            longitude: 32.735831
          }], {
            animated: true
          })
        }}
      />
      <Marker
        coordinate={{
          latitude: 39.863717,
          longitude: 32.737419
        }}
        title={"Beytepe İlkokulu"}
        description={"Çocuk okulu"}
        onPress={() => {
          myMap.fitToCoordinates([{
            latitude: 39.863717,
            longitude: 32.737419
          }], {
            animated: true
          })
        }}
      />
      <Marker
        coordinate={{
          latitude: 39.8598144,
          longitude: 32.7294976
        }}
        title={"Jotform"}
        description={"Bizim şirket"}
        onPress={() => {
          myMap.fitToCoordinates([{
            latitude: 39.85981,
            longitude: 32.72950
          }], {
            animated: true
          })
        }}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default App;