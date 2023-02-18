import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <Button
                OnPress={() => navigation.navigate('Details')}
                title="Click me!"
            />
        </View>
    );
};

export default Home;