import React from 'react';
import { Image,  StyleSheet, View } from 'react-native';

import Texto from "../../components/Texto";
import BtnComprar from '../../components/btnComprar';

export default function Details({ tituloCesta, logoFazenda, nomeFazenda, descricao, preco, botao }){
  return <>
      <Texto style={estilos.tituloCesta}>{ tituloCesta }</Texto>

      <View style={estilos.containerFazenda}>
        <Image source={logoFazenda} style={estilos.logoFazenda} />
        <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
      </View>

      <Texto style={estilos.descricao}>{ descricao }</Texto>
      <Texto style={estilos.preco}>{ preco }</Texto>

      <BtnComprar text={botao} />
  </>
}

const estilos = StyleSheet.create({
  tituloCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  containerFazenda: {
    flexDirection: "row",
    paddingVertical: 12, 
  },
  logoFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,  
  },
  textoBotao: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
  }
});