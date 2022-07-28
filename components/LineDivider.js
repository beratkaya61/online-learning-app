/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const LineDivider = ({ lineStyle }) => {
    return (
        <View 
        style={{
            height: 2,
            backgroundColor: COLORS.gray20,
            width: '100%',
            ...lineStyle,
        }}/>
    )
}

export default LineDivider;