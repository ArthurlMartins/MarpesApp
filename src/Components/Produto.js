import { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//styles

import produtoStyle from "../Styles/ProdutoStyle";


export default class Produto extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    
      }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.mudarTela(this.props.name, this.props.path, this.props.price, this.props.local, this.props.desc)}>
                <View style={produtoStyle.container}>
                <Image style={produtoStyle.containerImg} source={this.props.path} />
                    <View style={produtoStyle.textContainer}>
                        <Text style={produtoStyle.textProduto}>{this.props.name}</Text>
                    </View>
            </View>
        
            </TouchableOpacity>
        )
    }
}