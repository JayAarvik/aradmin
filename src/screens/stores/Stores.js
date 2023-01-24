import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { Txt } from '../../Utils/general'
import { TXTC, BGC } from '../../Utils/Import'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Stores({navigation}) {
    const [data, setData] = useState([
        { id: 0, name: "Store one", branches: 3, status: 0 },
        { id: 1, name: "Store two", branches: 10, status: 1 },
        { id: 2, name: "Store three", branches: 5, status: 1 },
        { id: 3, name: "Store four", branches: 50, status: 0 },
        { id: 4, name: "Store five", branches: 9, status: 1 },
        { id: 5, name: "Store six", branches: 5, status: 1 },
        { id: 6, name: "Store seven", branches: 50, status: 0 },
        { id: 7, name: "Store eight", branches: 9, status: 0 },
    ])
    const OpenStoreDetail = () => {
        navigation.navigate("StoreScreen");
    }
    const renderItem = (item) => {
        return (

            <TouchableOpacity style={Style.flatView} onPress={() => OpenStoreDetail()}>
                <View style={Style.flatMain}>
                    <View>
                        <Txt c="ttl" w="700" s={19} mt={10}>{item.name}</Txt>
                        <Txt c="ttl" w="500" s={12} mb={10}>Total Outlets: {item.branches}</Txt>
                        {
                            item.status == 1 ?
                                <Txt c="gr" w="500" s={12}>
                                    Status: Active
                                </Txt> :
                                <Txt c="rd" w="500" s={12}>
                                    Status: Inactive
                                </Txt>

                        }
                    </View>
                    <View style={Style.nextIcon}>
                        <MaterialIcons size={22} color="#555" name="arrow-forward-ios" />
                    </View>

                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View style={Style.background}>
            <View style={Style.contentView}>
                <View style={Style.searchViewStyle}>
                    <TextInput
                        style={Style.textInputStyle}
                        placeholder="Search store by name"
                    />
                    <MaterialCommunityIcons size={20} color="#555" name="store-search-outline" />
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