import { images } from "@/constants";
import { Tabs } from "expo-router";
import { View, Image, Text } from "react-native";

const TabBarIcon = ({focused, filledIcon, outlinedIcon, title}: TabBarIconProps) => (
    <View className='flex min-w-20 items-center justify-center'>
        <Image source={ focused ? filledIcon : outlinedIcon } className='size-6' resizeMode='contain'/>
        <Text className={`text-base font-montserrat color-primary-100`}>
            {title}
        </Text>
    </View>
);

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 110,
                position: 'absolute',
                paddingTop: 20,
            }
        }}>
            <Tabs.Screen 
                name='timer'
                options={{
                    title: 'Timer',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Timer" filledIcon={images.filledTimer} outlinedIcon={images.timer} focused={focused} />
                }}
            />
            <Tabs.Screen 
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Home" filledIcon={images.filledHome} outlinedIcon={images.home} focused={focused} />
                }}
            />
            <Tabs.Screen 
                name='data'
                options={{
                    title: 'Data',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Data" filledIcon={images.filledData} outlinedIcon={images.data} focused={focused} />
                }}
            />
        </Tabs>
    );
}