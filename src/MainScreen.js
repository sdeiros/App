import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainScreen = ({ navigation, route }) => {
  const { userName, status, advogado, perfil } = route.params || {};

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${userName || 'Usuário'}`}</Text>
      <Text style={styles.title}>{`Status: ${status}`}</Text>
      {advogado && <Text style={styles.text}>{`Advo. ${advogado}`}</Text>}
      {perfil && <Image source={perfil} style={styles.perfilImage} />}
      {/* Adicione outros componentes da tela principal aqui */}
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  text: {
    color: '#000',
    marginBottom: 10,
    width: '35%'
  },
  perfilImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default MainScreen;
