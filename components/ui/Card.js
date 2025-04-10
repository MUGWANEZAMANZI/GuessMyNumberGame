import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
        
    );
}

export default Card;


const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '70%',
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, Height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: Colors.primary800,
    }
})