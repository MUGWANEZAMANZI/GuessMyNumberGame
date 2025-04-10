import { View, StyleSheet,Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionsText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random()*(max-min) + min);

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return rndNum;
        
    }
}


let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess); 
    const [guessRounds, setGuessRounds] =  useState([initialGuess]);

    const guessRoundsListLength = guessRounds.length;

    useEffect(()=> {
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction){

        if((direction === 'lower' && currentGuess < userNumber ) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie", "You know that you are wrong....", [
                {text: "Sorry!", style: 'cancel'}
            ]);
            return;
        }

        if(direction == 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess+1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(previousGuessRounds => [newRndNumber, ...previousGuessRounds]);
    }


    return (
        <View style={styles.screen}>
            <Title>Opponents guess</Title>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <Card>
            {console.log(currentGuess)}
            <View>
                <InstructionText style={styles.instrucionText}>Higher or lower</InstructionText>
                <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}><PrimaryButton 
                onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="remove" size={24} color={'white'} />
                </PrimaryButton></View>
                <View style={styles.buttonContainer}><PrimaryButton 
                onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="add" size={24} color={'white'} />
                    </PrimaryButton></View>
                </View>
            </View>
            </Card>
            <View style={styles.guessContainer}>
                { /*guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>) */}
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} 
                guess={itemData.item} />}
                keyExtractor={(item) => item} />
            </View>
        </View>
        
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 24,
        alignItems: 'center',
        textAlign: 'center',
    }, 
    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer:{
        flex:1,
    },
    instrucionText:{
        marginBottom: 12,
    },
    guessContainer:{
        flex:1,
        width: '100%'
    }
})




