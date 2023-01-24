import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Style from './Style'
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Txt } from '../../Utils/general';
import { BGC } from '../../Utils/Import';

export default function EditStore({navigation}) {
    const addStorePhoto = () => {
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
                <TouchableOpacity style={Style.addPhotoStyle} onPress={() => addStorePhoto()}>
                    <MaterialIcons size={30} color={BGC} name="add-circle-outline" />
                </TouchableOpacity>
                <Txt a="c" c="g" w="500" s={11}>Edit Store Photo</Txt>

                <View style={Style.detailView}>
                    <Txt w="500" c="ttl" s={15} mt={10}>Store/Brand Name</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Edit Store Name"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Store Owner Name</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Edit Store Owner Name"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Head Office</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Edit Head Office Address"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Product type</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Edit Product type"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Total Outlets</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Enter Outlets"
                    />
                    <Txt w="500" c="ttl" s={15} mt={20}>Store Description</Txt>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Edit Store Description"
                        multiline
                    />
                    <TouchableOpacity style={Style.addNowStyle} onPress={() => AddStoreNow()}>
                        <Txt c="w" w="500" s={15}>Update Store Details</Txt>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}