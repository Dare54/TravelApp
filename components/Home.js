import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import colors from '../assets/colors/colors/';
import Feather from '@expo/vector-icons/Feather';
import activitiesData from "../assets/Data/activitiesData";
import discoverCategoriesData from "../assets/Data/discoverCategoriesData";
import learnMoreData from "../assets/Data/learnMoreData";
import discoverData from "../assets/Data/discoverData";
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from "../assets/Images/person.png";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

    const renderDiscoverItem = () => {
        return (
            <TouchableOpacity>
                
            </TouchableOpacity>
        )
    }

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
        marginHorizontal:20,
        marginTop:20,
    },

    discoverTitle: {
        fontFamily: 'Lato-Bold',
        fontSize:32,
    },
    discoverCategoriesWrapper: {
        flexDirection: 'row',
        marginTop:20,
    },
    discoverCategoryText: {
        marginRight:30,
        fontFamily: 'Lato-Regular',
        fontSize:16,
        color:colors.grey
    },
})

export default Home;