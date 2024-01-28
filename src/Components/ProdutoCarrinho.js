import { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//styles

import produtoStyle from "../Styles/ProdutoStyle";
import produtoCarrinhoStyle from '../Styles/ProdutoCarrinhoStyle'


export default class ProdutoCarrinho extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    
      }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.mudarTela(this.props.name, this.props.path, this.props.price, this.props.local, this.props.desc)}>
                <View style={produtoCarrinhoStyle.container}>
                <Image style={produtoCarrinhoStyle.containerImg} source={this.props.path} />
                    <View style={produtoCarrinhoStyle.textContainer}>
                        <Text style={produtoCarrinhoStyle.textProduto}>{this.props.name}</Text>
                    </View>
            </View>
        
            </TouchableOpacity>
        )
    }
}