/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../constants'

const CategoryCard = ({
    category,
    containerStyle,
}) => {
    return (
        <TouchableOpacity>
            <ImageBackground
                source={category?.thumbnail}
                resizeMode="cover"
                style={{
                    ...containerStyle,
                    height: 150,
                    width: 200,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    justifyContent: 'flex-end',
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        color: COLORS.white,
                    }}
                >
                    {category?.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CategoryCard