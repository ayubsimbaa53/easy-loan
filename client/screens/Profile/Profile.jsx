import { View, Text, StyleSheet } from 'react-native';
import { OutlineButton } from '../../components/widgets/Button';

// title, color, height, width, size, onPress, children

const Profile = ({ navigation }) => {
    return (
        <View>
            <Text>Hello I am Profile</Text>
            <OutlineButton 
                title={"My Requests"}
                color={"green"}
                height={50}
                width={100}
                size={25}
                onPress={() => navigation.navigate("MyRequests")}
            />
        </View>
    );    
};



export default Profile;