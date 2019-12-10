import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";


const Login = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={{
                    marginRight: 10,
                    padding: 0
                }}>
                    <Icon
                        name='user'
                        size={45}
                    />
                </View>
                <TextInput placeholder="Username or Email" onChangeText={(text) => props.usernameHandler(text)} />
            </View>
            <View style={styles.inputContainer}>
                <View style={{
                    marginRight: 10,
                    padding: 0
                }}>
                    <Icon
                        name='lock'
                        size={48}
                    />
                </View>
                <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(text) => props.passwordHandler(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} color="#ff4800" title="Login" onPress={props.loginHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 35,
        paddingVertical: 5,
        width: "85%",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 2
    },
    buttonContainer: {
        width: "85%",
    },
    button: {
        paddingVertical: 15
    }
});

export default Login;