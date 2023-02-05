import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../authentication/Context";

export default function Login() {
  const navigation = useNavigation();
  const { onLogin } = useContext(AuthenticationContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.blue}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/splash.png")}
            style={styles.logo1}
          />
        </View>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.phrase2}>Please sign in to continue.</Text>
      </View>

      <View style={styles.white}>
        <View style={styles.Username}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Enter Username"
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.Password}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Enter Password"
            
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton1}>
          <Text
            style={styles.loginButton2}
            onPress={() => navigation.navigate(onLogin(username, password))}
          >
            Login
          </Text>
        </TouchableOpacity>

        <View style={styles.frame}>
          <Text style={styles.DontHaveAnAccount}>Don't have an account?</Text>
          <TouchableOpacity style={styles.signUp1}>
            <Text
              style={styles.signUp2}
              onPress={() => navigation.navigate("CreatingAccount")}
            >
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },

  blue: {
    backgroundColor: "#6495ed",
    height: "50%",
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  logo: {
    alignItems: "center",
    top: 50,
  },

  logo1: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: 100,
    height: 100,
  },

  loginText: {
    fontWeight: "bold",
    width: 200,
    height: 65,
    fontSize: 40,
    color: "white",
    top: 65,
    paddingHorizontal: 30,
  },

  phrase2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    top: 60,
    paddingHorizontal: 30,
  },

  white: {
    backgroundColor: "white",
    height: "65%",
    width: "100%",
    top: -100,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  Username: {
    width: "90%",
    margin: 10,
    marginTop: 50,
  },

  Password: {
    width: "90%",
    margin: 10,
  },

  loginButton1: {
    margin: 25,
  },

  loginButton2: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 171,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    backgroundColor: "white",
    fontSize: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  frame: {
    backgroundColor: "white",
    height: "30%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  DontHaveAnAccount: {
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 17,
  },

  signUp1: {
    margin: 10,
  },

  signUp2: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 220,
    height: 40,
    backgroundColor: "white",
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontSize: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
