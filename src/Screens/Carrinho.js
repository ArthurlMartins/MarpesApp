import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

import { Header } from '@rneui/base';
import { useEffect, useState } from 'react';
import Crud from '../Model/Banco/crud'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//styles
import layoutStyle from '../Styles/layoutStyle';
import carrinhoStyle from '../Styles/CarrinhoStyle';

//components
import Produto from '../Components/Produto';
import ProdutoCarrinho from '../Components/ProdutoCarrinho';

export default function Carrinho({ navigation }) {
  


  const [list, setList] = useState([])
  const [ready, setReady] = useState(true)

  Listar = () => {  
    const banco = new Crud()
    banco.Listar().then(
      (listaCompleta) => {
        useValue(listaCompleta)
      }
    )
    
  }

  Remover = (id) => {
    const banco = new Crud()
    banco.Remover(id)
    this.Listar()
  }

  useValue = (value) => {
    setList(value)
    console.log('------------')

  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Listar()
    });
  })


  mudarTela = (name, path, price, local, desc) => {
    navigation.navigate('Home', {
        name: name,
        price: price,
        local: local,
        desc: desc,
        path: path,
    })
}

const alertar = () =>
Alert.alert('Encomenda', 'Encomenda finalizada com sucesso!', [
  {text: 'OK', onPress: () => console.log('OK Pressed')},
]);


    return (
      <View style={{flex: 10, backgroundColor: '#f1e9da'}}>
        
        <Header
            centerComponent={{ text: 'Marpes Solar', style: layoutStyle.textLogo }} 
            containerStyle={layoutStyle.container} 
        />
        {/* <View style={carrinhoStyle.buttonContainer}>
          <TouchableOpacity onPress={() => Listar()} style={carrinhoStyle.button}><Text style={carrinhoStyle.buttonText}>Abrir/Atualizar Carrinho</Text></TouchableOpacity>
        </View> */}
        
        <ScrollView>
        


        <View style={carrinhoStyle.lista}>
        { 
            list.map(item => (
              <>
              <View style={carrinhoStyle.itemsStyle}>
              <ProdutoCarrinho
                  mudarTela={mudarTela}
                  name={item.name}
                  price={item.price}
                  path={item.path}
                  local={item.local}
                  desc={item.desc}
              />
              <TouchableOpacity onPress={() => Remover(item.id)} style={carrinhoStyle.deletarStyle}>
                <Icon name='delete' size={35} color={'#FFF'} />
              </TouchableOpacity>
              </View>
              
              </>
              
            ))
            
            }
            <View style={carrinhoStyle.buttonContainer}>
                <TouchableOpacity onPress={() => {alertar()}} style={carrinhoStyle.button}><Text style={carrinhoStyle.buttonText}>Finalizar Encomenda</Text></TouchableOpacity>
            </View>
           
        
        </View>
        
        
        </ScrollView>
        
       
      </View>  
    );
  }