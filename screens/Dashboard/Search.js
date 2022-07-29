/* eslint-disable react-hooks/rules-of-hooks */
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
    Image,
} from 'react-native';

import TextButton from '../../components/TextButton';

import { FlatList, TextInput } from 'react-native-gesture-handler';
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

    const translationY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
    })

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


    function renderSearchBar() {

        const inputRange = [0, 50];

        const searchBarAnimatedStyle = useAnimatedStyle(() => {
            return {
                height: interpolate(translationY.value,
                    inputRange,
                    [50, 0], //output range for height
                    Extrapolate.CLAMP,
                ),
                //if you want to use the opacity, you may not be able to use the heght property
                opacity: interpolate(translationY.value,
                    inputRange,
                    [1, 0],
                    Extrapolate.CLAMP,
                ),
            };
        });

        return (
            <Animated.View
                style={[{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                }, searchBarAnimatedStyle]}>
                <Shadow>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: SIZES.radius,
                            borderRadius: SIZES.base,
                            width: SIZES.width - (SIZES.padding * 2),
                        }}>
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                tintColor: COLORS.gray40,
                                width: 25,
                                height: 25,
                            }}
                        />

                        <TextInput
                            style={{
                                flex: 1,
                                marginLeft: SIZES.base,
                                ...FONTS.h4,
                            }}
                            placeholder="Search for Topics,Courses & Educations"
                            value=""
                            placeholderTextColor={COLORS.gray}
                        />

                    </View>
                </Shadow>
            </Animated.View>
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
                onScroll={onScroll}
                onScrollEndDrag={(event) => {
                    if (event.nativeEvent.contentOffset.y > 10 &&
                        event.nativeEvent.contentOffset.y < 50) {

                        //When scrollview scroll is ended, scrollview position is less than 50 and more than 10, then it scroll to y=50,
                        //because search bar height is 50 (to hide it)
                        scrollViewRef.current.scrollTo({
                            y: 50, //y position from top of the screen (you must think it as position absolute)
                            animated: true,
                        });
                    }
                }}
            >

                {/*Top Search Bar */}
                {renderTopSearchBar()}

                {/*Browse Categories */}
                {renderBrowseCategories()}
            </Animated.ScrollView>

            {/* Render Search Bar */}
            {renderSearchBar()}

        </View>
    )
}

export default Search;