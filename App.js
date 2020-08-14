import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Ellipse } from "react-native-svg";
import { exp } from 'react-native-reanimated';
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import ExploreScreen from './src/components/ExploreScreen';
import ProfileScreen from './src/components/ProfileScreen';
import SettingScreen from './src/components/SettingScreen';
import SupportScreen from './src/components/SupportScreen';
import BookmarkScreen from './src/components/BookmarkScreen';


import { DrawerContent } from './src/components/DrawerContent';

import RootStackScreen from './src/components/RootStackScreen';

import DoggyScreen from './src/components/doggyComponent';

import { AuthContext } from './src/components/Context';



import AsyncStorage from '@react-native-community/async-storage';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const SupportStack = createStackNavigator();
const BookmarkStack = createStackNavigator();


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = ({ navigation }) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',
    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title: 'Home Screen',

    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</HomeStack.Navigator>
);


const DetailStackScreen = ({ navigation }) =>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',

    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <DetailStack.Screen name="Details" component={DetailScreen} options={{
    title: 'Updates',
    defaultNavigationOptions: {
      gestureEnabled:true,
    },
    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</DetailStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) =>(
  <ExploreStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',

    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
    title: 'Explore',
    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</ExploreStack.Navigator>
);


const ProfileStackScreen = ({ navigation }) =>(
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',

    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
    title: 'Profile',
    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</ProfileStack.Navigator>
);

const SettingStackScreen = ({ navigation }) =>(
  <SettingStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',

    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <SettingStack.Screen name="SettingScreen" component={SettingScreen} options={{
    title: 'Setting',
    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</SettingStack.Navigator>
);

const SupportStackScreen = ({ navigation }) =>(
  <SupportStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',

    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <SupportStack.Screen name="SettingScreen" component={SupportScreen} options={{
    title: 'Support',
    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</SupportStack.Navigator>
);

const BookmarkStackScreen = ({ navigation }) =>(
  <BookmarkStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#008387',

    },
    headerTintColor: '#FFF',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }}>
  <BookmarkStack.Screen name="SettingScreen" component={BookmarkScreen} options={{
    title: 'Bookmark',
    headerLeft:() =>(
      <Icon.Button name="ios-menu" size={35} backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
    )
  }} />

</BookmarkStack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Updates"
      component={DetailStackScreen}
      options={{
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

);

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      { loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;