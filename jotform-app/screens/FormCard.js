import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import FormModal from "./FormModal";
import Submissions from "./Submissions";


const FormCard = (props) => {

    const [isFav, setIsFav] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [seeSub, setSeeSub] = useState(false);

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => setModalVisible(!modalVisible)}>
            <FormModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                tsubNum={props.tsubNum}
                title={props.title}
                setSeeSub={setSeeSub}
            />
            <Submissions 
              modalVisible={seeSub}
              setModalVisible={setSeeSub}
              title={props.title}
              appKey={props.appKey}
              id={props.id}
            />
            <View style={styles.first}>
                <TouchableOpacity onPress={() => setIsFav(!isFav)}>
                    {
                        !isFav ? <Feather
                            name='star'
                            size={25}
                            color="white"
                            style={{ padding: 10 }} />
                            :
                            <FontAwesome
                                name='star'
                                size={25}
                                color="gold"
                                style={{ padding: 10 }}
                            />
                    }
                </TouchableOpacity>
                <Text style={styles.subNum}> {props.tsubNum} </Text>
            </View>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.bottom}>
                {props.csubNum === "0" ? "No" : props.csubNum} Submission
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#4d5ba4",
        borderRadius: 5,
        height: 165,
        width: "45%",
        marginLeft: "3.5%",
    },
    first: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    subNum: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor: "#02b772",
        color: "white",
        position: "absolute",
        right: 15,
        top: 15,
        fontSize: 12,
        paddingHorizontal: 10,
    },
    bottom: {
        color: "white",
        fontSize: 12,
        position: "absolute",
        left: 10,
        top: 137
    },
    title: {
        color: "white",
        position: "absolute",
        left: 10,
        top: 50,
        right: 12
    },

});


export default FormCard;