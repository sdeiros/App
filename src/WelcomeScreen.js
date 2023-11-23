import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useFonts, Quando_400Regular } from '@expo-google-fonts/quando';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Quando_400Regular, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold
  });

  const [showMessage, setShowMessage] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleCadastroPress = () => {
    // Exibe a mensagem quando o usuário clicar em "Cadastrar"
    setShowMessage(true);
  };

  const handleBackgroundPress = () => {
    // Oculta a mensagem quando o usuário clicar na área em branco
    setShowMessage(false);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./vídeo/fundo.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Text style={styles.text}>Novas Raízes</Text>
      <Image
        source={require('./Imagens/Star.png')}
        style={styles.logo}
      />
      <Text style={styles.H1}>
        Conectamos imigrantes e refugiados à sociedade brasileira, fornecendo informações essenciais sobre direitos e integração. Nossa plataforma facilita o intercâmbio cultural e a busca por apoio, criando uma comunidade envolvente.
      </Text>

      <Text style={styles.brasao}>
        Unindo Comunidades:{'\n'}Apoio a Imigrantes
      </Text>

      <TouchableOpacity onPress={handleLoginPress} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#ECFDE2', '#AAF188', '#EBDE79']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Fazer Login</Text>
          <Image
            source={require('./Imagens/seta.png')}
            style={styles.seta}
          />
        </LinearGradient>
      </TouchableOpacity>

      {/* Botão Cadastrar */}
      <TouchableOpacity onPress={handleCadastroPress} style={styles.cadastroButton}>
        <Text style={styles.cad}>Cadastrar</Text>
      </TouchableOpacity>

      {showMessage && (
        <TouchableOpacity onPress={handleBackgroundPress} style={styles.messageContainer}>
          <Text style={styles.message}>
            Ainda está em desenvolvimento...{'\n'}A curiosidade matou o gato.
          </Text>

        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    fontFamily: 'Quando_400Regular',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: 50,
    marginTop: 80,
    left: '5%',
  },
  logo: {
    marginTop: -46,
    left: '62%',
    width: 35,
    height: 35,
  },
  H1: {
    color: '#ffffff',
    left: '5%',
    width: '90%',
    fontFamily: 'Inter_300Light',
    fontSize: 17,
    top: '2%',
    textShadowColor: '#000',
    textShadowOffset: { width: 6, height: 2 },
    textShadowRadius: 40,
  },
  brasao: {
    position: 'absolute',
    color: '#FFF',
    left: '5%',
    top: '74%',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
  buttonContainer: {
    marginTop: '100%',
    paddingHorizontal: '4%',
  },
  button: {
    marginTop: '6%',
    borderRadius: 16,
    height: '36%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#005B70',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
    left: '6%',
    top: '12%',
  },
  seta: {
    top: -16,
    left: 316,
    width: 30,
    height: 20,
  },
  cad: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,  // Adicione um tamanho de fonte adequado
  },
  cadastroButton: {
    position: 'absolute',
    top: '97%',  
    left: '50%', 
    transform: [{ translateX: -50 }, { translateY: -30 }],  // Ajusta o botão para o centro
    paddingHorizontal: 10,
  },
  
  messageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  message: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
  },
  
});
