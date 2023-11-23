import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold,  } from '@expo-google-fonts/inter';

const MainScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, 
  });
  const { userName, status, advogado, perfil, gradientColors } = route.params || {};

  // Use useLayoutEffect para esconder o cabeçalho quando a tela é renderizada
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleLogout = () => {
    // Navegue de volta para a tela de boas-vindas ao pressionar o botão de logout
    navigation.navigate('Welcome');
  };

  const getGradientColors = () => {
    switch (status) {
      case 'Concluído':
        return ['#FDFFF9', '#A7F085', 'rgba(245, 211, 88, 0.80)'];
      case 'Em andamento':
        return ['#FDFFF9', '#F3C76D', 'rgba(245, 211, 88, 0.80)'];
      case 'Req. Pendente':
        return ['#FDFFF9', '#85F0CA', 'rgba(88, 104, 245, 0.80)'];
      case 'Recusado':
        return ['#FDFFF9', '#ED7575', '#BC0A32'];
      default:
        return ['#FDFFF9', '#A7F085', 'rgba(245, 211, 88, 0.80)'];
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./Imagens/Novas-Raízes-BC.png')}
        style={styles.logo}
      />
      {/* Adicionei a borda na parte inferior da View */}
      <View style={styles.linha}></View>
      <Text style={styles.bom}>Bom dia</Text>
      <LinearGradient
        style={{
          borderRadius: 16,
          width: '96%',
          height: '12%',
          flexShrink: 0,
          marginTop: 10,
          top: '-18%'
        }}
        colors={getGradientColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.title}>{`${userName || 'Usuário'}`}</Text>
        <Text style={styles.status}>{`Status: ${status}`}</Text>
        {advogado && <Text style={styles.adv}>{`Advo. ${advogado}`}</Text>}
        {perfil && <Image source={perfil} style={styles.perfilImage} />}
      </LinearGradient>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}>
          <Text style={{ color: 'black' }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    top: '-16%',
    width: '9%',
    height: '6%',
  },
  linha: {
    borderBottomWidth: 1, // Adicionei a propriedade para criar a linha
    borderBottomColor: '#000', // Cor da linha
    width: '100%',
    marginVertical: 10,
    top: '-16%'
  },
  bom: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 24,
    right: '30%',
    top: '-17%',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#000',
    marginBottom: 20,
    left: '26%',
    top: '16%'
  },
  status: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    color: '#000',
    left: '26%',
    top: '-10%'
  },
  adv: {
    fontSize: 10,
    fontFamily: 'Inter_400Regular',
    color: '#000',
    left: '26%',
    top: '0%'
  },
  perfilImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    marginTop: '2%',
    left: '3%',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: "50%",
  },
  buttonText: {
    color: '#fff',
  },
});

export default MainScreen;
