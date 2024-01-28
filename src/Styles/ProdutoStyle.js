import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const produtoStyle = StyleSheet.create({
    container: {
        backgroundColor: '#342e37',
        width: wp('47%'),
        height: hp('30%'),
        margin: 15,
    },
    containerImg: {
        width: wp('47%'),
        height: hp('24%'),
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

export default produtoStyle