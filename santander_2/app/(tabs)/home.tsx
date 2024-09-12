import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar, Text, StyleSheet, Pressable, View, TextInput, Image, Switch} from "react-native"
import {Link, router} from "expo-router"
import { useState } from "react"

/*
  navigate ---- padrão, não criando historico, mostrando o historico
  push ---- criando historico gastando espaço, mostrando o historico criado
  replace ---- apaga todo o histórico e cria só um, não mostra opção de voltar
*/ 

export default function Screen () {
  const click = () => {
    router.navigate('/')
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
        <View style={{width: '100%'}}>
          <View 
            style={{
              width: '100%', 
              height: 45,
              backgroundColor: 'red',
              justifyContent: 'space-around', 
              alignItems: 'center', 
              flexDirection: 'row'}}
              >

            <View style={styles.paragrafo}>
              <Image 
                source={require('../../assets/logo2.png')} 
                style={styles.logo}
              />
              <Text style={styles.paragrafo}>santander</Text>
            </View>

            <Image
              source={{uri:"https://cdn-icons-png.flaticon.com/128/1094/1094999.png"}}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={{width:'100%'}}>
          <Text style={{fontWeight: '400', fontSize: 17, marginTop: 15}}> Acessar sua conta </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15, padding: 8,}}
            placeholder="CPF"
            keyboardType="default"/>

          <View style={{marginTop: 25, width: '100%', justifyContent: 'space-between', flexDirection:'row', height: 40, alignContent:'center'}}>
            <Text> Lembrar meu CPF </Text>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <Pressable style={styles.btn}>
            <Text style={{color:'white'}}> Entrar </Text>
        </Pressable>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    alignItems:'center',
    flexDirection: 'column',
  },

  paragrafo: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    alignItems: 'center',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logo: {
    width: 30,
    height: 30,
  },

  btn: {
    width: '95%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  }
})