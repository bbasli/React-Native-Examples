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
                    <TouchableOpacity style={styles.goBack} onPress={() => props.setModalVisible(false)}>
                        <Feather
                            name='chevron-left'
                            size={26}
                            color="white"
                        />
                    </TouchableOpacity>
                    <Text style={styles.header_title}> {props.title}</Text>
                </View>
                <View>
                    <View style={{ marginLeft: 15, marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "lightgrey", paddingBottom: 25 }}>
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
                                bgrbasli
                            </Text>
                            <Text style={{ marginTop: 10, fontSize: 16 }}>
                                bgrbasli@gmail.com
                            </Text>
                            <TouchableOpacity style={{ marginTop: 10, fontSize: 16 }}>
                                <Text style={{ color: "blue" }}>
                                    Change password
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Language </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Offline Forms </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Notifications </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Sync Your Data </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Give Feedback </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Version </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "blue", fontSize: 18 }}>  Log out </Text>
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
        height: "11%",
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
});

export default SettingsModal;