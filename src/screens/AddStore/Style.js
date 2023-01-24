import { StyleSheet } from "react-native"
import { BGC } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    flex:1,
    backgroundColor:"#fff"
   },
   bgImage:{
    height:150,
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:20
   },
   addPhotoStyle:{
      alignSelf:"center",
      backgroundColor:"#D3D3D3",
      padding:30,
      width:"25%",
      alignItems:"center",
      borderRadius:50,
   },
   detailView:{
      marginTop:20
   },
   textInputStyle:{
      borderBottomWidth:1,
      borderColor:"#DCDCDC",
      paddingBottom:1,
      paddingTop:3
   },
   addNowStyle:{
      backgroundColor:BGC,
      padding:10,
      marginTop:25,
      alignItems:"center",
      borderRadius:5
   }
})

export default Style;