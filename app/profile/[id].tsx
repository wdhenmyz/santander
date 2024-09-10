import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar, Text, StyleSheet, Pressable, View, TextInput, ImageBackground, ScrollView, Image} from "react-native"
import { useLocalSearchParams, Stack } from "expo-router";

export default function Screen () {
    const {id} = useLocalSearchParams();
    return (
        <SafeAreaView>
            <StatusBar />
            <Stack.Screen 
            options={{
                title:'perfil de: ' + id
            }}/>
            <Text>TELA PERFIL {id}</Text>

        </SafeAreaView>
    );
}