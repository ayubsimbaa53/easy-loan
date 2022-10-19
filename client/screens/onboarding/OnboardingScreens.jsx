import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, ImageBackground, Text, Platform } from 'react-native';

export const Screen1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/post1.jpg')}
            >
                <View style={styles.darkSheet}>
                    <TouchableOpacity style={styles.View1} onPress={() => navigation.navigate("Splash")}>
                        <Text style={styles.Skip}>Skip</Text>
                    </TouchableOpacity>

                    <View style={styles.View2}>
                        <Text style={styles.Training}>Welcome</Text>

                        <View>
                            <Text style={styles.Description}>
                                Easy Loan {Platform.OS} Platform here. With Your Needs
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export const Screen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/post2.jpg')}
            >
                <View style={styles.darkSheet}>
                    <TouchableOpacity style={styles.View1} onPress={() => navigation.navigate("Splash")}>
                        <Text style={styles.Skip}>Skip</Text>
                    </TouchableOpacity>

                    <View style={styles.View2}>
                        <Text style={styles.Training}>Stay Happy</Text>

                        <View>
                            <Text style={styles.Description}>
                                Check Your Daily Loans And Stay Happy
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export const Screen3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/post3.jpg')}
            >
                <View style={styles.darkSheet}>
                    <TouchableOpacity style={styles.View1} onPress={() => navigation.navigate("Splash")}>
                        <Text style={styles.Done}>Get Started</Text>
                    </TouchableOpacity>

                    <View style={styles.View2}>
                        <Text style={styles.Training}>Loan For Your Startup ?</Text>

                        <View>
                            <Text style={styles.Description}>
                                We Provides the Best Secure Loan without Having any Risks and Doubts.
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};


// Styles..
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    darkSheet: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        opacity: 0.7,
    },
    image: {
        flex: 1,
    },
    Logo: {
        height: 45,
        width: 250,
    },
    View1: {
        marginTop: '20%',
        marginLeft: 20,
        flexDirection: 'row',
    },
    Skip: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
    },
    Done: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
    },
    Training: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
    },
    View2: {
        alignItems: 'center',
        marginTop: '70%'
    },
    Description: {
        fontWeight: '400',
        fontSize: 20,
        color: 'white',
        width: 300,
        marginTop: 10,
    }
});