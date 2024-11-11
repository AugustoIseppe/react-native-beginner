import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import PessoaComponent from "@/components/Pessoas";

interface StatePessoa {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  cidade: string;
  estado: string;
}

interface AppState {
  data: StatePessoa[];
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          nome: "Darinha",
          idade: 9,
          sexo: "F",
          cidade: "Pirassununga",
          estado: "SP",
        },
        {
          id: 1,
          nome: "Augusto",
          idade: 25,
          sexo: "M",
          cidade: "São Paulo",
          estado: "SP",
        },
        {
          id: 2,
          nome: "Ana",
          idade: 30,
          sexo: "F",
          cidade: "Rio de Janeiro",
          estado: "RJ",
        },
        {
          id: 3,
          nome: "Pedro",
          idade: 35,
          sexo: "M",
          cidade: "Belo Horizonte",
          estado: "MG",
        },
        {
          id: 4,
          nome: "Maria",
          idade: 40,
          sexo: "F",
          cidade: "Curitiba",
          estado: "PR",
        },
        {
          id: 5,
          nome: "João",
          idade: 45,
          sexo: "M",
          cidade: "Porto Alegre",
          estado: "RS",
        },
        {
          id: 6,
          nome: "Julia",
          idade: 50,
          sexo: "F",
          cidade: "Florianópolis",
          estado: "SC",
        },
        {
          id: 7,
          nome: "Carlos",
          idade: 55,
          sexo: "M",
          cidade: "Salvador",
          estado: "BA",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.titulos}>Vertical Scroll</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text style={styles.box1}>Box 1</Text>
          <Text style={styles.box2}>Box 2</Text>
          <Text style={styles.box3}>Box 3</Text>
          <Text style={styles.box4}>Box 4</Text>
        </ScrollView>
        <View style={styles.boxTitle}>
          <Text style={styles.titulos}>Horizontal Scroll</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Text style={styles.box5}>Box 5</Text>
          <Text style={styles.box6}>Box 6</Text>
          <Text style={styles.box7}>Box 7</Text>
          <Text style={styles.box8}>Box 8</Text>
        </ScrollView>
        <View style={styles.boxTitle}>
          <Text style={styles.titulos}>Flat List</Text>
        </View>

        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PessoaComponent {...item} />}
        />

        <View style={styles.boxTitle}>
          <Text style={styles.titulos}>Picker</Text>
        </View>

        <View style={styles.containerPizza}>
          <Text>Menu Pizza</Text>
          <Text>Voce escolheu a pizza de Calabresa</Text>
          <Text>Valor: R$ 59.90</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5FCFF" },
  containerPizza: {
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  boxTitle: {
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  titulos: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    height: 40,
  },
  box1: { backgroundColor: "red", height: 250 },
  box2: { backgroundColor: "blue", height: 250 },
  box3: { backgroundColor: "green", height: 250 },
  box4: { backgroundColor: "yellow", height: 250 },
  box5: { backgroundColor: "grey", width: 250, height: 150 },
  box6: { backgroundColor: "purple", width: 250, height: 150 },
  box7: { backgroundColor: "orange", width: 250, height: 150 },
  box8: { backgroundColor: "pink", width: 250, height: 150 },
});
