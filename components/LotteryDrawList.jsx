import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import lotteryData from "../utils/lotteryData";

export default function LotteryDrawList() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of Draws</Text>
      <FlatList
        data={lotteryData.draws}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style>{item.id}</Text>
            <Text>{item.drawDate}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#F5F5DC",
  },
  title: {
    marginTop: 15,
    fontSize: 35,
    marginRight: 50,
    marginLeft: 110,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#80ccff",
    padding: 15,
    fontSize: 15,
    marginTop: 5,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
});
