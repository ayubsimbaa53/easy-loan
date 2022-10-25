import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/widgets/Button';

// title, color1st, color2nd, size, textColor, width, height, onPress, children

const LoanDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style={"light"} />

            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>BD Task</Text>
                    <Text style={[styles.colText, { color: 'green' }]}>ACCEPTED</Text>
                </View>

                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>10 %</Text>
                    <Text style={[styles.colText, { color: 'brown' }]}>INTERESTS</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>5500 TK</Text>
                    <Text style={[styles.colText, { color: 'orange' }]}>RUNNING</Text>
                </View>

                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>5500 TK</Text>
                    <Text style={styles.colText}>HAVE TO PAY</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>900 TK</Text>
                    <Text style={styles.colText}>PAY PER MONTH</Text>
                </View>

                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>1 Month</Text>
                    <Text style={styles.colText}>PER DISPATCH</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>10 May 2022</Text>
                    <Text style={styles.colText}>NEXT PAY DATE</Text>
                </View>

                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>6 Months</Text>
                    <Text style={styles.colText}>DURATION</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>10 April 2022</Text>
                    <Text style={[styles.colText, { color: 'royalblue' }]}>STARTING DATE</Text>
                </View>

                <View style={styles.col}>
                    <Text style={styles.colHeadingText}>10 October 2022</Text>
                    <Text style={[styles.colText, { color: 'red' }]}>EXPIRED DATE</Text>
                </View>
            </View>

            {/* ---- Move To Dispatch Loan Section ----- */}
            <Button
                title={"Go For Dispatch"}
                color1st={"brown"}
                color2nd={"chocolate"}
                size={18}
                textColor={"white"}
                width={380}
                height={50}
                onPress={() => navigation.navigate("DispatchLoan")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
        margin: 10,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        // backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    colHeadingText: {
        fontSize: 18,
        textAlign: 'center',
    },
    colText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 14,
    }
});

export default LoanDetails;