import { View, Text, Image, TextInput, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Style from './Style';
import { BGC, BGI, TXTC } from '../../Utils/Import';
import { InTextwithbtn, Tcho, Txt } from '../../Utils/general';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OutletScreen({ navigation }) {
    const [no, setNo] = useState("");
    const [e_no, setE_No] = useState("");
    const goToHome = () => {
        console.log("Add Outlet");
    }
    const goBack = () => {
        navigation.goBack();
    }
    const EditOutlet = () => {
        navigation.navigate("EditOutlet");
    }
    const openOutlets = () => {
        navigation.navigate("AllOutlets");
    }
    return (
        <ScrollView style={Style.background}>
            <ImageBackground source={BGI} style={Style.bgImage}>
                <View style={Style.upperBtns}>
                    <TouchableOpacity style={Style.backIcon} onPress={() => goBack()}>
                        <MaterialIcons size={20} color="#555" name="arrow-back-ios" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={Style.editIcon} onPress={() => goBack()}>
                        <MaterialCommunityIcons size={25} color="#fff" name="store-edit-outline" />
                    </TouchableOpacity> */}
                </View>
                <View style={Style.brandNameStyle}>
                    <Txt s={21} w="700" c="w" pt={10}>Brand/Store/Outlet name</Txt>
                    <Txt s={13} w="500" c="w" pt={1}>Outlets available in multiple countries</Txt>
                </View>
            </ImageBackground>

            <View style={Style.contentView}>
                {/* <Txt w="500">Tune in to the Make it Big Podcast — our thought leadership audio series
                    for retailers, entrepreneurs and ecommerce professionals.
                    You'll get expert insights, strategies and tactics to help
                    grow your business.
                </Txt> */}
                {/* <View style={Style.borderLine}></View> */}

                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Manager of this Outlet</Txt>
                    <Txt w="600">Mr. Jay</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Outlet Number</Txt>
                    <Txt w="600">6</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Address</Txt>
                    <Txt w="600">Canada</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Outlet Products</Txt>
                    <Txt w="600">All</Txt>
                </View>
                <View>
                    <Txt c="ttl" s={18} w="600" mt={20}>Opening on</Txt>
                    <Txt w="600">29-April-1991</Txt>
                </View>

                {/* <Tcho wd={"100%"} mt={30} ht={40} br={5}
                    onPress={() => openOutlets()}
                >
                    <Txt a="c" pt={2} c="rd" w="600">Check Outlets</Txt>
                </Tcho> */}
                <Tcho wd={"100%"} mt={35} bg={BGC} ht={40} br={5}
                    onPress={() => EditOutlet()}
                >
                    <Txt a="c" pt={2} c="w" w="400">Edit Outlet Details</Txt>
                </Tcho>
            </View>

        </ScrollView>
    )
}