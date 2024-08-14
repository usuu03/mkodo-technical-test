import React from "react";
import { Text, View } from "react-native";

export default function LotteryDrawDetail() {
  const { draw } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lottery Draw Details</Text>
      <Text style={styles.label}>Draw Numbers:</Text>
      <View style={styles.numbersContainer}>
        {draw.numbers.map((number, index) => (
          <Text key={index} style={styles.number}>
            {number}
          </Text>
        ))}
      </View>
      <Text style={styles.label}>Bonus Ball:</Text>
      <Text style={styles.bonusBall}>{draw.bonusBall}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
    marginRight: 10,
  },
  bonusBall: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});
