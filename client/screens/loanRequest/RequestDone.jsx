import { View, Text, StyleSheet } from 'react-native';
import { OutlineButton } from '../../components/widgets/Button';

// title, color, height, width, size, onPress, children

const RequestDone = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Successfully Requested</Text>
            <OutlineButton 
                title={"My Requests"}
                color={"green"}
                height={50}
                width={200}
                size={20}
                onPress={() => navigation.navigate("MyRequests")}
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
        padding: 20
    }
});

export default RequestDone;