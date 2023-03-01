import { View, Text, Image, TextInput, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Style from './Style';
import { BGC, BGI, BGR, TXTC } from '../../Utils/Import';
import { InTextwithbtn, Tcho, Txt } from '../../Utils/general';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StoreScreen({ navigation }) {
    const [no, setNo] = useState("");
    const [e_no, setE_No] = useState("");
    const goToHome = () => {
        console.log("Add Outlet");
    }
    const goBack = () => {
        navigation.goBack();
    }
    const AddOutlet = () => {
        navigation.navigate("AddNewOutlet");
    }
    const openOutlets = () => {
        navigation.navigate("AllOutlets");
    }
    const EditStoreDetails = () => {
        navigation.navigate("EditStore");
    }
    return (
        <ScrollView style={Style.background}>
            <ImageBackground source={BGI} style={Style.bgImage}>
                <View style={Style.upperBtns}>
                    <TouchableOpacity style={Style.backIcon} onPress={() => goBack()}>
                        <MaterialIcons size={20} color="#555" name="arrow-back-ios" />
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.editIcon} onPress={() => EditStoreDetails()}>
                        <MaterialCommunityIcons size={25} color="#fff" name="store-edit-outline" />
                    </TouchableOpacity>
                </View>
                <View style={Style.brandNameStyle}>
                    <Txt s={21} w="700" c="w" pt={10}>Store name</Txt>
                    <Txt s={13} w="500" c="w" pt={1}>Store available in Canada</Txt>
                </View>
            </ImageBackground>

            <View style={Style.contentView}>
                <Txt w="500">Tune in to the Make it Big Podcast — our thought leadership audio series
                    for retailers, entrepreneurs and ecommerce professionals.
                    You'll get expert insights, strategies and tactics to help
                    grow your business.
                </Txt>
                <View style={Style.borderLine}></View>

                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Owner</Txt>
                    <Txt w="600">Mr. Jay</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Store Id</Txt>
                    <Txt w="600">432434</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Head Office</Txt>
                    <Txt w="600">Canada</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Product Type</Txt>
                    <Txt w="600">All</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Total Outlets</Txt>
                    <Txt w="600">5</Txt>
                </View>

                <Tcho wd={"100%"} mt={30} ht={40} br={5}
                    onPress={() => openOutlets()}
                >
                    <Txt a="c" pt={2} c="bgr" w="600">Check Outlets</Txt>
                </Tcho>
                <Tcho wd={"100%"} mt={5} bg={BGR} ht={40} br={5}
                    onPress={() => AddOutlet()}
                >
                    <Txt a="c" pt={2} c="w" w="400">Add Outlet</Txt>
                </Tcho>
            </View>

        </ScrollView>
    )
}