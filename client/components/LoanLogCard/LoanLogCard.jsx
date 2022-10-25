import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// LoanLogCard Component..
const LoanLogCard = ({ type, status, amount, duration, company, startedDate, endDate, onPress }) => {
    // StyleSheet..
    const styles = StyleSheet.create({
        loanLog: {
            flexDirection: 'row',
            margin: 5,
            borderWidth: 1,
            borderColor: 'lightgray',
            padding: 5,
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
        },
        log1: {
            flex: 2
        },
        log2: {
            flex: 4
        },
        log3: {
            flex: 2,
        },
        log1Amount: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        log1Status: {
            fontSize: 13,
            color: status === 'FINISHED' ? 'green' : status === 'RUNNING' ? 'orange' : 'red',
            fontWeight: 'bold'
        },
        log2Duration: {
            fontSize: 15,
            // marginLeft: 10,
            fontWeight: 'bold'
        },
        log2Date: {
            fontSize: 11,
            // marginLeft: 10,
            // fontWeight: 'bold',
            marginTop: 8
        },
        log3request: {
            color: type === 'ACCEPTED' ? 'green' : type === 'DENIED' ? 'red' : 'orange',
            fontWeight: 'bold',
            fontSize: 15
        },
        log3Company: {
            fontSize: 13,
            fontWeight: 'bold'
        },
        shadowProp: {
            // shadowColor: '#171717',
            // shadowOffset: { width: -2, height: 4 },
            // shadowOpacity: 0.3,
            // shadowRadius: 3,
        },
    });

    return (
        <TouchableOpacity
            style={[styles.loanLog, styles.shadowProp]}
            onPress={onPress}
        >
            <View style={styles.log1}>
                <Text style={styles.log1Amount}>{amount} TK</Text>
                <Text style={styles.log1Status}>{status}</Text>
            </View>

            <View style={styles.log2}>
                <Text style={styles.log2Duration}>{duration} Month</Text>
                <Text style={styles.log2Date}>{startedDate} To {endDate}</Text>
            </View>

            <View style={styles.log3}>
                <Text style={styles.log3request}>{type}</Text>
                <Text style={styles.log3Company}>{company}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LoanLogCard;