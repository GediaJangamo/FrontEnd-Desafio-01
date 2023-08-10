import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       fontFamily:"Lobster",
    //    backgroundColor: "#409092",
       backgroundColor:"#6F8BAB",
       height: '100%',
       justifyContent: "center",
       alignItems: "center",
    //    marginTop:1,
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 80,
    color: "#ffffff",
    marginTop:-100,
   },

   Welcome: {
    fontFamily:"Lobster",
    fontSize: 30,
    color: "#ffffff",
    marginTop:-20,
   },

   Button: {
    backgroundColor: "#0F2B3F",
    padding:20,
    width:'70%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    position:"absolute",
    bottom:30,

   },

   ButtonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize:18,
        fontWeight:'bold',
   }



})

export default styles