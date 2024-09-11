import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabLayout() {
    return(
        <Tabs screenOptions={{headerShown: false, tabBarActiveBackgroundColor:'darkred'}}>
            <Tabs.Screen
                name="index"
                options={{
                    title:'HOME',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title:'LOGIN',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color}/>
                }}
            />
        </Tabs>
    );
}