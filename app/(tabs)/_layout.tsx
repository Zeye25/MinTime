import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name='timer'
                options={{
                    title: 'Timer',
                }}
            />
            <Tabs.Screen 
                name='index'
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen 
                name='data'
                options={{
                    title: 'Data',
                }}
            />
        </Tabs>
    );
}