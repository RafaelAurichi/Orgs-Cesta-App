import React from 'react';
import { Image,  StyleSheet, View, FlatList } from 'react-native';
import Texto from '../../components/Texto';

export default function Item( {item: {nome, imagem}} ) {
  return <View style={estilos.item}>
    <Image source={ imagem } style={estilos.img} />
    <Texto style={estilos.nome}>{ nome }</Texto>
  </View>

    {/*MAP

    { xxx.map( () => {} ) } 

    { lista.map( ({ nome, imagem }) => {  
        return (
          <View style={estilos.item} key={nome}>
            <Image source={ imagem } style={estilos.img} />
            <Texto style={estilos.nome}>{ nome }</Texto>
          </View>
        );
      }) 
    }
    */}
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center", 
  },
  img: {
    width: 70,
    height: 70,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 10,
    color: "#464646"
  }
})