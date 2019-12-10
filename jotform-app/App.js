import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import axios from "axios";

import Login from "./screens/Login";
import Header from "./screens/Header";
import FormCard from "./screens/FormCard";


export default function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [appKey, setappKey] = useState("");
  const [content, setContent] = useState({});
  const [isENG, setisENG] = useState(true);

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
        myForms.push(<FormCard
          language={isENG}
          key={i}
          first_tsubNum={content[i].count}
          first_title={content[i].title}
          first_csubNum={content[i].new}
          id1={content[i].id}
          appKey={appKey}
          status1={content[i].status}
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
      config: {
        headers: {
          "Content-Type": "multipart/form-data",
          "User-Agent": "JotForm Mobile"
        }
      }
    })
      .then(function success(response) {
        const userInfo = response.data.content;

        if (response.data.responseCode === 401)
          alert.alert("Wrong!!!");
        else {
          console.log("Setted App Key");
          setEmail(userInfo.email);
          setappKey(userInfo.appKey);
          setIsLogged(true);
        }
      })
      .catch(function fail(response) {
        console.log(response);
        console.log("Fail your try to Log in");
      })
  }

  const testLogin = () => {
    setappKey("19c201ac270eaaa20af307005546e228");
    setIsLogged(true);
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
      .catch(function fail(response) {
        console.log("Get Forms HATA: " + response);
      })

  }

  if (isLogged && appKey !== "") {
    if (content.length > 0) {
      return (
        <SafeAreaView>
          < View style={styles.container} >
            <Header
              username={username}
              email={email}
              setLanguage={setisENG}
              language={isENG}
              isLogged={isLogged}
              setIsLogged={setIsLogged}
              logoutHandler={logoutHandler}
            />
            <View style={{ height: "82.5%" }}>
              <ScrollView>
                <FlatList
                  data={content}
                  renderItem={({ item }) =>
                    <FormCard
                      language={isENG}
                      key={item.id}
                      tsubNum={item.count}
                      csubNum={item.new}
                      title={item.title}
                      appKey={appKey}
                      id={item.id}
                      status={item.status}
                    />}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
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
        loginHandler={testLogin}
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
    alignContent: "center",
  },
  cardContainer: {
    flexDirection: "row",
    marginBottom: "1.5%"
  }
});