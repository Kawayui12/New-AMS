import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Calendar } from "react-native-calendario";

export default function EmployeesProfile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.MainDashboard}>

      <TouchableOpacity
        style={styles.backButton1}
        onPress={() => navigation.navigate("EmployeeList")}
      >
        <Text style={styles.backButton2}>Back</Text>
      </TouchableOpacity>

      <View style={styles.whiteBG}>

      <View style={styles.profileBox}>
        <View style={styles.picBox}>
          <View style={styles.profilePic}></View>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.nameBox}>
            <Text style={styles.employeeName}>Prince Deemarc Asugas Godoy</Text>
          </View>
          <View style={styles.emailBox}>
            <Text style={styles.employeeEmail}>
              princedeemarc.godoy@g.msuiit.edu.ph
            </Text>
          </View>
          <View style={styles.cnBox}>
            <Text style={styles.employeeContactNumber}>09757780193</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomBackground}>
        <View style={{ padding: 10, }}>
          <Calendar
            numberOfMonths={1}
            theme={{
              monthTitleTextStyle: {
                color: "white",
                fontWeight: "20",
                fontSize: 16,
              },
              emptyMonthTextStyle: { fontWeight: "10" },
              weekColumnStyle: { paddingVertical: 10 },
              weekColumnTextStyle: {
                color: "white",
                fontSize: 17,
              },
              dayTextStyle: {
                color: "black",
                fontWeight: "10",
                fontSize: 15,
              },
              todayTextStyle: {
                backgroundColor: "green",
                color: "white",
                padding: 10,
              },
            }}
          />
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
  },

  whiteBG: {
    marginTop:25,
    backgroundColor: "white",
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding:5,
  },

  bottomBackground: {
    backgroundColor: "#6495ed",
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    
  },

  backButton1: {
    marginRight: 320,
    marginTop:30,
  },
  backButton2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
  },

  profileBox: {
    height: "35%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    padding: 10,
  },

  picBox: {
    height: "90%",
    width: "23%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    margin: 5,
  },

  infoBox: {
    height: "95%",
    width: "70%",
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
    height: "25%",
    width: "90%",
    backgroundColor: "#6495ed",
    margin: 5,
    justifyContent: "center",
  },

  emailBox: {
    height: "25%",
    width: "90%",
    backgroundColor: "#6495ed",
    
    margin: 5,
    justifyContent: "center",
  },

  cnBox: {
    height: "25%",
    width: "90%",
    backgroundColor: "#6495ed",
 
    margin: 5,
    justifyContent: "center",
  },

  profilePic: {
    backgroundColor: "white",
    opacity: 0.5,
    width: 80,
    height: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop:15,
    opacity: 0.5,
  },

  employeeName: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  employeeEmail: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  employeeContactNumber: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
