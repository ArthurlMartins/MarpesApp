import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '@rneui/base';

//styles
import layoutStyle from '../Styles/layoutStyle';
import produtosStyle from '../Styles/ProdutosStyle';

//components
import Produto from '../Components/Produto';

export default function Produtos({ navigation }) {
  
  const Placas = [
    {
      id: '0',
      name: 'Placa 30w',
      path: require('../Images/Placas/30w.jpg'),
      price: 139,
      local: 'Rua Tilted Towers, 289',
      desc: 'Loren, la científica brillante Loren era conocida en todo el mundo como una científica brillante. Sus investigaciones revolucionaron la industria de la energía renovable',
    },
    {
      id: '1',
      name: 'Placa 150w',
      path: require('../Images/Placas/150w.jpg'),
      price: 599,
      local: 'Rua Fontes Salgadas, 88',
      desc: 'El viaje de Loren por el mundo Loren siempre soñó con viajar por el mundo, y finalmente lo hizo. Recorrió continentes, ',
    },
    {
      id: '2',
      name: 'Placa 550w',
      path: require('../Images/Placas/550w.jpg'),
      price: 2699,
      local: 'Rua Via do Varejo, 74',
      desc: 'Cocinar era un arte para Loren. Sus platillos eran una mezcla de sabores exquisitos, y sus cenas eran siempre un evento especial que reunía a amigos y familiares.',
    }
  ]

  const Inversores = [
    {
      id: '0',
      name: 'Tsun 3000w',
      path: require('../Images/Inversores/tsun3000w.jpg'),
      price: 21,
      local: 'Rua Paraíso das Palmeiras, 91',
      desc: 'Loren dedicó su vida a la defensa de los derechos humanos. Luchó incansablemente por la igualdad y la justicia, convirtiéndose en un referente en la lucha por un mundo más justo.',
    },
    {
      id: '1',
      name: 'HMS-1800-4T',
      path: require('../Images/Inversores/HMS-1800-4T.jpg'),
      price: 21,
      local: 'Rua Via do Varejo, 74',
      desc: 'Loren era conocida en todo el mundo como una científica brillante. Sus investigaciones revolucionaron la industria de la energía renovable, allanando el camino hacia un futuro más sostenible para la humanidad.',
    },
    {
      id: '2',
      name: 'Deye 1600w',
      path: require('../Images/Inversores/deye1600w.jpg'),
      price: 29,
      local: 'Rua Fonte Salgadas, 88',
      desc: 'Loren tenía un espíritu aventurero. Escaló montañas imponentes, se aventuró en selvas exóticas y se sumergió en aguas profundas para explorar el mundo subacuático. Su sed de aventura nunca se agotaba.',
    }
  ]

  mudarTela = (name, path, price, local, desc) => {
    navigation.navigate('Home', {
        name: name,
        price: price,
        local: local,
        desc: desc,
        path: path,
    })
}

    return (
      <View style={{flex: 10, backgroundColor: '#f1e9da'}}>
        
        <Header
            centerComponent={{ text: 'Marpes Solar', style: layoutStyle.textLogo }} 
            containerStyle={layoutStyle.container} 
        />

        <ScrollView>
          <View style={produtosStyle.viewTitulo}>
            <Text style={produtosStyle.textTitulo}>Placas Solares</Text>
          </View>
          
          <View style={produtosStyle.container}>
            <FlatList
              scrollEnabled={true}
              horizontal
              data={Placas}
              renderItem={({item}) => 
                <Produto
                mudarTela={mudarTela}
                name={item.name}
                price={item.price}
                path={item.path}
                local={item.local}
                desc={item.desc}
                />
            }
            />
          </View>

          <View style={produtosStyle.viewTitulo}>
            <Text style={produtosStyle.textTitulo}>Micro-Inversores</Text>
          </View>
          <View style={produtosStyle.container}>
            <FlatList
              scrollEnabled={true}
              horizontal
              data={Inversores}
              renderItem={({item}) => 
                <Produto
                mudarTela={mudarTela}
                name={item.name}
                price={item.price}
                path={item.path}
                local={item.local}
                desc={item.desc}
                />
            }
            />
          </View>
        </ScrollView>
   
      </View>  
    );
  }