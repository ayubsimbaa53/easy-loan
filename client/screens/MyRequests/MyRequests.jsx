import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header/Header';
import LoanLogCard from '../../components/LoanLogCard/LoanLogCard';

const MyRequests = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header>My Requests</Header>

            <ScrollView style={{padding: 5}}>
                <LoanLogCard
                    type={"PENDING"}
                    status={"NULL"}
                    amount={5500}
                    duration={6}
                    company={"BD Task"}
                    startedDate={"10 January 2022"}
                    endDate={"10 July 2022"}
                    onPress={() => navigation.navigate("LoanDetails")}
                />

                <LoanLogCard
                    type={"ACCEPTED"}
                    status={"RUNNING"}
                    amount={110000}
                    duration={12}
                    company={"BD Task"}
                    startedDate={"10 January 2022"}
                    endDate={"10 July 2022"}
                    onPress={() => alert('Hello')}
                />

                <LoanLogCard
                    type={"DENIED"}
                    status={"NULL"}
                    amount={20000}
                    duration={6}
                    company={"BD Task"}
                    startedDate={"10 January 2022"}
                    endDate={"10 July 2022"}
                    onPress={() => alert('Hello')}
                />


                <LoanLogCard
                    type={"ACCEPTED"}
                    status={"FINISHED"}
                    amount={185000}
                    duration={24}
                    company={"BD Task"}
                    startedDate={"10 January 2022"}
                    endDate={"10 July 2022"}
                    onPress={() => alert('Hello')}
                />
            </ScrollView>
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
        paddingBottom: 10,
        width: '100%',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
});

export default MyRequests;