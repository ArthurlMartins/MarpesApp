import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export const homeStyle = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    containerTitulo: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00815a',
        margin: 20,
        padding: 5,
    },
    textTitulo: {
        fontSize: 26,
        textAlign: "center",
        color: '#342e37',

    },
    imgStyle: {
        width: wp('100%'),
        justifyContent: "center",
        alignItems: "center",
        height: hp('50%'),
    }, 
    button: {
        backgroundColor: '#342e37',
        width: wp('70%'),
        height: hp('10%'),
        padding: 10,
    },
    buttonText: {
        color: '#f1e9da',
        fontSize: 21,
        textAlign: "center",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    
})

 export const itemHomeStyle = StyleSheet.create({
    imgStyle: {
        justifyContent: "center",
        alignContent: "center",
        width: wp('100%')
    },
    price: {
        

    },
    textTitulo: {
        fontSize: 21,
        color: '#342e37'
    },
    textDesc: {
        fontSize: 18,
        textAlign: "center",
        color: '#342e37'
    },
    tituloArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        backgroundColor: '#ffaf24',
        padding: 20,
    },
    comprarContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    botaoComprar: {
        backgroundColor: '#342e37',
        width: wp('40%'),
        height: wp('15%'),
        justifyContent: "center",
        alignItems: "center"
    },
    textComprar: {
        fontSize: 21,
        color: '#f1e9da'
    },
    descContainer: {
        padding: 20,
        color: '#342e37'
    },
    textLocal: {
        color: '#342e37'
    }
    
})

