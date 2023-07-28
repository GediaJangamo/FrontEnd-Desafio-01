import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
    //    backgroundColor: "#409092",
       height: '100%',
       marginTop: 20,   
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#409092',
    textAlign: "center",
   },

   label: {
     fontSize: 18,
     color:'#409092',
     fontWeight:'bold',
     marginLeft: 10,
     marginTop: 10,
   },

   Input: {
     backgroundColor:'#E5E5E5',
     height:'12%',
     marginLeft: 10,
     marginRight: 10,
     marginTop:15,
     borderRadius:50,
     padding:15,
   },

   Button: {
    backgroundColor: "#409092",
    marginLeft: 10,
    marginRight: 10,
    height:'14%',
    marginTop: 20,
    borderRadius:50,
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:60,
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:18,
   }

})

export default styles