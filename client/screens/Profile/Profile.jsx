import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header/Header';

// title, color, height, width, size, onPress, children

const Profile = ({ navigation }) => {
    const [showBalance, setShowBalance] = useState(false);

    const renderBalanceAmounts = (show) => (
        !show ? 
        (
            <Text style={styles.checkBalanceText}>Tab To Check Balance</Text>
        )
        :
        (
            <Text style={styles.checkBalanceText}>10,000 TK</Text>
        )
    );

    return (
        <View style={styles.container}>
            <Header>My Profile</Header>

            <View style={styles.profileBody}>
                <Image
                    style={styles.profilePicture}
                    source={require('../../assets/images/avatar-male.png')}
                />

                <View style={styles.namesTextWrapper}>
                    <Text style={styles.hiText}>Hi,</Text>
                    <Text style={styles.namesText}>Asad Anik (Doctor)</Text>
                </View>

                <TouchableOpacity 
                    style={styles.checkBalance}
                    onPress={() => setShowBalance(!showBalance ? true : false)}
                >
                    {renderBalanceAmounts(showBalance)}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    profileBody: {
        flexDirection: 'column',
    },
    profilePicture: {
        width: 200,
        height: 200
    },
    namesTextWrapper: {
        marginTop: 10
    },
    hiText: {
        fontSize: 30,
        color: 'gray',
        fontWeight: 'bold'
    },
    namesText: {
        fontSize: 20,
        marginLeft: 10,
        color: 'gray',
    },
    checkBalance: {
        marginTop: 20,
        backgroundColor: 'brown',
        padding: 5,
        borderRadius: 20
    },
    checkBalanceText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
});


export default Profile;