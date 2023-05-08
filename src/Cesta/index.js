import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'

import Texto from '../components/Texto'
import Topo from "./Components/Topo"
import Details from "./Components/Details"
import Item from './Components/Item'

export default function Cesta({topo, detalhes, itens}){
  return <>
    {/* Fragmentos são usaddos para agrupar componente de um return sem necessidade de uma 'View'*/} 
    <FlatList
      data = { itens.lista }
      renderItem = { Item }
      keyExtractor = { ({ nome }) =>  nome}

      ListHeaderComponent = { () => { 
        
        return <>
          <Topo {...topo}/>
          <View style={estilos.containerCesta}>
            <Details {...detalhes}/>
            <Texto  style={estilos.tituloItens} >{itens.titulo}</Texto>
          </View>
        </>

      } }
    />
    
  </>
}

const estilos = StyleSheet.create({
  containerCesta: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tituloItens: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});





















