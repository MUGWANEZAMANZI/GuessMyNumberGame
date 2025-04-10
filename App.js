import { StatusBar} from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, ImageBackground, SafeAreaView, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }
    function gameOverHandler(numberOfRounds){
     setGameIsOver(true);
     setGuessRounds(numberOfRounds);
   }

   function startNewGameHandler(){
      setUserNumber(null);
      setGameIsOver(false);
      setGuessRounds(0);
   }


    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if(userNumber){
      screen = <GameScreen 
      userNumber={userNumber}
      onGameOver={gameOverHandler}
      />
    }

    if(gameIsOver && userNumber){
      screen = <GameOverScreen 
      userNumber={userNumber}  
      roundsNumber={guessRounds} 
      onStartNewGame={startNewGameHandler}/>
    }
  return (
    <LinearGradient colors={[Colors.accent500,Colors.primary700 ]} style={styles.rootScreen}>
      <ImageBackground
      source={require('./assets/images/background.png')}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.rootScreen}>{screen} </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity: 0.3,
  }
});
