/* 
  Done: initial home and new page navigation
  Done: add testing module with git push
  Done: card and edit card page navigation
? Doing: playing detail modal visibility:
? if none selected - no bottom bar shown
?     current seleciton ID - bottom bar show with current info with isPlay = True status on both

? Doing: Specify UI
? Doing: folder layout shell: title, date, desciption, image, contents as a whole
? Doing: show full folder detail in description page
  TODO: search bar function
  TODO: tag folder
  TODO: Audio initialize
! 🐞 bug : Cannot read property 'object' of null when adding any navigation in... [backend.bundle.js:1 ]
*/


import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    BottomNavigation,
    DefaultTheme, Provider as PaperProvider,
} from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import NewNoteScreen from "./screens/NewNoteScreen";
import EditFolderScreen from "./screens/EditFolderScreen";

const Stack = createStackNavigator();

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([
        { key: 'home', title: 'Folders', icon: "folder-open-outline" },
        { key: 'addNew', title: 'New', icon: "lightbulb-outline" },
    ]);

    const homeScreenStack = () => {
        return (
            <PaperProvider theme={theme}>
                <NavigationContainer data-cy="nav">
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="EditFolderScreen" component={EditFolderScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        )
    };

    const renderScene = BottomNavigation.SceneMap({
        home: homeScreenStack,
        addNew: NewNoteScreen,
    });

    const changeIcon = (props) => { //change nav icon based on which page is in
        setIndex(props);
        props == 0 ? setRoutes([{ key: 'home', title: 'Folders', icon: "folder-open-outline" },
        { key: 'addNew', title: 'New', icon: "lightbulb-outline" },])
            : setRoutes([{ key: 'home', title: 'Folders', icon: "folder-outline" },
            { key: 'addNew', title: 'New', icon: "lightbulb-on-outline" },]);
    }


    return (
        <PaperProvider theme={theme}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={changeIcon}
                renderScene={renderScene}
            />
            <StatusBar style="auto" />
        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        accent: '#F4DA40',
        background: "#FFFFFF",
        surface: "#FFFFFF",
        medium: "#898d8d",
    },
};


export default App;