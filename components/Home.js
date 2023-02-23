import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors/';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
    }
})

export default Home;