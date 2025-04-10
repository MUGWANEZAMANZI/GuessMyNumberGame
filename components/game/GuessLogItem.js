import { View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
function GuessLogItem({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text># {roundNumber} </Text>
            <Text> Oppoents guesses: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;


const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        width: '100%'
    },
})