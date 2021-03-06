import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../services/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
  }
  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <SafeAreaView style={styles.topo}>
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={styles.legenda}>{this.state.topo.legenda}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    width: 500,

    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Topo;
