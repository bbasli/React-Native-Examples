import React from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";


const sortOptionModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}>
            <View style={styles.modalContainer}>
                <View>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modal_title}> Sorted By </Text>
                        <TouchableOpacity style={{ position: "absolute", right: 0 }} onPress={() => { props.setModalVisible(!props.modalVisible); }}>
                            <Feather
                                name='chevron-down'
                                size={25}
                                color="black"
                                style={{ padding: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 7 }}>
                        <TouchableOpacity style={styles.modal_options}>
                            <FontAwesome
                                name='sort-alpha-asc'
                                size={22}
                                color="#67ba97"
                                style={{ marginRight: 10 }}
                            />
                            <Text style={styles.modal_option_text}> A to Z </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <FontAwesome
                                name='sort-alpha-desc'
                                size={22}
                                color="#3f76fe"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> Z to A </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Ionicons
                                name='md-calendar'
                                size={22}
                                color="#36dac0"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> Date Created </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Feather
                                name='edit'
                                size={22}
                                color="orange"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> Last Modified </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Feather
                                name='clock'
                                size={22}
                                color="#f6dd5a"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> Last Submission </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Feather
                                name='file-text'
                                size={22}
                                color="#a49fef"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> Submissions Count </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Feather
                                name='mail'
                                size={22}
                                color="#fd6898"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> Unread </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        height: "80%",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderRadius: 12,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 5,
        paddingBottom: 15
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
        paddingBottom: 65
    },
    modal_submission: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor: "#02b772",
        color: "white",
        paddingHorizontal: 10,
        position: "absolute",
        right: 20
    },
    modal_options: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40
    },
    modal_option_text: {
        fontSize: 16,
        position: "absolute",
        left: 35
    },
    modal_title: {
        position: "absolute",
        top: 20,
        left: 5,
        right: 25,
        fontSize: 16,
        fontWeight: "500"
    }
});

export default sortOptionModal;