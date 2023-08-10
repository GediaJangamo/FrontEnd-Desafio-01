import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       height: '100%',
       marginTop: 10,   
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 42,
    color:'#0F2B3F',
    textAlign: "center",
   },

   Historias: {
    fontFamily:"Lobster",
    fontSize: 24,
    color:'#0F2B3F',
    marginLeft:5,
   },

   Feed: {
       marginTop:10,
       display:"flex",
       flexDirection: "row",
   },

   imagem: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft:5,
    marginRight:1,
   },

   imagemPost: {
   width: '98%',
   height:'70%',
   marginTop:15,
   marginLeft:3,
   marginRight:3,
   },

   TextPost: {
    fontSize: 18,
    color:'#0F2B3F',
    marginLeft:5,
    marginTop: 20,
   },

   MyProfile: {
     marginTop: 50,
     marginLeft:0,
     display: "flex",
     flexDirection:"row",
     justifyContent:"space-between"
   },

   Perfil: {
    display: "flex",
     flexDirection:"row",
   },

   PerfilText: {
    fontFamily:"Lobster",
    fontSize: 24,
    color:'#0F2B3F',
    marginLeft:5,
   },
  
   moreMenu:{
     marginTop:10,
   },

   Comentarios: {
    backgroundColor:"#D9D9D9"
   }



})

export default styles