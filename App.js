import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import CreatePost from './screens/CreatePost';
import Feed from './screens/Feed';
import PostCard from './screens/PostCard';
import Profile from './screens/Profile';
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}