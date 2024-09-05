import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar, Text, StyleSheet, Pressable, View, TextInput} from "react-native"
import {Link, router} from "expo-router"

export default function Screen () {
  const click = () => {
    router.navigate('/')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

        
      <Link href='/' asChild>
        <Pressable style={styles.btn} onPress={click}>
          <Text>ir para index</Text>
        </Pressable>
      </Link>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },

  btn: {
    width: 200,
    height: 40,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  }
})