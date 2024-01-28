import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '@rneui/base';
import Crud from '../Model/Banco/crud'
import ProdutoObj from '../Model/ProdutoObj'
//styles

import layoutStyle from '../Styles/layoutStyle';
import { homeStyle, itemHomeStyle } from '../Styles/HomeStyle';

export default function HomeScreen({  route, navigation }) {
  
    

    const {name, path, price, local, desc} = route?.params || {}

    Insert = (name, path, price, local, desc) => {
      const produtoNovo = new ProdutoObj(name, path, price, local, desc)
      const banco = new Crud()
      banco.Inserir(produtoNovo)
      
      navigation.navigate('Carrinho')
    }



    return (
      <View style={{flex: 10, backgroundColor: '#f1e9da'}}>
        
        <Header
            centerComponent={{ text: 'Marpes Solar', style: layoutStyle.textLogo }} 
            containerStyle={layoutStyle.container} 
        />

        {name ?
        
        <ScrollView>
          <View>
            <View style={itemHomeStyle.imgContainer}>
              <Image style={itemHomeStyle.imgStyle} source={path} />
            </View>
            <View style={itemHomeStyle.tituloArea}>
              <Text style={itemHomeStyle.textTitulo}>{name}</Text>
              <Text style={itemHomeStyle.textTitulo}>${price}</Text>
            </View>
            <View style={itemHomeStyle.comprarContainer}>
              <TouchableOpacity  onPress={() => Insert(name, path, price, local, desc)} style={itemHomeStyle.botaoComprar}>
                  <Text style={itemHomeStyle.textComprar}>Encomendar</Text>
              </TouchableOpacity>
              <Text style={itemHomeStyle.textLocal}>{local}</Text>
            </View>
            <View style={itemHomeStyle.descContainer}>
              <Text style={itemHomeStyle.textDesc}>{desc}</Text>
            </View>
          </View>
        </ScrollView>

        :
        
        <ScrollView>
          <View>
            <View style={homeStyle.containerTitulo}>
              <Text style={homeStyle.textTitulo}>Seja Bem-Vindo a Marpes Solar! A melhor empresa de Energia Solar do Brasil</Text>
            </View>
            <View>
              <Image style={homeStyle.imgStyle} source={require('../Images/fotoPrincipal.jpg')} />
            </View>
            <View style={homeStyle.buttonContainer}>
              <TouchableOpacity style={homeStyle.button}>
                <Text onPress={() => navigation.navigate('Produtos')} style={homeStyle.buttonText}>Encomende seu produto agora mesmo!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        }
       
      </View>  
    );
  }