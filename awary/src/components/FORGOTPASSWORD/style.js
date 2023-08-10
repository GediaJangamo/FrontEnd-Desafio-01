import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
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
     height:'14%',
     marginLeft: 10,
     marginRight: 10,
     marginTop:15,
     borderRadius:10,
     padding:15,
   },

   Button: {
    backgroundColor: "#409092",
    marginLeft: 10,
    marginRight: 10,
    height:'15%',
    marginTop: 25,
    borderRadius:10,
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:60,
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:18,
   },

   EsqueceuContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop:10,
    marginLeft:20,
   },

   textEs: {
    fontSize: 16,
    borderBottomColor: "#409092",
    borderBottomWidth:1,
   }



})

export default styles