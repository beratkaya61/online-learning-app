/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const VerticalCourseCard = ({ containerStyle, course }) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle,
                width: 270,
            }}
        >
            {/* Course Image */}
            <Image
                source={course.thumbnail}
                style={{
                    width: '100%',
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: SIZES.radius,
                    marginBottom: SIZES.radius,
                }}
            />

            {/* Course Details */}
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                {/* Play Image */}
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.padding,
                        backgroundColor: COLORS.primary,
                        width: 40,
                        height: 40,
                    }}
                >
                    <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </View>

                {/* Course Title */}
                <View
                    style={{
                        flexShrink: 1,
                        paddingHorizontal: SIZES.radius,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3,
                        }}
                    >
                        {course.title}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginTop: 10,
                        }}>

                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.gray30,
                                resizeMode: 'contain',
                            }}
                            source={icons.time}
                        />
                        <Text
                            style={{
                                ...FONTS.body3,
                                color: COLORS.gray30,
                                marginLeft: SIZES.base,
                            }}>{course.duration}</Text>
                    </View>
                </View>

            </View>

            <Text></Text>

        </TouchableOpacity>
    )
}

export default VerticalCourseCard