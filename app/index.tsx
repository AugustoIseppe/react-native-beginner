import React from "react";

import { Text, View, StyleSheet, ScrollView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      // ScrollView é para listas pequenas, pois carrega todos os itens de uma vez
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text style={styles.box1}>Box 1</Text>
          <Text style={styles.box2}>Box 2</Text>
          <Text style={styles.box3}>Box 3</Text>
          <Text style={styles.box4}>Box 4</Text>
        </ScrollView>
        <View style={{ height: 20 }} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Text style={styles.box5}>Box 5</Text>
          <Text style={styles.box6}>Box 6</Text>
          <Text style={styles.box7}>Box 7</Text>
          <Text style={styles.box8}>Box 8</Text>
        </ScrollView>
        <View style={{ height: 20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  box1: {
    backgroundColor: "red",
    height: 250,
  },
  box2: {
    backgroundColor: "blue",
    height: 250,
  },
  box3: {
    backgroundColor: "green",
    height: 250,
  },
  box4: {
    backgroundColor: "yellow",
    height: 250,
  },
  box5: {
    backgroundColor: "grey",
    width: 250,
    height: 150,
  },
  box6: {
    backgroundColor: "purple",
    width: 250,
    height: 150,
  },
  box7: {
    backgroundColor: "orange",
    width: 250,
    height: 150,
  },
  box8: {
    backgroundColor: "pink",
    width: 250,
    height: 150,
  },
});
