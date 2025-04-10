import { Text, StyleSheet, View, Image  } from 'react-native';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to gues the number <Text style={styles.highlight}>{userNumber}</Text></Text>

        <PrimaryButton onPress={onStartNewGame}><Text></Text>Start a new Game</PrimaryButton>
    </View>
    );
}
 
export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image:{
        width: '100%',
        height: '100%',
         
    },
    summaryText:{
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight:{
        color: Colors.primary500
    }
})