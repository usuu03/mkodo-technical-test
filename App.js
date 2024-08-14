import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LotteryDrawDetail from "./components/LotteryDrawDetail";
import LotteryDrawList from "./components/LotteryDrawList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LotteryDrawList">
        <Stack.Screen
          name="LotteryDrawList"
          options={{ title: "Lottery Draws" }}
        >
          {(props) => <LotteryDrawList {...props} draws={draws} />}
        </Stack.Screen>
        <Stack.Screen
          name="LotteryDrawDetail"
          component={LotteryDrawDetail}
          options={{ title: "Draw Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
