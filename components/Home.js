import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import colors from '../assets/colors/colors/';
import Feather from '@expo/vector-icons/Feather';
import activitiesData from "../assets/Data/activitiesData";
import discoveryCategoriesData from "../assets/Data/discoveryCategoriesData";
import learnMoreData from "../assets/Data/learnMoreData";
import discoveryData from "../assets/Data/discoveryData";
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from "../assets/Images/person.png";

const Home = ({navigation}) => {
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
})

export default Home;