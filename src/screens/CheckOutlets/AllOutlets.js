import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { Txt } from '../../Utils/general'
import { TXTC, BGC } from '../../Utils/Import'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function AllOutlets({ navigation }) {
    const [data, setData] = useState([
        { id: 0, name: "Outlet First", address: "Jalandhar, Punjab, India", status: 0 },
        { id: 1, name: "Outlet Second", address: "Mohali, Punjab, India", status: 1 },
        { id: 2, name: "Outlet Third", address: "Rohini, Delhi, India", status: 1 },
        { id: 3, name: "Outlet Forth", address: "Ambala, Haryana, India", status: 0 },
        { id: 4, name: "Outlet Fifth", address: "Panipat, Haryana, India", status: 1 },
        { id: 5, name: "Outlet Sixth", address: "Noida, UP, India", status: 0 },
        { id: 6, name: "Outlet Seventh", address: "Gurugram, Haryana, India", status: 1 },
        { id: 7, name: "Outlet Eighth", address: "Montreal, Qubec, Canada", status: 1 },
        { id: 8, name: "Outlet Ninth", address: "Street 5, London, UK", status: 1 },
        { id: 9, name: "Outlet Tenth", address: "Surrey, Canada", status: 1 },
    ])
    const OpenStoreDetail = () => {
        navigation.navigate("OutletScreen");
    }
    const goBack = () => {
        navigation.goBack();
    }
    const renderItem = (item) => {
        return (

            <TouchableOpacity style={Style.flatView} onPress={() => OpenStoreDetail()}>
                <View style={Style.flatMain}>
                    <View>
                        <Txt c="ttl" w="700" s={19} mt={10}>{item.name}</Txt>
                        <Txt c="ttl" w="500" s={12} mb={10}>{item.address}</Txt>
                        {
                            item.status == 1 ?
                                <Txt c="gr" w="500" s={12}>
                                    Status: Open
                                </Txt> :
                                <Txt c="rd" w="500" s={12}>
                                    Status: Close
                                </Txt>

                        }
                    </View>
                    <View style={Style.nextIcon}>
                        <MaterialIcons size={22} color={BGC} name="arrow-forward-ios" />
                    </View>

                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View style={Style.background}>
            <View style={Style.contentView}>
                <View style={Style.searchViewStyle}>
                    <TouchableOpacity style={Style.backIcon} onPress={() => goBack()}>
                        <MaterialIcons size={20} color="#555" name="arrow-back-ios" />
                    </TouchableOpacity>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Search outlet by City or Country"
                    />
                    <MaterialIcons size={20} color="#555" name="search" />
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}