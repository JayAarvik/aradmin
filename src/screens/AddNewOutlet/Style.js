import { StyleSheet, Platform } from "react-native"
import { BGC, BGR } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
      paddingTop : Platform.OS == "ios" ? 50 : null,
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
      paddingBottom: Platform.OS == "android" ? 1 : 5,
      paddingTop: Platform.OS == "android" ? 3 : 5
   },
   addNowStyle:{
      backgroundColor:BGR,
      padding:10,
      marginTop:25,
      alignItems:"center",
      borderRadius:5
   },
   backIcon:{
      padding:10,
      backgroundColor:"transparent"
     },
})

export default Style;