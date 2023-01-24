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
   textInputStyle:{
    borderBottomWidth:1,
    paddingBottom:1,
    borderColor:"gray",
    marginTop:10
   },
   brandNameStyle:{
    marginTop:10,
    backgroundColor:BGC,
    paddingHorizontal:5,
    opacity:0.8
   },
   borderLine:{
    backgroundColor:"#D3D3D3",
    height:1,
    width:"70%",
    alignSelf:"center",
    marginVertical:10
   },
   backIcon:{
    padding:10,
    backgroundColor:"transparent"
   },
   editIcon:{
    padding:10,
    backgroundColor:"#999",
    borderRadius:50
   },
   upperBtns:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:1
   }
})

export default Style;