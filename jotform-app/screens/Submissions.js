import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MapView, { Marker } from "react-native-maps";

import axios from "axios";

const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const Submissions = (props) => {

    const [submissions, setSubmissions] = useState({});
    //const [coordinates, setCoordinates] = useState([]);
    //const [locations, setLocations] = useState([]);

    const getSubmissions = () => {
        axios({
            method: "get",
            url: "https://api.jotform.com/form/" + props.id + "/submissions?apiKey=" + props.appKey
        })
            .then(function success(response) {
                setSubmissions(response.data.content);
                //console.log("submissions: ", response.data.content);
                //console.log(response.data.content[0]);
            })
            .catch(function fail() {
                console.log("HATA");
            })
    };

    const analyzeSubmissions = (submissions) => {
        for (var i = 0; i < submissions.length; i++) {
            subs = submissions[i].answers;
            subs = Object.values(subs);
            //console.log();
            for (var j = 0; j < subs.length; j++) {

                if (subs[j].name === "locationName")
                    if (subs[j].answer !== undefined)
                        locations.push(subs[j].answer);

                if (subs[j].type === "control_widget") {
                    if (subs[j].cfname === "Geolocation")
                        if (subs[j].answer !== undefined)
                            coordinates.push(subs[j].answer.trim());
                }
            }

            if (coordinates.length > locations.length) {
                locations.push("Undefined Locations")
            }
            else if (coordinates.length < locations.length)
                coordinates.push("Undefined Coordinate");

        }

    }

    const createMap = (coordinates, locations) => {
        let map = [];
        for (let i = 0; i < coordinates.length; i++) {
            let latitude = coordinates[i].substring(0, coordinates[i].indexOf(","));
            let longitude = coordinates[i].substring(coordinates[i].indexOf(",") + 1);
            map.push(
                <Marker
                    key={i}
                    coordinate={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude)
                    }}
                    title={locations[i]}
                    description={"Undefined Description"}
                    onPress={() => {
                        myMap.fitToCoordinates([{
                            latitude: parseFloat(latitude),
                            longitude: parseFloat(longitude)
                        }], {
                            animated: true
                        })
                    }}
                />
            )
        }
        return map;
    }

    let myMap;
    let coordinates = [];
    let locations = [];

    if (props.modalVisible && submissions.length === undefined)
        getSubmissions();

    if (submissions.length > 0 && props.modalVisible) {
        analyzeSubmissions(submissions);
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.modalVisible}>
                <View style={{ height: "100%" }}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.goBack} onPress={() => props.setModalVisible(false)}>
                            <Feather
                                name='chevron-left'
                                size={26}
                                color="white"
                            />
                        </TouchableOpacity>
                        <Text style={styles.header_title}> {props.title}</Text>
                    </View>
                    <MapView
                        style={styles.map}
                        ref={ref => myMap = ref}
                        initialRegion={{
                            latitude: 39.8619131,
                            longitude: 32.7333758,
                            latitudeDelta: 0.0194,
                            longitudeDelta: 0.009995
                        }}
                    >
                        {createMap(coordinates, locations)}
                    </MapView>
                </View>
            </Modal >
        );
    }
    else
        return (
            <View>

            </View>
        );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2c3144",
        height: "11%",
        justifyContent: "center",
        paddingTop: 20
    },
    header_title: {
        color: "white",
        fontSize: 20,
        fontWeight: "500"
    },
    goBack: {
        position: "absolute",
        left: 10,
        bottom: 18
    },
    map: {
        height: "100%",
        marginTop: 5
    },
});

export default Submissions;