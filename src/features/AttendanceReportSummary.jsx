import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function EmployeeList() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.MainDashboard}>
      <TouchableOpacity style={styles.backButton1}>
        <Text
          style={styles.backButton2}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Back
        </Text>
      </TouchableOpacity>

      <View style={styles.whitebackground}>
      <View style={styles.whitebackground2}>
        <View style={styles.reportBG}>
          <View style={styles.monthBG}>
            <Text style={styles.monthName}>Month Name</Text>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Image
              source={require("../../assets/splash.png")}
              style={styles.downloadIcon}
            />
          </TouchableOpacity>
        </View>
        </View>
      </View>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainDashboard: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#6495ed",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  downloadIcon: {
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    width: 50,
    height: 50,
  },

  backButton1: {
    marginRight: 320,
    marginBottom: 20,
  },
  backButton2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
  },

  whitebackground: {
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
  },

  whitebackground2: {
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
  },

  

  reportBG: {
    height: "10%",
    width: "100%",
    backgroundColor: "#6495ed",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  monthBG: {
    height: "90%",
    width: "80%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  monthName:{
    fontSize: 23,
  },

  downloadButton: {
    height: "90%",
    width: "20%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

});
