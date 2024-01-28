import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const layoutStyle = StyleSheet.create({
     tabStyle: {
        backgroundColor: '#f1e9da',
     
        height: hp('8%'),
        width: wp('100%'),
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: '#f1e9da',
        borderTopWidth: 2
        
     },
     textLogo: {
      fontWeight: "bold",
      fontSize: 31,
      color: '#ffaf24'
     },

     container: {
        backgroundColor: '#342e37',
     
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        
     },
    
})

export default layoutStyle