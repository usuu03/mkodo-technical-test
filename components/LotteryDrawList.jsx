import { useNavigation } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import lotteryData from "../utils/lotteryData";

export default function LotteryDrawList() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("LotteryDrawDetail", { draw: item })}
    >
      <Text style={styles.drawDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of Draws</Text>
      <FlatList
        data={lotteryData.draws}
        renderItem={render}
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
  drawDate: {
    fontSize: 18,
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
