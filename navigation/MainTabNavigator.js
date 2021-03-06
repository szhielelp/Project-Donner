import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import Styles from '../constants/Styles';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScoresScreen from '../screens/ScoresScreen';
import SavedScoresScreen from '../screens/SavedScoresScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Reducers from '../reducers';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

const ScoresStack = createStackNavigator({
  Score: ScoresScreen,
});

ScoresStack.navigationOptions = {
  tabBarLabel: 'Score',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-image' : 'md-image'}
    />
  ),
};

const SavedScoresStack = createStackNavigator({
  SavedScores: SavedScoresScreen,
});

SavedScoresStack.navigationOptions = {
  tabBarLabel: 'Saved',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const AppNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    ScoresStack,
    SavedScoresStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      inactiveTintColor: Styles.Colors.tabIconDefault,
      activeTintColor: Styles.Colors.backgroundColor,
      activeBackgroundColor: Styles.Colors.tabIconDefault,
      inactiveBackgroundColor: Styles.Colors.backgroundColor,
      labelStyle: {
        paddingBottom: 3,
      },
    },
  },
);

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  app: Reducers,
});
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);
const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware, thunk));

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default () => <Root />;
