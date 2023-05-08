import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

import Texto from "../../components/Texto";

import topo from "../../../assets/topo.png";


const widthScreen = Dimensions.get('screen').width;

export default function Topo({titulo}){
  return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>{ titulo }</Texto>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * widthScreen,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});