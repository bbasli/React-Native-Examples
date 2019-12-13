import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";


const SettingsModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}>
            <View style={{ height: "100%" }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.goBack} onPress={() => (props.setModalVisible(false))}>
                        <Feather
                            name='chevron-left'
                            size={26}
                            color="white"
                        />
                    </TouchableOpacity>
                    <Text style={styles.header_title}> {props.title}</Text>
                </View>
                <View>
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            size="large"
                            source={{
                                uri:
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoloAyntNmLEGulFL3CHMQz5HqLLhCrIcZTHYAZyv8aGgqlIX2',
                            }}
                            containerStyle={{ borderWidth: 3, borderColor: "gold" }}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ marginTop: 10, fontWeight: "500", fontSize: 16 }}>
                                {props.username}
                            </Text>
                            <Text style={{ marginTop: 10, fontSize: 16 }}>
                                {props.email}
                            </Text>
                            <TouchableOpacity style={{ marginTop: 10, fontSize: 16 }}>
                                <Text style={{ color: "blue" }}>
                                    {props.language ? "Change password" : "Şifreyi Değiştir"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory} onPress={() => (props.setLanguage(!props.language), props.setResponseCode("999"))}>
                            <Text style={{ color: "black", fontSize: 18 }}>
                                {props.language ? "Language" : "Dil"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>
                                {props.language ? "Offline Forms" : "Çevrimdışı Formlar"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>
                                {props.language ? "Notifications" : "Bildirimler"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>
                                {props.language ? "Sync Your Data" : "Verileri Senkronize Et"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>
                                {props.language ? "Give Feedback" : "Geri Bildirim Gönder"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>
                                {props.language ? "Version" : "Sürüm"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory} onPress={() => props.logoutHandler()}>
                            <Text style={{ color: "blue", fontSize: 18 }}>
                                {props.language ? "Log out" : "Çıkış yap"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2c3144",
        height: "12.5%",
        justifyContent: "center",
        paddingTop: 15
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
    catogory: {
        justifyContent: "center",
        paddingVertical: 20,
    },
    subCategory: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        marginHorizontal: 15
    },
    avatar: {
        marginLeft: 15,
        marginTop: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        paddingBottom: 25
    }
});

export default SettingsModal;