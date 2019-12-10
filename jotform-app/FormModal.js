import React from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";


const FormModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}>
            <View style={styles.modalContainer}>
                <View>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modal_title}>{props.title}</Text>
                        <TouchableOpacity style={{ position: "absolute", right: 0 }} onPress={() => { props.setModalVisible(!props.modalVisible); }}>
                            <Feather
                                name='chevron-down'
                                size={25}
                                color="black"
                                style={{ padding: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                    <View style={{ marginLeft: 7 }}>
                        <TouchableOpacity style={styles.modal_options} onPress={() => {props.setSeeSub(true); props.setModalVisible(false); }}>
                            <Entypo
                                name='text-document'
                                size={22}
                                color="#67ba97"
                                style={{ marginRight: 10 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "View Submissions" : "Form Yanıtlarını Gör"} </Text>
                            <Text style={styles.modal_submission}> {props.tsubNum} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <FontAwesome
                                name='file'
                                size={22}
                                color="#3f76fe"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Fill Out Form" : "Formu Doldur"} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <FontAwesome
                                name='edit'
                                size={22}
                                color="orange"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Edit Form" : "Formu Düzenle"} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Ionicons
                                name='ios-people'
                                size={22}
                                color="#36dac0"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Assign Form" : "Formu Ata"} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Feather
                                name='monitor'
                                size={22}
                                color="#f6dd5a"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Open in Kiosk Mode" : "Kiosk Modunda Aç"} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <FontAwesome
                                name='share'
                                size={22}
                                color="#a49fef"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Share" : "Formu Paylaş"} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <Feather
                                name='eye-off'
                                size={22}
                                color="#fd6898"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Disable Form" : "Formu Devre Dışı Bırak"} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modal_options}>
                            <FontAwesome
                                name='trash'
                                size={22}
                                color="#d92857"
                                style={{ marginRight: 15 }}
                            />
                            <Text style={styles.modal_option_text}> {props.language ? "Delete Form" : "Formu Sil"} </Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        height: "86%",
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
        marginTop: 30
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

export default FormModal;