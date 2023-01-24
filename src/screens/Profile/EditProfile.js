import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Style from './Style'
import { Txt } from '../../Utils/general'
import { BGC, User_Img } from '../../Utils/Import'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';

export default function EditProfile({ navigation }) {
    const editImage = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        }).catch((error) => console.log(error));
    }
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <ScrollView style={Style.background}>
            <View style={Style.contentViewEdit}>
            <TouchableOpacity style={Style.backIcon} onPress={() => goBack()}>
                        <MaterialIcons size={20} color="#555" name="arrow-back-ios" />
                    </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => editImage()}>
                        <ImageBackground source={User_Img}
                            style={Style.userImageStyleEdit}
                            borderRadius={50} blurRadius={8}>
                            <MaterialIcons size={30} color={BGC} name="edit" style={Style.plusIcon} />
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={Style.DetailsViewStyle}>

                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>Name</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="Enter Name"
                            />
                        </View>
                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>About</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="About you.."
                                multiline
                            />
                        </View>
                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>Designation</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="Enter Designation"
                            />
                        </View>
                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>Age</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="Enter Age"
                            />
                        </View>
                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>Head Office</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="Enter Head Office Address"
                            />
                        </View>
                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>Contact Number</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="Enter Contact Number"
                            />
                        </View>
                        <View style={Style.detailStyle}>
                            <Txt w="500" c="ttl" s={15}>Email</Txt>
                            <TextInput
                                style={Style.textInputStyle}
                                placeholder="Enter email"
                            />
                        </View>

                    </View>
                    <TouchableOpacity style={Style.updateProfileBTN}>
                        <Txt c="w" a="c" s={15} w="500">Update Profile</Txt>
                    </TouchableOpacity>
            </View>

        </ScrollView>
    )
}