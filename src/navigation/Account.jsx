import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../features/Login";
import CreatingAccount from "../features/CreatingAccount";

const LoginScreen = () => <Login />;
const CreatingAccountScreen = () => <CreatingAccount />;

const Stack = createNativeStackNavigator();

export default function Account() {
  return (
    <Stack.Navigator screenOptions={() => {
        return {
            headerShown:false,
        }
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreatingAccount" component={CreatingAccountScreen} />
    </Stack.Navigator>
  );
}
