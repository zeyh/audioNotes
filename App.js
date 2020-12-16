/* 
  Done: initial page navigation
? Doing: Specify initial UI
? Doing: folder layout shell: title, date, desciption, image, contents as a whole
? Doing: show full folder detail in description page
  TODO: add testing module with git push
  TODO: search bar 
  TODO: tag folder
  TODO: Audio initialize
*/


import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
    BottomNavigation,
    DefaultTheme, Provider as PaperProvider,
} from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import NewNoteScreen from "./screens/NewNoteScreen";

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([
        { key: 'home', title: 'Notes', icon: "folder-open-outline" },
        { key: 'addNew', title: 'New', icon: "lightbulb-outline" },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        addNew: NewNoteScreen,
    });

    const changeIcon = (props) => { //change nav icon based on which page is in
        setIndex(props);
        props == 0 ? setRoutes([ { key: 'home', title: 'Notes', icon: "folder-open-outline" },
        { key: 'addNew', title: 'New', icon: "lightbulb-outline" },]) 
        : setRoutes([ { key: 'home', title: 'Notes', icon: "folder-outline" },
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