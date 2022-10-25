import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { OutlineButton } from '../../components/widgets/Button';
import { AntDesign } from '@expo/vector-icons';

// title, color, height, width, size, onPress, children

const DispatchDone = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={{marginBottom: 20}}>
                <AntDesign name="checkcircle" size={80} color="green" />
            </View>

            <Text style={styles.headingText}>Successfully Dispatched</Text>
            <View style={styles.subHeadingText}>
                <Text style={{textAlign: 'center'}}>Loan Of 1 Month</Text>
                <Text style={{textAlign: 'center'}}>Payed 900TK Of 5500 TK</Text>
                <Text style={{textAlign: 'center'}}>Have To Pay 4800 TK</Text>

                <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>Company ID</Text>
                <Text style={{ fontWeight: 'bold', color: 'green', textAlign: 'center'}}>8hghgyughjgy67iopo898</Text>

                <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>Loan ID</Text>
                <Text style={{ fontWeight: 'bold', color: 'orange', textAlign: 'center'}}>8hghgyughjgy67iopo898</Text>
            </View>
            <OutlineButton
                title={"My Profile"}
                color={"green"}
                height={50}
                width={200}
                size={20}
                onPress={() => navigation.navigate("Profile")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subHeadingText: {
        maxWidth: '90%',
        fontSize: 15,
        padding: 20
    }
});

export default DispatchDone;