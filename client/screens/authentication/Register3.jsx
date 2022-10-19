import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Platform,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, OutlineButton } from '../../components/widgets/Button';
import DateTimePicker from '@react-native-community/datetimepicker';


const Register3 = ({ navigation, route }) => {
    const [data, setData] = React.useState({
        ...route.params,
        bio: '',
        title: '',
        birthDate: '',
    });

    const [date, setDate] = React.useState(new Date());
    const [dateModalOpen, setDateModalOpen] = React.useState(false);


    console.log("This is our data from register 2 -- ", data);

    const handleOnDateChange = (_event, selectedDate) => {
        if (Platform.OS === 'android') {
            setDateModalOpen(false);
            // for iOS, add a button that closes the picker
        }
        const currentDate = selectedDate;
        setDateModalOpen(false);
        setDate(currentDate);
    };

    // Text Input Change handler..
    const textInputChange = (value, type) => {
        if (type === 'BIO') {
            setData({
                ...data,
                bio: value
            });
        }

        if (type === 'TITLE') {
            setData({
                ...data,
                title: value
            });
        }

        if (type === 'BIRTHDATE') {
            setData({
                ...data,
                birthDate: value
            });
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
                <Text style={styles.text_header}>Sign Up</Text>
            </View>

            {/* ---- Footer ---- */}
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                {/* ---- Bio ---- */}
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Bio</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="bio" size={20} color="#05375a" />
                    <TextInput
                        placeholder="I am Simple Human"
                        style={styles.textInput}
                        onChangeText={(value) => textInputChange(value, "BIO")}
                    />

                </View>

                {/* ---- Title ---- */}
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Title</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="subtitles-outline" size={20} color="#05375a" />
                    <TextInput
                        placeholder="Doctor"
                        style={styles.textInput}
                        onChangeText={(value) => textInputChange(value, "TITLE")}
                    />

                </View>

                {/* ---- Birth Date ---- */}
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Birth Date</Text>
                <View style={styles.action}>
                    <FontAwesome name="birthday-cake" size={20} color="#05375a" />
                    <TextInput
                        placeholder="Birth Date"
                        style={styles.textInput}
                        // onChangeText={(value) => textInputChange(value, "BIRTHDATE")}
                        onPress={() => alert('Alert here')}
                    />
                    <OutlineButton
                        title={'BithDate'}
                        style={styles.textInput}
                        onPress={() => setDateModalOpen(true)}
                    />

                    {/* Date Picker */}
                    {dateModalOpen && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={handleOnDateChange}
                        />
                    )}

                </View>

                {/* ---- Buttons ---- */}
                <View style={{ marginTop: 30 }}>
                    <Button
                        title="Register"
                        color1st="lightgreen"
                        color2nd="green"
                        size={18}
                        textColor="white"
                        width="100%"
                        height={50}
                        onPress={() => navigation.navigate("UploadProfile")}
                    />

                    <View style={{ marginTop: 20 }}>
                        <OutlineButton
                            title="Back"
                            color="red"
                            size={18}
                            width="100%"
                            height={50}
                            onPress={() => navigation.navigate("Register2")}
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

export default Register3;