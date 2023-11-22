import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useFonts, Quando_400Regular } from '@expo-google-fonts/quando';

export default function MySplashScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Quando_400Regular,
  });

  useEffect(() => {
    // Define um temporizador para navegar para a tela 'Welcome' após 10 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);

    // Limpa o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <Text style={styles.text}>NR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000000',
  },
  text: {
    fontFamily: 'Quando_400Regular',
    fontSize: 80,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#fff',
    lineHeight: 90, // Ajuste o valor conforme necessário
  },
});