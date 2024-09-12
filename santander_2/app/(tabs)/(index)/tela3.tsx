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


  return (
    <SafeAreaView >
      <StatusBar/>
      <Text>tela 3</Text>
      <Text>tela 3</Text>
      <Text>tela 3</Text>
      <Text>tela 3</Text>
      <Text>tela 3</Text>
      <Text>tela 3</Text>

      <Link href='/tela4'> ir para tela 4 </Link>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 500,
        flexDirection: 'column',
        backgroundColor: 'white',
        overflow: 'scroll',
      },
})