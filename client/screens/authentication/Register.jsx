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
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, OutlineButton } from '../../components/widgets/Button';

const Register = ({ navigation }) => {
    const [data, setData] = React.useState({
        firstName: '',
        lastName: ''
    });
    const [error, setError] = React.useState({
        firstNameErrorMsg: '',
        lastNameErrorMsg: '',
        isValidFirstName: true,
        isValidLastName: true,
    });

    // Displaynig Error Message Dynamically..
    const displayErrorMessage = (msg) => (
        <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{msg}</Text>
        </Animatable.View>
    );

    // End Of Editing Input Fields..
    const handleEndEditing = (event, type) => {
        const value = event.nativeEvent.text;

        if (type === 'FNAME') {
            if (value.trim().length) {
                if (value.length <= 2 && value.length > 0) {
                    setError({
                        ...error,
                        firstNameErrorMsg: 'Name should be at least 3 characters.',
                        isValidFirstName: false,
                    });

                } else {
                    setError({
                        ...error,
                        isValidFirstName: true,
                    });
                }
            }
        }
    };

    // Text Change Input Fields..
    const handleOnChange = (value, type) => {
        if (type === 'LNAME') {
            if (value === data.firstName) {
                setError({
                    ...error,
                    lastNameErrorMsg: 'Last Name & First Name Can\'t Be Same',
                    isValidLastName: false,
                });
            } else {
                setData({
                    ...data,
                    lastName: value
                });
                setError({
                    ...error,
                    isValidLastName: true,
                });
            }
        }
    };

    const handleOnNextPress = () => {
        if (data.firstName && data.lastName) {
            if (error.isValidFirstName && error.isValidLastName) {
                navigation.navigate("Register2", data);
            }
        }
    };

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/post1.jpg')}
        >
            <StatusBar style="light" />

            {/* ---- Header ---- */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Say Us Your Name</Text>
            </View>

            {/* ---- Footer ---- */}
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                {/* ---- FirstName ---- */}
                <Text style={styles.text_footer}>First Name</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color="#05375a" />
                    <TextInput
                        placeholder="Asad"
                        style={styles.textInput}
                        onChangeText={(value) => setData({ ...data, firstName: value })}
                        onEndEditing={(event) => handleEndEditing(event, "FNAME")}
                        autoCorrect={false}
                    />
                </View>
                {/* ------ Showing the User Error Message ---- */}
                {!error.isValidFirstName && displayErrorMessage(error.firstNameErrorMsg)}

                {/* ---- LastName ---- */}
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Last Name</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color="#05375a" />
                    <TextInput
                        placeholder="Anik"
                        style={styles.textInput}
                        onChangeText={(value) => handleOnChange(value, "LNAME")}
                        autoCorrect={false}
                    />
                </View>
                {/* ------ Showing the User Error Message ---- */}
                {!error.isValidLastName && displayErrorMessage(error.lastNameErrorMsg)}


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
                        onPress={handleOnNextPress}
                    />

                    <View style={{ marginTop: 20 }}>
                        <OutlineButton
                            title="Sign In"
                            color="orange"
                            size={18}
                            width="100%"
                            height={50}
                            onPress={() => navigation.navigate("Login")}
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

export default Register;