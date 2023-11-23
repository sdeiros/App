import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, StatusBar, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import { useFonts, Quando_400Regular } from '@expo-google-fonts/quando';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

const LoginScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        Quando_400Regular, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        // Verificação simples para o login (substitua por lógica de autenticação real)
        if (email === '@SAM' && password === '1234') {
          // Usuário: Sancrey Rodrigues
          navigation.navigate('Main', {
            userName: 'Sancrey Rodrigues',
            status: 'Concluído',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/Sancrey.png'),
          });

        } else if (email === 'ah.portes' && password === '1234') {
          // Usuário: Antonio Henrique
          navigation.navigate('Main', {
            userName: 'Antonio Henrique',
            status: 'Concluído',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/AntonioHenrique.png'),
          });
        
        } else if (email === 'fernando' && password === '1234') {
          // Usuário: Fernando Moreira
          navigation.navigate('Main', {
            userName: 'Fernando Moreira',
            status: 'Em andamento',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/FernandoMoreira.png'),
          });
        
        } else if (email === 'patricia' && password === '1234') {
          // Usuário: Patricia Amorim
          navigation.navigate('Main', {
            userName: 'Patricia Amorim',
            status: 'Req. Pendente',
            perfil: require('./Imagens/Perfil/PatriciaAmorim.png'),
          });
        
        } else if (email === 'arnaldo' && password === '1234') {
          // Usuário: Arnaldo de Carvalho
          navigation.navigate('Main', {
            userName: 'Arnaldo de Carvalho',
            status: 'Recusado',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/ArnaldoCarvalho.png'),
          });
        
        } else if (email === 'angelo' && password === '1234') {
          // Usuário: Angelo Gomes
          navigation.navigate('Main', {
            userName: 'Angelo Gomes',
            status: 'Em andamento',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/AngeloGomes.png'),
          });
        
        } else if (email === 'davi' && password === '1234') {
          // Usuário: Davi Medeiros
          navigation.navigate('Main', {
            userName: 'Davi Medeiros',
            status: 'Concluído',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/DaviMedeiros.png'),
          });
        
        } else if (email === 'ruan' && password === '1234') {
          // Usuário: Ruan Rosa
          navigation.navigate('Main', {
            userName: 'Ruan Rosa',
            status: 'Em andamento',
            advogado: 'Marlboro',
            perfil: require('./Imagens/Perfil/RuanRosa.png'),
          });
        
        } else if (email === 'artur' && password === '1234') {
          // Usuário: Artur Rodrigues
          navigation.navigate('Main', {
            userName: 'Artur Rodrigues',
            status: 'Req. Pendente',
            advogado: 'Ruan Rosa',
            perfil: require('./Imagens/Perfil/ArturRodrigues.png'),
          });
        
        } else if (email === 'luara' && password === '1234') {
          // Usuário: Luara Henrique
          navigation.navigate('Main', {
            userName: 'Luara Henrique',
            status: 'Em andamento',
            advogado: 'Rock',
            perfil: require('./Imagens/Perfil/LuaraHenrique.png'),
          });

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

            <KeyboardAvoidingView
                style={styles.formContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={styles.form}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.email}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.senha}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                        <View style={styles.fundoSeta}></View>
                        <Image
                            source={require('./Imagens/seta.png')}
                            style={styles.seta}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.esqueci}>
                        <Text style={styles.esqueciText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        width: '92%', // Ajuste a largura do formulário conforme necessário
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '30%',
    },
    title: {
        fontSize: 24,
        color: '#000',
        marginBottom: 20,
        top: '15%',
        fontFamily: 'Quando_400Regular',
    },
    button: {
        position: 'relative',
        backgroundColor: '#000',
        borderRadius: 28,
        width: '100%', // Ajuste a largura do botão conforme necessário
        aspectRatio: 4.5, // Mantém uma proporção de 2:1 (largura:altura)
        borderWidth: 2,
        borderColor: '#FFF',
        marginTop: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        width: '25%',
        color: '#fff',
        textAlign: 'left',
        right: '32%',
        fontSize: 26,
        fontFamily: 'Inter_600SemiBold',
        top: '14%',
    },
    email: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
        width: '100%', // O campo de e-mail agora ocupa a largura total
        height: '10.6%',
        marginBottom: 20,
        padding: 10,
        fontFamily: 'Inter_600SemiBold',
    },
    senha: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
        width: '100%', // O campo de senha agora ocupa a largura total
        height: '10.6%',
        marginBottom: 20,
        padding: 10,
        fontFamily: 'Inter_600SemiBold',
    },
    logo: {
        top: '10%',
        width: 50,
        height: 74,
        alignItems: 'center',
        marginBottom: 20,
    },
    esqueci: {
        width: '100%',
        textAlign: 'center',
        left: '30%',
    },
    esqueciText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 13,
    },
    fundoSeta: {
        position: 'absolute',
        width: 50, // Tamanho do círculo
        height: 50, // Tamanho do círculo
        borderRadius: 50, // Metade do tamanho para torná-lo um círculo
        backgroundColor: '#FFF',
        position: 'absolute',
        top: '17%', // Posição relativa ao componente pai
        left: '80%',
    },
    seta: {
        width: 35,
        height: 24,
        top: '-26%',
        left: '37%'
    },
    label: {
        width: '20%',
        textAlign: 'center',
        right: '41%',
        bottom: '0.5%',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16
    },
});

export default LoginScreen;
