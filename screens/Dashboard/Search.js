/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';

import TextButton from '../../components/TextButton';

import { FlatList } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';

import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';

import { COLORS, constants, dummyData, FONTS, icons, images, SIZES } from '../../constants';
import { CategoryCard } from '../../components';

const Search = () => {

    const scrollViewRef = useRef(null);

    function renderTopSearchBar() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                    }}
                >Top Searches</Text>
                <FlatList
                    data={dummyData.top_searches}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    listKey="Top Searches"
                    keyExtractor={(item) => `Top Searches ${item.id}`}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                    }}
                    renderItem={({ item, index }) => (
                        <TextButton
                            contentContainerStyle={{
                                paddingVertical: SIZES.radius,
                                paddingHorizontal: SIZES.padding,
                                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index === dummyData.top_searches.length - 1 ? SIZES.padding : 0,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.gray10,
                            }}
                            label={item.label}
                            labelStyle={{
                                ...FONTS.h3,
                                color: COLORS.gray50,
                            }}
                        />
                    )}
                />
            </View>
        )
    }

    function renderBrowseCategories() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                    }}
                >Browse Categories</Text>
                <FlatList
                    data={dummyData.categories}
                    keyExtractor={(item) => `Browse Categories ${item.id}`}
                    listKey="Browse Categories"
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    numColumns={2}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                    }}
                    renderItem={({ item, index }) => (
                        <CategoryCard
                            category={item}
                            containerStyle={{
                                marginTop: SIZES.radius,
                                height: 130,
                                width: (SIZES.width - (SIZES.padding * 2) - SIZES.base) / 2,
                                marginLeft: index % 2 === 1 ? SIZES.base : SIZES.padding,
                            }}
                        />
                    )}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >

            <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{
                    marginTop: 100,
                    paddingBottom: 300,
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
            >

                {/*Top Search Bar */}
                {renderTopSearchBar()}

                {/*Browse Categories */}
                {renderBrowseCategories()}

            </Animated.ScrollView>
        </View>
    )
}

export default Search;