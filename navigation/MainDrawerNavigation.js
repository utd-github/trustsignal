import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import TabBarIcon from "../components/TabBarIcon";

import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FreeSignalsScreen from "../screens/FreeSignalsScreen";
import NavDrawerContent from "../components/NavDrawerContent";
import SupportScreen from "../screens/support";
import PremiumSignalsScreen from "../screens/PremiumSignals";
import BlogScreen from "../screens/Blog";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

// Free Signal //
const FreeSignalsStack = createStackNavigator(
  {
    FreeSignals: FreeSignalsScreen
  },
  config
);

FreeSignalsStack.navigationOptions = {
  drawerLabel: "Free Signals",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

FreeSignalsStack.path = "";
// Free Signal //

// Premium Signal //
const PremiumSignalsStack = createStackNavigator(
  {
    PremiumSignals: PremiumSignalsScreen
  },
  config
);

PremiumSignalsStack.navigationOptions = {
  drawerLabel: "Premium Signals",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

PremiumSignalsStack.path = "";
// Premium Signal //

// NOtification //
const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationsScreen
  },
  config
);

NotificationsStack.navigationOptions = {
  drawerLabel: "Notifications",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

NotificationsStack.path = "";
// Notification //

// Blog //
const BlogStack = createStackNavigator(
  {
    Blog: BlogScreen
  },
  config
);

BlogStack.navigationOptions = {
  drawerLabel: "Blog",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

BlogStack.path = "";
// Blog //

// Settings //
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  drawerLabel: "Settings",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
    />
  )
};

SettingsStack.path = "";
// Settings //

// Support //
const SupportStack = createStackNavigator(
  {
    Support: SupportScreen
  },
  config
);

SupportStack.navigationOptions = {
  drawerLabel: "Support",
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-info" : "md-info"}
    />
  )
};

SupportStack.path = "";
// Support //

// Setting Drawer
const MainDrawerNavigation = createDrawerNavigator(
  {
    FreeSignalsStack,
    PremiumSignalsStack,
    BlogStack,
    NotificationsStack,
    SupportStack,
    SettingsStack
  },
  {
    contentComponent: NavDrawerContent
  }
);

MainDrawerNavigation.path = "";

export default MainDrawerNavigation;
