import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const produtosStyle = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    viewTitulo: {

        marginTop: hp('3%'),
        marginBottom: hp('3%'),
        justifyContent: "center",

    },
    textTitulo: {
        fontSize: 30,
        fontWeight: "bold",
        // borderColor: '#342e37',
        // borderWidth: 2,
        backgroundColor: '#ffaf24',
        width: wp('100%'),
        padding: 20,
        color: '#342e37'
    },
    
    
})

export default produtosStyle