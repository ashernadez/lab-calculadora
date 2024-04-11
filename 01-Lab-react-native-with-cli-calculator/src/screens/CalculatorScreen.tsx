import { Pressable, Text, View} from "react-native";
import { colors, styles } from "../config/theme/app-theme";
import { CalculatorButton } from "../components/CalculatorButton";

export const CalculatorScreen = () =>{
    return(
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 25, paddingBottom: 15}}>
            <Text style={styles.mainResult}>1103</Text>
            <Text style={styles.subResult}>11</Text>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>console.log()} blackText label="AC" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} blackText label="+/-" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} blackText label="Del" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="÷" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>console.log()} label="7" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="8" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="9" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="*" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>console.log()} label="4" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="5" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="6" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="-" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>console.log()} label="1" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="2" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="3" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="+" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>console.log()} label="0" color={colors.lightGray} doubleSize/>
            <CalculatorButton onPress={() =>console.log()} label="." color={colors.lightGray}/>
            <CalculatorButton onPress={() =>console.log()} label="=" color={colors.orange}/>
            </View>
        </View>
        
    )
}