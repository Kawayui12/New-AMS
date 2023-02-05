import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainDashboard from "../features/Dashboard";

import ClockIn from "../features/ClockIn";
import EmployeeList from "../features/EmployeeList";
import EmployeesProfile from "../features/EmployeesProfile";
import AttendanceReportSummary from "../features/AttendanceReportSummary";

const DashboardScreen = () => <MainDashboard />;
const ClockInScreen = () => <ClockIn />;
const EmployeeListScreen = () => <EmployeeList />;
const EmployeesProfileScreen = () => <EmployeesProfile />;
const AttendanceReportSummaryScreen = () => <AttendanceReportSummary />;
const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return <Stack.Navigator screenOptions={() => {
    return {
        headerShown:false,
    }
}}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="ClockIn" component={ClockInScreen} />
    <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
    <Stack.Screen name="EmployeesProfile" component={EmployeesProfileScreen} />
    <Stack.Screen name="AttendanceReportSummary" component={AttendanceReportSummaryScreen} />
  </Stack.Navigator>;
}
