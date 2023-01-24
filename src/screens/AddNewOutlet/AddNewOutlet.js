import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Style from './Style'
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Txt } from '../../Utils/general';
import { BGC } from '../../Utils/Import';

export default function AddNewOutlet({navigation}) {
    const addOutletPhoto = () => {
        ImagePicker.openPicker({
            width: 500,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          }).catch((error) => console.log(error));
    }
    const AddStoreNow = () => {
        console.log("New Store Added");
    }
    const goBack = () => {
        navigation.goBack();
    }
  return (
    <ScrollView style={Style.background}>
        <TouchableOpacity style={Style.backIcon} onPress={() => goBack()}>
                        <MaterialIcons size={20} color="#555" name="arrow-back-ios" />
                    </TouchableOpacity>
        <View style={Style.contentView}>
                <TouchableOpacity style={Style.addPhotoStyle} onPress={() => addOutletPhoto()}>
                    <MaterialIcons size={30} color={BGC} name="add-circle-outline" />
                </TouchableOpacity>
                <Txt a="c" c="g" w="500" s={11}>Add Outlet/Store Photo</Txt>

                <View style={Style.detailView}>
                    <Txt w="500" c="ttl" s={15} mt={10}>Outlet Name</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Enter Outlet Name"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Outlet Manager Name</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Enter Outlet Manager Name"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Outlet Address</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Enter Outlet Address"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Outlet Product type</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Grocery, Confectionery, Clothes etc.."
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Outlet Number</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="1, 2, 3.."
                    />
                    <TouchableOpacity style={Style.addNowStyle} onPress={() => AddStoreNow()}>
                        <Txt c="w" w="500" s={15}>Add Outlet Now</Txt>
                    </TouchableOpacity>
                </View>
        </View>
    </ScrollView>
  )
}