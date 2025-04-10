import { TextInput, View, StyleSheet,Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react';
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionsText";

function StartGameScreen({onPickNumber}){
    const [enterdNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enterdText){
        setEnteredNumber(enterdText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enterdNumber);

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number',
                'Number has to be between 1 and 99.',
                [{text: 'Okay',style: 'destructive', onPress:resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);  
    }
    
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Card>
            
         <InstructionText>Enter number</InstructionText>
        <TextInput style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enterdNumber}
        onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>

            <View style={styles.buttonContainer}><PrimaryButton
                    onPress={resetInputHandler}
                    >Reset</PrimaryButton></View>
            <View style={styles.buttonContainer}><PrimaryButton 
            onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
        </View> 
        </Card>
    </View>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop: 100,
        alignItems:'center',  
        borderColor: 'white', 
        color: 'white'
    },
    numberInput:{
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row',
        width: '80%',
    
    }, 
    buttonContainer:{
        flex:1,  
    }
    
})