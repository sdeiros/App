import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, StatusBar, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Verificação simples para o login (substitua por lógica de autenticação real)
        if (email === '215006.aluno@iserj.edu.br' && password === '1234') {
            // Dentro do componente LoginScreen após login bem-sucedido
            navigation.navigate('Main', { userName: 'Davi Medeiros' });
        } else if (email === '215002.aluno@iserj.edu.br' && password === '1234') {
            navigation.navigate('Main', { userName: 'Antonio Henrique' });
        } else {
            // Exibir mensagem de erro
            Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />

            <Image
                source={require('./Imagens/Novas-Raízes-BC.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Novas Raízes</Text>
            <TextInput
                style={styles.email}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.senha}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        width: '20%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    email: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
        width: '90%',
        height: '7%',
        marginBottom: 20,
        padding: 22,
    },
    senha: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
        width: '90%',
        height: '7%',
        marginBottom: 20,
        padding: 22,
    },
    logo: {
        top: '-20%',
        width: 50,
        height: 74,
},
});

export default LoginScreen;