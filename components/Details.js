import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={item.imageBig} 
                style={styles.backgroundImage}>
                    <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-chevron-back" size={32} color= {colors.white} />
                    </TouchableOpacity>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.locationWrapper}>
                        <Ionicons name="location" size={24} color={colors.white}/>
                        <Text style={styles.locationText}></Text>
                        </View>

                    </View>
                </ImageBackground>
            <View style={styles.descriptionWrapper}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between',
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60,
    },
    tittlesWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    itemTitle: {},
    locationWrapper: {},
    locationText: {},
});

export default Details;