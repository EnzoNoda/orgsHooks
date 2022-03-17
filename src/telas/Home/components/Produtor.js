import React, {useReducer, useMemo} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';

import Estrelas from '../../../assets/comp/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};
export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaTexto = distanciaEmMetros(distancia);

  return (
    <TouchableOpacity onPress={inverterSelecionado} style={styles.cartao}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.informacoes}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
