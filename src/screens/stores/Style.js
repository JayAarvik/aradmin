import { StyleSheet, Platform } from "react-native"
import { BGC } from "../../Utils/Import";

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
    padding:25,
    elevation: 10
   },
   textInputStyle:{
    // borderBottomWidth:1,
    borderColor:"gray",
    marginLeft:15,
    paddingBottom:1,
    marginVertical: Platform.OS == "android" ? 2 : 10,
    width:"85%",
    paddingTop:1
   },
   searchViewStyle:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:5,
    borderRadius:10,
    backgroundColor:"#DCDCDC"
   },
   nextIcon:{
    paddingVertical:25,
    paddingHorizontal:10
   }
})

export default Style;