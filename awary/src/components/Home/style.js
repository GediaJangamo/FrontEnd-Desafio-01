import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       fontFamily:"Lobster",
       backgroundColor: "#409092",
       height: '100%',
       justifyContent: "center",
       alignItems: "center",
       marginTop:1,
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 70,
    color: "#ffffff",
    marginTop:-100,
   },

   Button: {
    marginTop: 50,
    backgroundColor: "#ffffff",
    padding:20,
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:50,

   },

   ButtonText: {
        color: "#409092",
        textAlign: "center",
        fontSize:18,
        fontWeight:'bold',
   }



})

export default styles