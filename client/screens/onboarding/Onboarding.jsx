import React from 'react';
import Swiper from 'react-native-swiper';
import { View, StyleSheet } from 'react-native';
import { Screen1, Screen2, Screen3 } from './OnboardingScreens';

const Onboarding = (props) => {
    return (
        <View style={styles.container}>
            <Swiper>
                <Screen1 {...props} />
                <Screen2 {...props} />
                <Screen3 {...props} />
            </Swiper>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Onboarding;