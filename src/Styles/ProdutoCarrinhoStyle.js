import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const produtoCarrinhoStyle = StyleSheet.create({
    container: {
        backgroundColor: '#342e37',
        width: wp('60%'),
        height: hp('30%'),
        margin: 15,
    },
    containerImg: {
        width: wp('60%'),
        height: hp('25%'),
    },
    textProduto: {
        color: '#f1e9da',
        fontSize: 20,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    
})

export default produtoCarrinhoStyle