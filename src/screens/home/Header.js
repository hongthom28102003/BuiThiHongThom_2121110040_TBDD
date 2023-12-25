import React from 'react'
import avatar from '../../assets/images/2b5b8866c457110948463.jpg'
import bag from '../../assets/images/bag2.png'
import { Image, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"; // Để sử dụng icon

const Header = () => {
    return (
        <View className="py-5 border-b border-[#e8e9eb]">
            <View className="flex flex-row justify-between items-center">
                <View>
                    <Image className="w-10 h-10 rounded-full" source={avatar} />
                </View>
                <View className="">
                    <Text className="font-bold text-red-500 pl-10 text-xl text-center">
                        HongThom
                    </Text>
                </View>
                <View>
                    <View className="flex flex-row items-center gap-6">
                        <View className="relative flex items-center justify-center rounded-full bg-purple-500 w-10 h-10">
                            <Icon name='shopping-bag' color={"white"} className="text-2xl w-20"/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header