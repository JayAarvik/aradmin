import { StyleSheet } from "react-native"
import { BGC } from "../../Utils/Import";

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
    backgroundColor:"#D3D3D3",
    borderRadius:50
   },
   contentView:{
    margin:20,
    padding:10,
    elevation:5,
    backgroundColor:"#fff"
   },
   contentViewEdit:{
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
      backgroundColor:BGC,
      marginHorizontal:20,
      padding:12,
      elevation:5,
      borderRadius:5
   },
   textInputStyle:{
      borderBottomWidth:1,
      borderColor:"#DCDCDC",
      paddingBottom:1,
      paddingTop:3
   },
   updateProfileBTN:{
      backgroundColor:BGC,
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