import { Provider } from "react-redux";
import Routes from "./src/navigation/Routes";
import store from "./src/redux/store";
import { LoginScreen, HomeScreen } from "./src/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}
