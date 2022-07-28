/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard, SectionField } from '../../components';
import IconButton from '../../components/IconButton';
import LineDivider from '../../components/LineDivider';
import TextButton from '../../components/TextButton';
import VerticalCourseCard from '../../components/VerticalCourseCard';
import { COLORS, constants, dummyData, FONTS, icons, images, SIZES } from '../../constants';

const Home = () => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* greetings */}
                <View style={{
                    flex: 1,
                }}>
                    <Text
                        style={{
                            ...FONTS.h2
                        }}
                    >
                        Hello, Programmer!
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray50,
                            ...FONTS.body3,
                        }}
                    >
                        Thursday, 28th June 2022
                    </Text>
                </View>

                {/* Notification */}
                <IconButton
                    icon={icons.notification}
                    iconStyle={{
                        tintColor: COLORS.black,
                    }}
                />
            </View>
        )
    }

    function renderStartLearningSection() {
        return (
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start', //render of the all items starts from the left side
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                }}
                imageStyle={{
                    borderRadius: SIZES.radius,
                }}
            >

                {/* Info */}
                <View>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.body3,
                        }}
                    >
                        HOW TO
                    </Text>

                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h2,
                        }}
                    >
                        Make your brand more visible with our checklist
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.radius,
                            color: COLORS.white,
                            ...FONTS.body4,
                        }}
                    >
                        By Scott Harris
                    </Text>
                </View>

                {/* Image */}
                <Image
                    source={images.start_learning}
                    style={{
                        width: '100%',
                        marginTop: SIZES.radius,
                        height: 110,
                    }}
                />

                {/* Button */}
                <TextButton
                    label="Start Learning"
                    labelStyle={{
                        color: COLORS.black,
                        ...FONTS.h3,
                    }}
                    contentContainerStyle={{
                        borderRadius: SIZES.padding,
                        height: 40,
                        paddingHorizontal: SIZES.padding,
                        backgroundColor: COLORS.white,
                    }}
                />

            </ImageBackground>
        )
    }

    function renderCourses() {
        return (
            <FlatList
                data={dummyData.courses_list_1}
                listKey="Courses"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding,
                }}
                keyExtractor={(item) => `Courses-${item.id}`}
                renderItem={({ item, index }) => (
                    <VerticalCourseCard
                        course={item}
                        containerStyle={{
                            marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index === dummyData.courses_list_1.length - 1 ? SIZES.radius : 0,
                        }}
                    />
                )}
            />
        )
    }

    function renderCategories() {
        return (
            <SectionField
                title="Categories"
            >
                <FlatList
                    data={dummyData.categories}
                    listKey="Categories"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.padding,
                    }}
                    keyExtractor={(item) => `Categories-${item.id}`}
                    renderItem={({ item, index }) => (
                        <CategoryCard
                            category={item}
                            containerStyle={{
                                marginLeft: index === 0 ? SIZES.padding : SIZES.base,
                                marginRight: index === dummyData.categories.length - 1 ? SIZES.radius : 0,
                            }}
                        />
                    )}
                />
            </SectionField>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {/* render header */}
            {renderHeader()}

            {/* render content */}

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 150,
                }}
                showsVerticalScrollIndicator={false}
            >

                {/* render start Learning section */}
                {renderStartLearningSection()}

                {/* render courses */}
                {renderCourses()}

                <LineDivider
                    lineStyle={{
                        marginVertical: SIZES.padding,
                    }}
                />

                {/* render categories */}
                {renderCategories()}

            </ScrollView>

        </View>
    )
}

export default Home;