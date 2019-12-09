import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import axios from "axios";
import useForceUpdate from 'use-force-update';

import Login from "./screens/Login";
import Header from "./screens/Header";
import Passer from "./screens/Passer";


export default function App() {

  const forceUpdate = useForceUpdate();
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [appKey, setappKey] = useState("");
  const [content, setContent] = useState({});

  const usernameHandler = (newUsername) => {
    setUsername(newUsername);
  }

  const passwordHandler = (newPass) => {
    setPassword(newPass);
  }

  const loginHandler = () => {
    console.log("Login handler");
    login();
  }

  const logoutHandler = () => {
    console.log("Log out handler");
    setUsername("");
    setPassword("");
    setappKey("");
    setContent({});
    setIsLogged(false);
  }

  const fillFormPage = (content) => {
    let myForms = []
    console.log("Fill Form");
    //console.log(content);

    for (let i = 0, j = 1; j < content.length; i = i + 2, j = j + 2) {
      if (content[i].title !== undefined && content[i].count !== undefined && content[i].new !== undefined) {
        myForms.push(<Passer
          key={i}
          first_tsubNum={content[i].count}
          first_title={content[i].title}
          first_csubNum={content[i].new}
          second_tsubNum={content[j].count}
          second_title={content[j].title}
          second_csubNum={content[j].new}
          id1={content[i].id}
          appKey={appKey}
          status1={content[i].status}
          id2={content[j].id}
          status2={content[j].status}
        />)
      }
    }

    return myForms;
  }

  // appKey = 19c201ac270eaaa20af307005546e228

  const getFormData = () => {
    let formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);
    formData.append("appName", "Mark Locations App")
    formData.append("access", "full");

    return formData;
  }

  const login = () => {
    const formData = getFormData();
    console.log("Try to login in");
    axios({
      method: "post",
      url: "https://api.jotform.com/user/login",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data", "User-Agent": "JotForm Mobile" } }
    })
      .then(function success(response) {
        const userInfo = response.data.content;
        //console.log(userInfo);
        if (response.data.responseCode === 401)
          alert.alert("Wrong!!!");
        else {
          console.log("Setted App Key");
          setappKey(userInfo.appKey);
          setIsLogged(true);
        }
      })
      .catch(function fail(response) {
        console.log(response);
        console.log("Fail your try to Log in");
      })
  }


  const getForms = (apiKey) => {
    console.log("Getting Forms");
    axios({
      method: "get",
      url: "https://api.jotform.com/user/forms?apiKey=" + apiKey
    })
      .then(function success(response) {
        console.log("Got Forms");
        setContent(response.data.content);
        //console.log("Content: ", response.data.content);
      })
      .catch(function fail() {
        console.log("HATA");
      })

  }

  if (isLogged && appKey !== "") {
    if (content.length > 0) {
      return (
        <SafeAreaView>
          < View style={styles.container} >
            <Header
              isLogged={isLogged}
              setIsLogged={setIsLogged}
              logoutHandler={logoutHandler}
            />
            <View style={{ marginVertical: "2.5%", height: "81.5%" }}>
              <ScrollView>
                {fillFormPage(content)}
              </ScrollView>
            </View>
          </View >
        </SafeAreaView>

      );
    } else {
      getForms(appKey);
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    }
  } else
    return (

      <Login
        loginHandler={loginHandler}
        username={username}
        password={password}
        usernameHandler={usernameHandler}
        passwordHandler={passwordHandler}
      />
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignContent: "center"
  },
  cardContainer: {
    flexDirection: "row",
    marginBottom: "1.5%"
  }
});