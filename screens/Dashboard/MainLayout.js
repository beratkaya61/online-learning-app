/* eslint-disable no-shadow */
/* eslint-disable space-infix-ops */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { Home, Profile, Search } from '../../screens';
import { COLORS, constants, FONTS, SIZES } from '../../constants';
import { Shadow } from 'react-native-shadow-2';
import { measure } from 'react-native-reanimated';

const bottom_tabs = constants.bottom_tabs.map(bottom_tab => ({
    ...bottom_tab,
    tabRef: React.createRef(),
}));

const TabIndicator = ({ measureLayout, scrollX }) => {

    const inputRange = measureLayout.map((_, i) => i * SIZES.width);

    const tabIndicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map((measure) => measure.width),
    });

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map((measure, index) => measure.x),
    });

    return (
        <Animated.View
            style={{
                position: 'absolute',
                height: '100%',
                width: tabIndicatorWidth,
                transform: [{ translateX }],
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
            }}
        />
    );
};

const BottomTabs = ({ onBottomTabPress, scrollX }) => {

    const bottomTabsContainerRef = useRef();

    const [layoutMeasure, setLayoutMeasure] = useState([]);

    useEffect(() => {

        let ml = [];

        //in this part, we need to measure the width,height,x,y of each tab and pass them as array to the parent container ref
        bottom_tabs.forEach(bottom_tab => {
            bottom_tab?.tabRef?.current?.measureLayout(bottomTabsContainerRef.current, (x, y, width, height) => {
                ml.push({
                    x,
                    y,
                    width,
                    height,
                });

                if (ml.length === bottom_tabs.length) {
                    setLayoutMeasure(ml);
                }
            });
        });

    }, [bottomTabsContainerRef.current]);

    return (
        <View
            ref={bottomTabsContainerRef}
            style={{
                flex: 1,
                flexDirection: 'row',
            }}>

            {/*Tab Indicator */}
            {
                layoutMeasure.length > 0 &&
                <TabIndicator
                    measureLayout={layoutMeasure}
                    scrollX={scrollX}
                />
            }

            {bottom_tabs.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={`BottomTab-${item.id}`}
                        ref={item.tabRef}
                        style={{
                            flex: 1,
                            paddingHorizontal: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => onBottomTabPress(index)}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        <Text
                            style={{
                                marginTop: 3,
                                color: COLORS.white,
                                ...FONTS.h3,
                            }}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const MainLayout = () => {
    const flatlistRef = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;

    const onBottomTabPress = useCallback(
        (bottomTabIndex) => {
            flatlistRef?.current?.scrollToIndex({
                index: bottomTabIndex,
            });
        }, []);

    function renderScreenContent() {
        return (
            <View style={{ flex: 1 }}>
                <Animated.FlatList
                    ref={flatlistRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    //scrollEnabled={false}
                    snapToAlignment="center"
                    snapToInterval={SIZES.width}
                    decelerationRate="fast"
                    data={constants.bottom_tabs}
                    keyExtractor={item => `Main-${item.id}`}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }, //if it is true, some feature like {width} not catch from animation
                        )
                    }
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: SIZES.width,
                                height: SIZES.height,
                            }}>
                            {item.label === constants.screens.home && <Home />}
                            {item.label === constants.screens.search && <Search />}
                            {item.label === constants.screens.profile && <Profile />}
                        </View>
                    )}
                />
            </View>
        );
    }

    function renderBottomTabContainer() {
        return (
            <View
                style={{
                    marginBottom: 20,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.radius,
                }}>
                <Shadow size={[SIZES.width - SIZES.padding * 2, 85]}>
                    <View
                        style={{
                            flex: 1,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary3,
                        }}>
                        <BottomTabs
                            onBottomTabPress={onBottomTabPress}
                            scrollX={scrollX}
                        />
                    </View>
                </Shadow>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            {/* render screen content */}
            {renderScreenContent()}

            {/* render bottom tab container */}
            {renderBottomTabContainer()}
        </View>
    );
};

export default MainLayout;
