import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import lotteryData from "./utils/lotteryData";

// App is a functional component that renders a list of lottery draws.
export default function App() {
  return (
    // SafeAreaView ensures that content is rendered within the safe boundaries of the device screen.
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of Draws</Text>
      {/* ScrollView is used to render a list of lottery draws from the data */}
      <ScrollView>
        {lotteryData.draws.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.id}</Text>
            <Text>{item.drawDate}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for the LotteryDrawList component
const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#F5F5DC",
  },
  title: {
    marginTop: 15,
    fontSize: 35,
    fontWeight: "bold",
    marginRight: 100,
    marginLeft: 100,
  },
  item: {
    backgroundColor: "#80ccff",
    padding: 15,
    fontSize: 15,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
});
