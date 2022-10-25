import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, keyboardType, onChangeText }) => {
    return (
        <View>
            <Text style={styles.text}>{label}</Text>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                autoCapitalize={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 10,
        textTransform: "capitalize"
    },
    input: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'lightgray',
        margin: 10,
        textAlign: 'center',
        borderRadius: 10
    }
});

export default InputField;