import { View, Text, StyleSheet } from 'react-native';

const Header = ({ children }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{children}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
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
    },
});

export default Header;