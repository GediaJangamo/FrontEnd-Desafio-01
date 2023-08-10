import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       height: '100%',
      backgroundColor:"#B0BEC5",   
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#0F2B3F',
    textAlign: "center",
    padding:15,
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
    borderRadius:10,
    padding:15,
   },

   Input2: {
    backgroundColor:'#E5E5E5',
    height:'12%',
    marginLeft: 10,
    marginRight: 10,
    marginTop:35,
    borderRadius:10,
    padding:15,
   },

   Button: {
    backgroundColor: "#0F2B3F",
    marginLeft: 130,
    marginRight: 10,
    height:'12%',
    marginTop: 25,
    borderRadius:10,
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:70,
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