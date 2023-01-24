import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import { Txt } from '../../Utils/general'
import { User_Img } from '../../Utils/Import'

export default function ProfileScreen({navigation}) {
  const editProfile = () => {
    navigation.navigate("EditProfile");
  }
  return (
    <ScrollView style={Style.background}>
      <View style={Style.contentView}>
        <View>
          <Image source={User_Img} style={Style.userImageStyle} />
        </View>
        <View style={Style.DetailsViewStyle}>
          <Txt s={18} a="c" c="ttl" w="500">Faiz Saifi</Txt>
          
          <View style={Style.detailStyle}>
            <Txt s={16} c="ttl" w="500">About</Txt>
            <Txt s={15} w="600">
              Owner of AR. I will manage everything in AR. List your store asap and get discount.
              Handling approx 230 clients.
            </Txt>
          </View>

          <View style={Style.detailStyle}>
            <Txt s={16} c="ttl" w="500">Designation</Txt>
            <Txt s={15} w="600">Admin</Txt>
          </View>

          <View style={Style.detailStyle}>
            <Txt s={16} c="ttl" w="500">Age</Txt>
            <Txt s={15} w="600">30</Txt>
          </View>

          <View style={Style.detailStyle}>
            <Txt s={16} c="ttl" w="500">Head Office</Txt>
            <Txt s={15} w="600">U.A.E</Txt>
          </View>
          
          <View style={Style.detailStyle}>
            <Txt s={16} c="ttl" w="500">Contact Number</Txt>
            <Txt s={15} w="600">+971-5289547811</Txt>
          </View>

          <View style={Style.detailStyle}>
            <Txt s={16} c="ttl" w="500">Email</Txt>
            <Txt s={15} w="600">aradmin@ar.com</Txt>
          </View>

        </View>
      </View>
      <TouchableOpacity style={Style.editProfileBTN} onPress={() => editProfile()}>
            <Txt c="w" a="c" s={15} w="500">Edit Profile</Txt>
      </TouchableOpacity>
    </ScrollView>
  )
}