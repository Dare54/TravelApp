import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import colors from '../assets/colors/colors/';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Button
                onPress={() => navigation.navigate("Details")}
                title="Click here"
            />
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