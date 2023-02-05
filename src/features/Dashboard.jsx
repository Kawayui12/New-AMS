import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { AuthenticationContext } from "../authentication/Context";

export default function MainDashboard() {
  const navigation = useNavigation();
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeAreaView style={styles.MainDashboard}>
      <View style={styles.whiteBackground}>
        <View>
          <TouchableOpacity onPress={() => onLogout()}>
            <Image
              source={require("../../assets/splash.png")}
              style={styles.logo1}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.attendanceBackground}>
          <Text style={styles.phrase1}>Where employee can clock in</Text>
          <TouchableOpacity style={styles.attendance1}>
            <Text
              style={styles.attendance2}
              onPress={() => navigation.navigate("ClockIn")}
            >
              Attendance Panel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.employeelistBackground}>
          <Text style={styles.phrase2}>Shows the employees profile</Text>
          <TouchableOpacity style={styles.employeeList1}>
            <Text
              style={styles.employeeList2}
              onPress={() => navigation.navigate("EmployeeList")}
            >
              Employee List
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reportBackground}>
          <Text style={styles.phrase3}>
            Shows an attendance summary of a month
          </Text>
          <TouchableOpacity style={styles.attendanceReportSummary1}>
            <Text
              style={styles.attendanceReportSummary2}
              onPress={() => navigation.navigate("AttendanceReportSummary")}
            >
              Attendance Report Summary
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainDashboard: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#6495ed",
    justifyContent: "center",
  },

  whiteBackground: {
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  logo1: {
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    width: 150,
    height: 150,
    marginBottom: 15,
  },

  attendanceBackground: {
    height: "20%",
    width: "100%",
    backgroundColor: "#7160e5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  employeelistBackground: {
    height: "20%",
    width: "100%",
    backgroundColor: "#7160e5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  reportBackground: {
    height: "20%",
    width: "100%",
    backgroundColor: "#7160e5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  attendance1: {},

  attendance2: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 300,
    height: 70,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontWeight: "bold",
    fontSize: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  employeeList1: {},

  employeeList2: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 300,
    height: 70,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontWeight: "bold",
    fontSize: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  attendanceReportSummary1: {},

  attendanceReportSummary2: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 300,
    height: 70,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  phrase1: {
    padding: 10,
    fontSize: 17,
    color: "white",
  },

  phrase2: {
    padding: 10,
    fontSize: 17,
    color: "white",
  },

  phrase3: {
    padding: 10,
    fontSize: 17,
    color: "white",
  },
});
