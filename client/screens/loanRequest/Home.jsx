import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../components/widgets/InputField';
import { Button } from '../../components/widgets/Button';

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
            <View style={styles.header}>
                <Text style={styles.headerText}>Make Loan Request</Text>
            </View>

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
                    keyboardType={"numeric"}
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
                        color1st="orange"
                        color2nd="red"
                        size={20}
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