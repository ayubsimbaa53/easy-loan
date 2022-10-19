import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Platform,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Button, OutlineButton } from '../../components/widgets/Button';
// import { checkHealth, login } from '../../API';


// Login Component..
const Login = ({ navigation }) => {
    const [data, setData] = useState({
        phone: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        errorMsg: ''
    });

    // useEffect(() => {
    //     console.log('I am useEffect');
    //     checkHealth();
    // }, []);

    // Displaynig Error Message Dynamically..
    const displayErrorMessage = (msg) => (
        <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{msg}</Text>
        </Animatable.View>
    );

    // Handle Valid Phone here...
    const handleValidPhone = (event) => {
        // Similar to Web like -- (event.target.value).
        const value = event.nativeEvent.text;
        
        if (value.length < 11){
            setData({
                ...data,
                isValidUser: false,
                errorMsg: 'This is not valid Phone Number!'
            });
        }
    };

    const textInputChange = (value, type) => {
        // phone text on change..
        if (type === 'PHONE') {
            if (value.length === 0) {
                setData({
                    ...data,
                    phone: value,
                    check_textInputChange: false,
                    isValidUser: true,
                    errorMsg: ''
                });
            } else {
                if (value.trim().length > 10) {
                    setData({
                        ...data,
                        phone: value,
                        check_textInputChange: true,
                        isValidUser: true,
                        errorMsg: ''
                    });
                } else {
                    setData({
                        ...data,
                        phone: value,
                        check_textInputChange: false,
                        isValidUser: false,
                        errorMsg: 'At least required upper then 10 digit!'
                    });
                }
            }
        }

        // Password on change text..
        if (type === 'PASSWORD') {
            if (value.length === 0) {
                setData({
                    ...data,
                    password: value,
                    isValidPassword: true,
                    errorMsg: ''
                });
            } else {
                if (value.length < 7) {
                    setData({
                        ...data,
                        password: value,
                        isValidPassword: false,
                        errorMsg: 'Password Should be at least 8 characters!'
                    });
                } else {
                    setData({
                        ...data,
                        password: value,
                        isValidPassword: true,
                        errorMsg: ''
                    });
                }
            }
        }
    };

    // Handle Login Click Submit..
    const handleLoginClick = () => {
        const { phone, password, isValidUser, isValidPassword } = data;

        if (phone !== '' && password !== '') {
            if (isValidUser && isValidPassword) {
                const request = login({ phone, password });
                request.then((response) => {
                    const { data } = response;

                    if (!data.isAuth) {
                        alert(data.message);
                    }
                    if (data.isAuth) {
                        // Redirecting to Home Page..
                        navigation.navigate("MainTabs");
                    }
                })
                .catch(error => console.log("ERR! from login -- ", error.message));

            } else {
                alert("Please Make Sure Your Information is Correct.");
            }
        }else{
            alert("Fields Are Empty!");
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
            source={require('../../assets/images/post2.jpg')}
        >
            <StatusBar style="dark" />

            {/* ---- Header ---- */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Sign In</Text>
            </View>

            {/* ---- Footer ---- */}
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                {/* ---- Phone Number ---- */}
                <Text style={styles.text_footer}>Phone Number</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color="#05375a" />
                    <TextInput
                        placeholder="Your Phone Number"
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType="number"
                        onChangeText={(value) => textInputChange(value, "PHONE")}
                        onEndEditing={(event) => handleValidPhone(event)}
                    />

                    <Animatable.View animation="bounceIn">
                        {data.check_textInputChange && <Feather name="check-circle" size={20} color="green" />}
                    </Animatable.View>
                </View>
                {/* ------ Showing the User Error Message ---- */}
                {!data.isValidUser && displayErrorMessage(data.errorMsg)}

                {/* ---- Password ---- */}
                <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" size={20} color="#05375a" />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(value) => textInputChange(value, "PASSWORD")}
                    />

                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? <Feather name="eye-off" size={20} color="grey" /> : <Feather name="eye" size={20} color="grey" />}
                    </TouchableOpacity>
                </View>
                {/* ----- Showing Password Error Message -----  */}
                {!data.isValidPassword && displayErrorMessage(data.errorMsg)}

                <View style={{ marginTop: 30 }}>
                    <Button
                        title="Login"
                        color1st="yellow"
                        color2nd="orange"
                        size={18}
                        textColor="black"
                        width="100%"
                        height={50}
                        onPress={handleLoginClick}
                    />

                    <View style={{ marginTop: 20 }}>
                        <OutlineButton
                            title="Sign Up"
                            color="orange"
                            size={18}
                            width="100%"
                            height={50}
                            onPress={() => navigation.navigate("Register")}
                        />
                    </View>
                </View>
            </Animatable.View>
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
    text_header: {
        color: '#05375a',
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
    },
    errorMsg: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
    }
});

export default Login;