/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';
import TextButton from './TextButton';

const SectionField = ({ containerStyle, title, onPress, children }) => {
    return (
        <View
            style={{
                ...containerStyle,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2,
                    }}
                >
                    {title}
                </Text>

                <TextButton
                    onPress={onPress}
                    label="See All"
                    contentContainerStyle={{
                        width: 70,
                        padding: 2,
                        borderRadius: SIZES.padding,
                        backgroundColor: COLORS.primary,
                    }}
                />
            </View>
            
            {children}
        </View>
    );
};

export default SectionField;
