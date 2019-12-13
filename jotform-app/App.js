import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  Keyboard,
  Dimensions
} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";

import Login from "./screens/Login";
import Header from "./screens/Header";
import FormCard from "./screens/FormCard";
import Feedback from "./screens/Feedback";

export default function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [appKey, setappKey] = useState("");
  const [responseCode, setResponseCode] = useState("0");
  const [content, setContent] = useState({});
  const [isENG, setisENG] = useState(true);
  const [seeFeedback, setFeedback] = useState(false);

  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
    setResponseCode("0");
    setEmail("");
    setIsLogged(false);
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
        setResponseCode(response.data.responseCode);
        if (response.data.responseCode === 401)
          console.log("Wrong!!!");
        else {
          console.log("Setted App Key");
          setEmail(userInfo.email);
          setappKey(userInfo.appKey);
          setIsLogged(true);
        }
      })
      .catch(function fail(response) {
        //console.log(response);
        setResponseCode("401");
        console.log("Fail your try to Log in");
      })
  }

  const testLogin = () => {
    if (username === "")
      console.log("username is empty");
    if (password === "")
      console.log("Password is empty")
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

        < View style={styles.container} >
          <Header
            setResponseCode={setResponseCode}
            responseCode={responseCode}
            username={username}
            email={email}
            setLanguage={setisENG}
            language={isENG}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            logoutHandler={logoutHandler}
          />
          <View style={{ height: "80%" }}>
            <ScrollView>
              <FlatList
                data={content}
                renderItem={({ item }) =>
                  <FormCard
                    setLanguage={setisENG}
                    responseCode={responseCode}
                    language={isENG}
                    key={item.id}
                    tsubNum={item.new}
                    csubNum={item.count}
                    title={item.title}
                    appKey={appKey}
                    id={item.id}
                    status={item.status}
                  />}
                keyExtractor={item => item.id}
                numColumns={2}
                extraData={isENG}
              />
            </ScrollView>
            <View
              style={[
                styles.feedbackOut,
                { width: isENG ? "42%" : "47%" }
              ]}>
              <TouchableOpacity style={styles.feedbackIn} onPress={() => setFeedback(true)}>
                <FontAwesome
                  name='edit'
                  size={25}
                  color="white"
                  style={{ padding: 5 }} />
                <Text style={{ color: "white", fontSize: 14 }}>
                  {isENG ? "Give Feedback" : "Geri Bildirim Gönder"}
                </Text>
              </TouchableOpacity>
            </View>
            <Feedback
              modalVisible={seeFeedback}
              setModalVisible={setFeedback}
              keyboardVisible={isKeyboardVisible}
              language={isENG}
            />
          </View>
        </View >

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
        responseCode={responseCode}
        username={username}
        password={password}
        usernameHandler={usernameHandler}
        passwordHandler={passwordHandler}
        responseCode={responseCode}
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
  },
  feedbackOut: {
    backgroundColor: "#0384fc",
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "#0384fc",
    position: "absolute",
    bottom: "2.5%",
    right: 15,
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
  },
  feedbackIn: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
});