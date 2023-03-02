import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import colors from '../assets/colors/colors/';
import Feather from '@expo/vector-icons/Feather';
import activitiesData from "../assets/Data/activitiesData";
import discoverCategoriesData from "../assets/Data/discoverCategoriesData";
import learnMoreData from "../assets/Data/learnMoreData";
import discoverData from "../assets/Data/discoverData";
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from "../assets/Images/person.png";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = ({navigation}) => {

    const renderDiscoverItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => 
                   navigation.navigate ('Details', {
                    item: item,
                   })
                }
                >
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem, {marginLeft: item.id === 'discover-1' ? 20 : 0},
                    ]}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Ionicons name="location" size={24} color={colors.white}/>
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivityItem = ({item}) => {
        return (
            <View style={[styles.activityItemWrapper,
                {
                    marginLeft: item.id === 'activities-1' ?20 : 0,
                },
            ]}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        );  
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather
                            name="menu"
                            size={32}
                            color={colors.black}
                            style={styles.menuIcon}
                        />
                        <Image source={profile} style={styles.profileImage} />
                    </View>
                </SafeAreaView>

                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                       <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>All</Text>
                       <Text style={styles.discoverCategoryText}>Destinations</Text>
                       <Text style={styles.discoverCategoryText}>Cities</Text>
                       <Text style={styles.discoverCategoryText}>Experiences</Text> 
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                        data={discoverData}
                        renderItem={renderDiscoverItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList
                        data={activitiesData}
                        renderItem={renderActivityItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View> 

            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop:20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height:52,
        borderRadius:10,
    },
    discoverWrapper: {
        //marginHorizontal:20,
        marginTop:20,
    },

    discoverTitle: {
        marginHorizontal:20,
        fontFamily: 'Lato-Bold',
        fontSize:32,
    },
    discoverCategoriesWrapper: {
        marginHorizontal:20,
        flexDirection: 'row',
        marginTop:20,
    },
    discoverCategoryText: {
        marginRight:30,
        fontFamily: 'Lato-Regular',
        fontSize:16,
        color:colors.grey
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.white,
    },
    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    activityItemImage: {
        width: 36,
    },
    activityItemText: {
        marginTop: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.grey,
    },
});

export default Home;