import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./Styles";

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  cidade: string;
  estado: string;
}
class PessoaComponent extends Component<Pessoa> {
  render() {
    return (
      <View style={styles.containerFlatList}>
        <Text style={styles.textPessoa}>Nome: {this.props.nome}</Text>
        <Text style={styles.textPessoa}>Idade: {this.props.idade}</Text>
        <Text style={styles.textPessoa}>Sexo: {this.props.sexo}</Text>
        <Text style={styles.textPessoa}>Cidade: {this.props.cidade}</Text>
        <Text style={styles.textPessoa}>Estado: {this.props.estado}</Text>
      </View>
    );
  }
}

export default PessoaComponent;
