import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const carrinhoStyle = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },
    lista: {
        justifyContent: "center",
        alignItems: "center",
        
    },
    deletarStyle: {
        backgroundColor: '#ba1200',
        width: wp('10%'),
        height: hp('10%'),
        borderRadius: 100,
    
        justifyContent: "center",
        alignItems: "center"
    },
    textDeletar: {
        fontSize: 21,
    },
    itemsStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#342e37',
        width: wp('70%'),
        height: hp('10%'),
        padding: 10,
        justifyContent: "center"
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

export default carrinhoStyle