/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HorizontalCourseCard = ({ containerStyle, course }) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle,
                flexDirection: 'row',
            }}>
            <ImageBackground
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: 130,
                    height: 130,
                }}
                imageStyle={{
                    borderRadius: SIZES.radius,
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: COLORS.white,
                        width: 30,
                        height: 30,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={icons.favourite}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: course.is_favourite ? COLORS.secondary : COLORS.additionalColor4,
                        }}
                    />
                </View>
            </ImageBackground>

            {/* Details */}
            <View
                style={{
                    flex: 1,
                    marginLeft: SIZES.base,
                    //flexShrink: 1,
                }}
            >

                {/* Title */}
                <Text
                    style={{
                        ...FONTS.h3,
                        fontSize: 18,
                        width: '90%',
                    }}
                >
                    {course.title}
                </Text>

                {/* Instructor & Duration */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.base,
                    }}
                >
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.gray30,
                    }}>
                        By {course.instructor}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: SIZES.base,
                        }}>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.gray30,
                                resizeMode: 'contain',
                            }}
                            source={icons.time}
                        />
                        <Text
                            style={{
                                ...FONTS.body4,
                                color: COLORS.gray30,
                                marginLeft: SIZES.base,
                            }}>
                            {course.duration}
                        </Text>
                    </View>
                </View>


                {/* Price and ranking */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.base,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.primary,
                            ...FONTS.h2,
                        }}
                    >
                        ₺ {course.price.toFixed(2)}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: SIZES.radius,
                        }}>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.primary2,
                                resizeMode: 'contain',
                            }}
                            source={icons.star}
                        />
                        <Text
                            style={{
                                ...FONTS.h3,
                                color: COLORS.black,
                                marginLeft: SIZES.base,
                            }}>
                            {course.ratings}
                        </Text>
                    </View>

                </View>

            </View>

        </TouchableOpacity>
    )
}

export default HorizontalCourseCard;