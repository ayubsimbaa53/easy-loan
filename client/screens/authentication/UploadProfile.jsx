import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from '../../components/widgets/Button';
import ImagePicker from '../../components/widgets/ImagePicker';
import BottomSheet from '../../components/widgets/BottomSheet';


const UploadProfile = ({ navigation }) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const bottomSheetRef = useRef(null);

    const [data, setData] = React.useState({
        profilePhoto: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    // To Open Bottom Sheet..
    // const handleSnapPress = React.useCallback((index) => {
    //     bottomSheetRef.current?.snapToIndex(index);
    //     setIsBottomSheetOpen(0);
    // }, []);

    // Alternative Way to Open Bottom Sheet..
    const handleBottomSheetOpen = () => {
        bottomSheetRef.current?.expand();
        setIsBottomSheetOpen(true);
    };

    const handleBottomSheetClose = () => {
        bottomSheetRef.current?.close();
        setIsBottomSheetOpen(false);
    };

    const textInputChange = (value, type) => {
        // Email text on change..
        if (type === 'EMAIL') {
            if (value.length !== 0) {
                setData({
                    ...data,
                    email: value,
                    check_textInputChange: true
                });
            } else {
                setData({
                    ...data,
                    email: value,
                    check_textInputChange: false
                });
            }
        }
        // Password on change text..
        if (type === 'PASSWORD') {
            setData({
                ...data,
                password: value
            });
        }
    };

    // Secure Text Entry Updating Function..
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/post1.jpg')}
        >
            <StatusBar style="light" />

            {/* ---- Header ---- */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Select Profile Photo</Text>
            </View>

            {/* ---- Footer ---- */}
            <Animatable.View
                style={[styles.footer, { opacity: !isBottomSheetOpen ? 1 : 0.25 }]}
                animation="fadeInUpBig"
            >
                <View style={{ alignItems: 'center' }}>
                    <ImagePicker
                        image={require('../../assets/images/avatar-male.png')}
                        height={200}
                        width={200}
                        onPress={() => handleBottomSheetOpen()}
                    />
                </View>


                {/* ---- Buttons ---- */}
                <View style={{ marginTop: 30 }}>
                    <Button
                        title="Continue"
                        color1st="lightgreen"
                        color2nd="green"
                        size={18}
                        textColor="white"
                        width="100%"
                        height={50}
                        onPress={() => navigation.navigate("MainTabs")}
                    />
                </View>
            </Animatable.View>

            {/* ---- The Bottom Sheet here ---- */}
            <BottomSheet
                bottomSheetRef={bottomSheetRef}
                setIsOpen={setIsBottomSheetOpen}
                snapPoint="40%"
            // handleSnapPress={handleSnapPress}
            >
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>Upload Profile</Text>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Take Photo"
                            color1st="yellow"
                            color2nd="orange"
                            size={20}
                            height={50}
                            width="100%"
                            textColor="black"
                            onPress={() => alert('Take Photo!')}
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Upload Profile"
                            color1st="royalblue"
                            color2nd="blue"
                            size={20}
                            height={50}
                            width="100%"
                            textColor="white"
                            onPress={() => alert('Take Photo!')}
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Cancel"
                            color1st="brown"
                            color2nd="red"
                            size={20}
                            height={50}
                            width="100%"
                            textColor="white"
                            onPress={() => handleBottomSheetClose()}
                        />
                    </View>
                </View>
            </BottomSheet>
        </ImageBackground>
    );
};


// Styling Part..
// @override from Splash Screen..
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'royalblue',
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 30,
        color: '#05375a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontweight: 'bold',
    }
});

export default UploadProfile;