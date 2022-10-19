import React from 'react';
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
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, OutlineButton } from '../../components/widgets/Button';


const Register2 = ({ navigation, route }) => {
    const [data, setData] = React.useState({
        ...route.params,
        email: '',
        password: '',
        retypePassword: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    const [error, setError] = React.useState({
        emailErrorMsg: '',
        passwordErrorMsg: '',
        rePasswordErrorMsg: '',
        isValidEmail: true,
        isValidPassword: true,
        isValidRePassword: true
    });

    // Showing Error Message..
    const displayErrorMessage = (msg) => (
        <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{msg}</Text>
        </Animatable.View>
    );

    // Handle Valid Email here...
    const handleValidEmail = (event) => {
        // Similar to Web like -- (event.target.value).
        const value = event.nativeEvent.text;
        const realValue = value.trim(); // Trim for not to take any space or else just the real value.
        const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(realValue);

        if (!emailTest) {
            setData({
                ...data,
                check_textInputChange: false,
            });
            setError({
                ...error,
                isValidEmail: false,
                emailErrorMsg: 'Email is not valid!'
            });
        }else{
            setData({
                ...data,
                check_textInputChange: true,
            });
            setError({
                ...error,
                isValidEmail: true,
            });
        }
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
            if (value.length < 7) {
                setError({
                    ...error,
                    isValidPassword: false,
                    passwordErrorMsg: 'Password should be at least 8 characters',
                });
            } else {
                setError({
                    ...error,
                    isValidPassword: true,
                });
            }
            setData({
                ...data,
                password: value
            });
        }

        // ReType Password on change text..
        if (type === 'RETYPE-PASSWORD') {
            if (value !== data.password){
                setError({
                    ...error,
                    isValidRePassword: false,
                    rePasswordErrorMsg: 'Password is not matched!'
                });
            }else{
                setError({
                    ...error,
                    isValidRePassword: true,
                });
                setData({
                    ...data,
                    retypePassword: value
                });
            }
        }
    };

    // Handle On Next Button Press...
    const handleOnNextPress = () => {
        if (error.isValidEmail && error.isValidPassword && error.isValidRePassword) {
            navigation.navigate("Register3", data);
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
                <Text style={styles.text_header}>Sign Up</Text>
            </View>

            {/* ---- Footer ---- */}
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                {/* ---- Email ---- */}
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="email-multiple-outline" size={20} color="#05375a" />
                    <TextInput
                        placeholder="dr.asadanik@gmail.com"
                        style={styles.textInput}
                        onChangeText={(value) => textInputChange(value, "EMAIL")}
                        onEndEditing={(event) => handleValidEmail(event)}
                        autoCorrect={false}
                        autoCapitalize={false}
                    />

                    <Animatable.View animation="bounceIn">
                        {data.check_textInputChange && <Feather name="check-circle" size={20} color="green" />}
                    </Animatable.View>
                </View>
                {!error.isValidEmail && displayErrorMessage(error.emailErrorMsg)}

                {/* ---- Password ---- */}
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" size={20} color="#05375a" />
                    <TextInput
                        placeholder="abcABC123!@#$"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(value) => textInputChange(value, "PASSWORD")}
                        autoCorrect={false}
                    />

                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? <Feather name="eye-off" size={20} color="grey" /> : <Feather name="eye" size={20} color="grey" />}
                    </TouchableOpacity>
                </View>
                {!error.isValidPassword && displayErrorMessage(error.passwordErrorMsg)}

                {/* ---- Retype Password ---- */}
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Retype Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" size={20} color="#05375a" />
                    <TextInput
                        placeholder="abcABC123!@#$"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(value) => textInputChange(value, "RETYPE-PASSWORD")}
                        autoCorrect={false}
                    />

                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? <Feather name="eye-off" size={20} color="grey" /> : <Feather name="eye" size={20} color="grey" />}
                    </TouchableOpacity>
                </View>
                {!error.isValidRePassword && displayErrorMessage(error.rePasswordErrorMsg)}

                {/* ---- Buttons ---- */}
                <View style={{ marginTop: 30 }}>
                    <Button
                        title="Next"
                        color1st="royalblue"
                        color2nd="blue"
                        size={18}
                        textColor="white"
                        width="100%"
                        height={50}
                        onPress={() => handleOnNextPress()}
                    />

                    <View style={{ marginTop: 20 }}>
                        <OutlineButton
                            title="Back"
                            color="red"
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
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'white',
        padding: 5,
        opacity: 0.7
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

export default Register2;