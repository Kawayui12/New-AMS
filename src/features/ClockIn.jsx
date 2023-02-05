import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function ClockIn() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.MainDashboard}>
      <TouchableOpacity
        style={styles.backButton1}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.backButton2}>Back</Text>
      </TouchableOpacity>

      <View style={styles.mainBackground}>
        <View style={styles.profileBox}>
          <View style={styles.picBox}>
            <View style={styles.profilePic}></View>
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.employeeName}>Prince Deemarc Asugas Godoy</Text>
          </View>
        </View>

        <View style={styles.clockIn}>
          <View style={styles.amBox}>
            <Text style={styles.amTxt}>AM</Text>

            <View style={styles.amBox2}>
              <TouchableOpacity
                style={styles.in1}
                onPress={() => Alert.alert("You have clocked in successfully")}
              >
                <Text style={styles.in2}>Time In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.out1}
                onPress={() => Alert.alert("You have clocked out successfully")}
              >
                <Text style={styles.out2}>Out</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.amTimeBG}>
            <Text style={styles.amTimeTxt}>Time</Text>
            <View style={styles.amInTime}></View>
            <View style={styles.amOutTime}></View>
          </View>

          

          
        </View>

        <View style={styles.clockOut}>

          <View style={styles.pmBox}>
            <Text style={styles.pmTxt}>PM</Text>

            <View style={styles.pmBox2}>
              <TouchableOpacity
                style={styles.in1}
                onPress={() => Alert.alert("You have clocked in successfully")}
              >
                <Text style={styles.in2}>Time In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.out1}
                onPress={() => Alert.alert("You have clocked out successfully")}
              >
                <Text style={styles.out2}>Out</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.pmTimeBG}>
            <Text style={styles.pmTimeTxt}>Time</Text>
            <View style={styles.pmInTime}></View>
            <View style={styles.pmOutTime}></View>
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
    height: "100%",
    width: "100%",
    backgroundColor: "#6495ed",
    justifyContent: "center",
    
  },

  backButton1: {
    marginLeft: 15,
    marginBottom:20,
  },
  backButton2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
  },

  mainBackground: {
    height: "85%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },





  profileBox: {
    height: "15%",
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
    opacity: 0.5,
    width: 80,
    height: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },

  employeeName: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },





  clockIn: {
    height: "40%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
  },

  amBox: {
    height: "50%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
  },

  amTxt: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 20,
    marginRight: 50,
  },

  amBox2: {
    height: "30%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#6495ed",
    margin: 20,
  },


  in1: {
    margin: 5,
  },

  in2: {
    backgroundColor: "#32cd32",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 200,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  amTimeBG: {
    height: "30%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },

  amTimeTxt: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 20,
    marginRight: 25,
  },

  amInTime: {
    height: "60%",
    width: "35%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  amOutTime: {
    height: "60%",
    width: "35%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },


  




  clockOut: {
    backgroundColor: "white",
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
  },

  pmBox: {
    height: "50%",
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
  },

  pmTxt: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 20,
    marginRight: 50,
  },

  pmBox2: {
    height: "35%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#6495ed",
    margin: 20,
  },

  out1: {
    margin: 5,
  },

  out2: {
    backgroundColor: "#cd5c5c",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 200,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  pmTimeBG: {
    height: "30%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },

  pmTimeTxt: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 20,
    marginRight: 25,
  },

  pmInTime: {
    height: "60%",
    width: "35%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  pmOutTime: {
    height: "60%",
    width: "35%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

});
