import {Stack} from 'expo-router';

export default function RootLayout () {
  return (
    <Stack 
      screenOptions= {{ headerShown:false }}
    >
      <Stack.Screen name='index' options={{title:'index', headerShown: false}} />
      <Stack.Screen name='home' options={{title:'home', animation:'ios'}} />
      <Stack.Screen name='(aux)/termos' options={{title:'termos', animation:'ios'}} />
      <Stack.Screen name='(aux)/frete' options={{title:'frete', animation:'ios'}} />
      <Stack.Screen name='profile/[id]' />

    </Stack>
  );
}