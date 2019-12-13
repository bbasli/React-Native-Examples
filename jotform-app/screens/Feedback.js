import React from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import Textarea from 'react-native-textarea';
import AntDesign from "react-native-vector-icons/AntDesign";


const Feedback = (props) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            presentationStyle="overFullScreen"
        >
            <DismissKeyboard>
                <View style={[
                    styles.modalContainer,
                    { marginTop: props.keyboardVisible ? "10%" : "30%", },
                    { height: props.keyboardVisible ? "72%" : "50%" }
                ]}>
                    <View style={[
                        styles.feedbackContainer,
                        { marginTop: props.keyboardVisible ? "10%" : "23%" },
                    ]}>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: "24%" }}> 
                                {props.language ? "Give your feedback" : "Geri Bildirimizi Gönderin"}
                            </Text>
                            <TouchableOpacity style={styles.closeIcon} onPress={() => props.setModalVisible(false)}>
                                <AntDesign
                                    name='close'
                                    size={25}
                                    color="lightgrey"
                                    style={{ padding: 0 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={props.keyboardVisible ? {} : { marginVertical: "5%", fontSize: 12, lineHeight: 20 }}>
                            {props.keyboardVisible ? "" : 
                                (props.language ? 
                                    "Please let us know how to make the JotForm app better for you." 
                                    : 
                                    "JotForm uygulamasını sizin için nasıl daha iyi hale getirebiliriz?")
                            }
                        </Text>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            placeholder={props.language ? "Write your feedback here" : "Geri bildiriminizi buraya yazın"}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                        <View style={styles.sendButton1}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                                    {props.language ? "Send" : "Gönder"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </DismissKeyboard>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        backgroundColor: "white",
        width: "90%",
        borderRadius: 12,
        marginHorizontal: "5%",
        paddingHorizontal: "5%",

    },
    feedbackContainer: {
        justifyContent: "center",

    },
    closeIcon: {
        position: "absolute",
        right: 0,
    },
    textareaContainer: {
        height: "61%",
        padding: 5,
        borderWidth: 1.5,
        borderColor: "lightgrey",
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
    },
    sendButton1: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0384fc",
        marginTop: 20,
        height: "17.5%"
    },
    sendButton2: {

    }
});

const DismissKeyboard = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
}

export default Feedback;