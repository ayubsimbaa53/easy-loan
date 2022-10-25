import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../components/widgets/InputField';
import { Button } from '../../components/widgets/Button';

// label, placeholder, keyboardType, onChangeText

// title, color1st, color2nd, size, textColor, width, height, onPress, children

const DispatchLoan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <InputField
                label={"Dispatch Amount"}
                placeholder={"1000 Tk"}
                keyboardType={"numeric"}
                onChangeText={() => { }}
            />

            <InputField
                label={"Company ID"}
                placeholder={"Company ID"}
                onChangeText={() => { }}
            />

            <InputField
                label={"Pay For Next"}
                placeholder={"1 Month"}
                keyboardType={"numeric"}
                onChangeText={() => { }}
            />

            {/* ---- Move To Dispatch Loan Section ----- */}
            <View style={{alignSelf: "center", marginTop: 20}}>
                <Button
                    title={"Dispatch Loan"}
                    color1st={"orange"}
                    color2nd={"red"}
                    size={18}
                    textColor={"white"}
                    width={380}
                    height={50}
                    onPress={() => navigation.navigate("DispatchDone")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
});

export default DispatchLoan;