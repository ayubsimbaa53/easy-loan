import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputField from '../../components/widgets/InputField';
import { Button } from '../../components/widgets/Button';
import Header from '../../components/Header/Header';

const Home = ({ navigation }) => {
    const [data, setData] = useState({
        // State..
    });

    // Handle Change function..
    const handleChange = () => {
        // Code Here..
    };

    // Request Handler...
    const handleSubmitRequest = () => {
        navigation.navigate("RequestDone");
    };


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header>Make Loan Request</Header>

            <View style={styles.body}>
                <InputField
                    label={"loan amount"}
                    placeholder={"5000"}
                    keyboardType={"numeric"}
                    onChangeText={() => handleChange()}
                />

                <InputField
                    label={"Company"}
                    placeholder={"BD Task"}
                    onChangeText={() => handleChange()}
                />

                <InputField
                    label={"pay duration"}
                    placeholder={"6 Month"}
                    keyboardType={"numeric"}
                    onChangeText={() => handleChange()}
                />

                <InputField
                    label={"pay per month"}
                    placeholder={"1 Month"}
                    keyboardType={"numeric"}
                    onChangeText={() => handleChange()}
                />

                {/* title, color1st, color2nd, size, textColor, width, height, onPress, children */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="Submit Request"
                        color1st="lightblue"
                        color2nd="royalblue"
                        size={18}
                        textColor="white"
                        width="100%"
                        height={50}
                        onPress={() => handleSubmitRequest()}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'gray',
        paddingTop: 50,
        paddingBottom: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    body: {
        marginTop: 10
    },
    buttonContainer: {
        margin: 10,
    }
});

export default Home;