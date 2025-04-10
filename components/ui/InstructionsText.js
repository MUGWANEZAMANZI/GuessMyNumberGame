import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function InstructionText({children, style}){
    return(
        <View><Text style={[styles.instructionText, style]}>{children}</Text></View>
    )
}

export default InstructionText;


const styles = StyleSheet.create({
    instructionText:{
        color:Colors.accent500,
        fontSize:24,
    }
})