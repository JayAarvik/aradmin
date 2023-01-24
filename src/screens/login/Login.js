import { View, Text, Image, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react';
import Style from './Style';
import { BGC, BGI, TXTC } from '../../Utils/Import';
import { InTextwithbtn, Tcho, Txt } from '../../Utils/general';

export default function Login({navigation}) {
    const [no, setNo] = useState("");
    const [e_no, setE_No] = useState("");
    const goToHome = () => {
        navigation.navigate("Tabs")
    }
    return (
        <View style={Style.background}>
            <Image source={BGI} style={Style.bgImage} />
            <View style={Style.contentView}>
                <Txt s={21} w="700" c="ttl" pt={10}>LOGIN</Txt>
                <Txt s={13} w="500" c="g" pt={1}>Login account to manage orders</Txt>
                {/* <InTextwithbtn
                    style={{marginTop:10}}
                    numberPhone
                    keyboard="phone"
                    placeholder="Enter your email"
                    length={10}
                    onChangeText={txt => {
                            setNo(txt),
                            setE_No("")
                        }}
                /> */}

                <TextInput 
                    placeholder='Enter your email'
                    style={Style.textInputStyle}
                />
                <TextInput 
                    placeholder='Password'
                    style={Style.textInputStyle}
                />

                <Tcho wd={"100%"} mt={30} bg={BGC} ht={40} br={5}
                    onPress={() => goToHome()}
                >
                    <Txt a="c" pt={2} c="w" w="400">CONTINUE</Txt>
                </Tcho>

                <Txt a="c" s={12} mt={10} c="g" w="500">
                    I accept the <Txt s={12} c="ttl" w="500">Terms & Conditions </Txt> 
                    and 
                    <Txt s={12} c="ttl" w="500"> Privacy Policy</Txt>
                </Txt>

            </View>
        </View>
    )
}