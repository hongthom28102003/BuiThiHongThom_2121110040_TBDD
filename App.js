import { Provider } from "react-redux";
import Routes from "./src/navigation/Routes";
import store from "./src/redux/store";
import { LoginScreen, HomeScreen } from "./src/login";
export default function App() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
      <Routes></Routes>
    </Provider>
  );
}
