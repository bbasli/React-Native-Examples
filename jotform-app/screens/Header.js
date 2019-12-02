import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/AntDesign";

import SortOptionModal from "./sortOptionModal";
import CategoryModal from "./CategoryModal";
import SettingsModal from "./SettingsModal";

const Header = () => {

    const [optionModalVisible, setOptionModalVisible] = useState(false);
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);

    const [headerTitle, setHeaderTitle] = useState("My Forms");

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                    <Icon
                        name='plus'
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_title} onPress={() => setCategoryModalVisible(true)}>
                    <Text style={styles.typeText}>
                        My Forms
                    </Text>
                    <Icon2
                        name='downcircle'
                        size={18}
                        color="white"
                        style={{ marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => setSettingsModalVisible(true)}>
                    <Icon
                        name='settings'
                        size={25}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <View style={styles.searchBar}>
                    <Icon
                        name='search'
                        size={22}
                        color="darkgrey"
                        style={{ paddingHorizontal: 10 }}
                    />
                    <TextInput placeholder="Search" style={styles.input} />

                </View>
                <TouchableOpacity style={styles.options} onPress={() => { setOptionModalVisible(true) }}>
                    <Icon
                        name='chevrons-down'
                        size={29}
                        color="darkgrey"
                    />
                </TouchableOpacity>
                <SortOptionModal
                    modalVisible={optionModalVisible}
                    setModalVisible={setOptionModalVisible}
                />
                <CategoryModal
                    modalVisible={categoryModalVisible}
                    setModalVisible={setCategoryModalVisible}
                    title={headerTitle}
                    setTitle={setHeaderTitle}
                />
                <SettingsModal
                    modalVisible={settingsModalVisible}
                    setModalVisible={setSettingsModalVisible}
                    title={"Settings"}
                />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: "#2c3144",
        height: 135,
        width: "100%",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 15,
    },
    typeText: {
        color: "white",
        fontSize: 18,
        fontWeight: "500"
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4c536d",
        marginHorizontal: 15,
        height: 40,
        borderRadius: 5
    },
    input: {
        width: "74%",
        color: "white",
        fontSize: 16,
    },
    options: {
        marginRight: 10,
        backgroundColor: "#4c536d",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    header_title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Header;