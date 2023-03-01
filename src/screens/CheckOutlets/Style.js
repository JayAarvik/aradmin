import { StyleSheet, Platform } from "react-native"
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
      paddingTop : Platform.OS == "ios" ? 50 : null,
    padding:5,
    flex:1,
   },
   flatMain:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
   },   
   flatView:{
    backgroundColor:"#fff",
    marginVertical:8,
    borderRadius:10,
    padding:20,
    elevation: 10
   },
   textInputStyle:{
    // borderBottomWidth:1,
    borderColor:"gray",
    marginLeft:15,
    paddingBottom:1,
    marginVertical:2,
    width:"77%",
    paddingTop:1,
   //  backgroundColor:"#D3D3D3"
   },
   searchViewStyle:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:5,
    borderRadius:10,
   //  backgroundColor:"#DCDCDC"
   },
   nextIcon:{
    paddingVertical:25,
    paddingHorizontal:10
   }, 
   backIcon:{
      padding:10,
      backgroundColor:"transparent"
     },
})

export default Style;