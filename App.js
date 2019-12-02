import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native';
import axios from "axios";
import useForceUpdate from "use-force-update";

import Login from "./screens/Login";
import Header from "./screens/Header";
import Passer from "./screens/Passer";


export default function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [appKey, setappKey] = useState("19c201ac270eaaa20af307005546e228");
  const [content, setContent] = useState({});

  const forceUpdate = useForceUpdate();

  const usernameHandler = (newUsername) => {
    setUsername(newUsername);
  }

  const passwordHandler = (newPass) => {
    setPassword(newPass);
  }

  const loginHandler = () => {
    //login();
    getForms(appKey);
    setIsLogged(true);
  }

  const logoutHandler = () => {
    setIsLogged(false);
  }

  const fillFormPage = (content) => {
    let myForms = []
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

    setUsername(formData.username);
    return formData;


  }

  const login = () => {
    const formData = getFormData();

    axios({
      method: "post",
      url: "https://api.jotform.com/user/login",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function success(response) {

        const userInfo = response.data.content;
        console.log(userInfo);

        if (response.data.responseCode === 401)
          alert.alert("Wrong!!!");
        else {
          console.log(userInfo.appKey);
        }
      })
      .catch(function fail() {
        console.log("Too many Request");
      })
  };

  const getForms = (apiKey) => {
    axios({
      method: "get",
      url: "https://api.jotform.com/user/forms?apiKey=" + apiKey
    })
      .then(function success(response) {
        setContent(response.data.content);
        //console.log(response)
      })
      .catch(function fail() {
        console.log("HATA");
      })

  }

  if (isLogged) {
    if (content.length > 0) {
      return (
        < View style={styles.container} >
          <Header />
          <View style={{ marginVertical: "2.5%", height: "81.5%" }}>
            <ScrollView>
              {fillFormPage(content)}
            </ScrollView>
          </View>
        </View >

      );
    } else
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );

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