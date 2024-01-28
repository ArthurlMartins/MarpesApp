import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '@rneui/base';

//styles

import layoutStyle from '../Styles/layoutStyle';

export default function Pagamentos({ navigation }) {
  

    return (
      <View style={{flex: 10, backgroundColor: '#FFF'}}>
        
        <Header
            centerComponent={{ text: 'Marpes Solar', style: layoutStyle.textLogo }} 
            containerStyle={layoutStyle.container} 
        />

        <Text>Formas de pagamento</Text>
       
      </View>  
    );
  }