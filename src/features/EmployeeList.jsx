import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar} from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Button, TouchableOpacity } from "react-native";


export default function EmployeeList() {
  const navigation = useNavigation()
    return (
      <SafeAreaView style={styles.MainDashboard}>
      
      <View style={styles.attendanceBackground}>
        <Text style={styles.attendance}>Employees List</Text>
      </View>

      <View style={styles.whitebackground}>
        <TouchableOpacity style={styles.employeeButton} onPress={() => navigation.navigate("EmployeesProfile")}>
          
          <View style={styles.picBox}>
            <View style={styles.profilePic}></View>
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.employeeName}>Prince Deemarc Asugas Godoy</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton1}>
        <Text
          style={styles.backButton2}
          onPress={() => navigation.navigate("Dashboard")}>Back</Text>
      </TouchableOpacity>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainDashboard: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "white",
  },

  backButton1: {
    top:20,
    margin:13,
    position:'absolute',
  },

  backButton2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
  },

  attendanceBackground: {
    height: "35%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent:'center',
    alignItems:'center',
  },

  attendance: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginBottom:70,
  },

  whitebackground: {
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top:-100,
    alignItems:'center',
    flexDirection: "column",
    padding:5,
  },

  employeeButton: {
    top: 20,
    height: "20%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding:5,
    margin:5,
  },

  picBox: {
    height: "100%",
    width: "23%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  nameBox: {
    height: "100%",
    width: "70%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5,
    justifyContent: "center",
  },

  profilePic: {
    backgroundColor: "white",
    opacity:0.5,
    width: 80,
    height: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  employeeName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});