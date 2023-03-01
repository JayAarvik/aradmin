import { StyleSheet, Platform } from "react-native"
import { BGC, BGR } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    flex:1,
    backgroundColor:"#fff",
   //  justifyContent:"center"
   },
   userImageStyle:{
    height:100,
    width:100,
    resizeMode:"cover",
    borderRadius:50,
    alignSelf:"center"
   },
   userImageStyleEdit:{
    height:100,
    width:100,
    resizeMode:"cover",
    borderRadius:50,
    alignSelf:"center",
    justifyContent:"flex-end",
    alignItems:"center",
   },
   plusIcon:{
    backgroundColor: Platform.OS == "android" ? "#D3D3D3" : "transparent",
    borderRadius:50
   },
   contentView:{
      paddingTop : Platform.OS == "ios" ? 50 : null,
    margin:20,
    padding:10,
    elevation:5,
    backgroundColor:"#fff"
   },
   contentViewEdit:{
      paddingTop : Platform.OS == "ios" ? 50 : null,
    margin:10,
    padding:10,
    elevation:5,
    backgroundColor:"#fff"
   },
   DetailsViewStyle:{
      padding:10,
      backgroundColor:"#fff",
      marginTop:10
   },
   detailStyle:{
      marginTop:20
   },
   editProfileBTN:{
      backgroundColor:BGR,
      marginHorizontal:20,
      padding:12,
      elevation:5,
      borderRadius:5
   },
   textInputStyle:{
      borderBottomWidth:1,
      borderColor:"#DCDCDC",
      paddingBottom: Platform.OS == "android" ? 1 : 5,
      paddingTop: Platform.OS == "android" ? 3 :5
   },
   updateProfileBTN:{
      backgroundColor:BGR,
      marginHorizontal:20,
      padding:12,
      elevation:5,
      borderRadius:5,
      marginTop:20
   },
   backIcon:{
      padding:10,
      backgroundColor:"transparent"
     },
})

export default Style;