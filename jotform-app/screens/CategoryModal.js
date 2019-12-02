import React from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const CategoryModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}>
            <View style={{ height: "100%" }}>
                <View style={styles.header}>
                    <Text style={styles.header_title}> {props.title}</Text>
                    <TouchableOpacity style={styles.close_icon} onPress={() => props.setModalVisible(false)}>
                        <Ionicons
                            name='md-close'
                            size={26}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  My Forms </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  My Folders </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Favorited </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Archived </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subCategory}>
                        <TouchableOpacity style={styles.catogory}>
                            <Text style={{ color: "black", fontSize: 18 }}>  Trash </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    catogory: {
        justifyContent: "center",
        paddingVertical: 25,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2c3144",
        height: "11%",
        justifyContent: "center",
        paddingTop: 15
    },
    subCategory: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        marginHorizontal: 15
    }, 
    close_icon: {
        position: "absolute",
        right: 20,
        bottom: 18 
    },
    header_title: {
        color: "white",
        fontSize: 18,
        fontWeight: "500" 
    }
});

export default CategoryModal;