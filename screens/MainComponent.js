import { Platform, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
}

const ContactNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Contact'
            screenOptions={screenOptions}>
                <Stack.Screen
                    name='Contact'
                    component={ContactScreen}
                    options={({ navigation }) => ({
                        title: 'Contact Us',
                        headerLeft: () => (
                            <Icon 
                                name='address-card'
                                type='font-awesome'
                                iconStyle={Styles.stackIcon}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        )
                    })}
                />
        </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='About'
            screenOptions={screenOptions}>
                <Stack.Screen
                    name='About'
                    component={AboutScreen}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <Icon 
                                name='info-circle'
                                type='font-awesome'
                                iconStyle={Styles.stackIcon}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        )
                    })}
                />
        </Stack.Navigator>
    )
}

const HomeNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={screenOptions}>
                <Stack.Screen 
                    name='Home'
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: 'Home',
                        headerLeft: () => (
                            <Icon 
                                name='home'
                                type='font-awesome'
                                iconStyle={Styles.stackIcon}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        )
                    })}
                />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}>
                <Stack.Screen 
                    name='Directory'
                    component={DirectoryScreen}
                    options={{title: 'Campsite Directory'}}
                />
                <Stack.Screen 
                    name='CampsiteInfo'
                    component={CampsiteInfoScreen}
                    options={({ navigation }) => ({
                        title: 'Campsite Directory',
                        headerLeft: () => (
                            <Icon 
                                name='list'
                                type='font-awesome'
                                iconStyle={Styles.stackIcon}
                                onPress={() => navigation.toggleDrawer()}
                            />
                        )
                    })}
                />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View 
            style={{ flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({color}) => (
                            <Icon  
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{width: 10}}
                                color={color}
                            />
                        )
                    }}
                />   
                <Drawer.Screen 
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Campsite Info',
                        drawerIcon: ({color}) => (
                            <Icon  
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{width: 10}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='About'
                    component={AboutNavigator}
                    options={{
                        title: 'About',
                        drawerIcon: ({color}) => (
                            <Icon  
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{width: 10}}
                                color={color}
                            />
                        )
                    }}
                /> 
                <Drawer.Screen 
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                        drawerIcon: ({color}) => (
                            <Icon  
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{width: 10}}
                                color={color}
                            />
                        )
                    }}
                />            
            </Drawer.Navigator>
        </View>
    );
};

const Styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})

export default Main;