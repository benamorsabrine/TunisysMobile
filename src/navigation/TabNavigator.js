import React, { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/Colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfilScreen";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "./../contexts/AuthContext";
import PhoneTicket from "../screens/PhoneTicket";
import FieldTicket from "../screens/FieldTicket";
import Process from "../screens/Process";
import Alertes from "../screens/Alertes";
import Assign from "../screens/Tickets/Assign";
import Approval from "../screens/Tickets/Approval";
const Tab = createBottomTabNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import DetailsEquip from "../screens/DetailsEquip";
import SolvingRapport from "../screens/Rapport/SolvingRapport";
import ReporteRapport from "../screens/Rapport/ReporteRapport";
import Scanner from "../screens/ScannerDebut";
import Pickphoto from "../components/Camera";
import Affected from "../screens/Rapport/Affected";
import StartRapport from "../screens/Rapport/StartRapport";
import ScannerDebut from "../screens/ScannerDebut";
import ScannerFin from "../screens/ScannerFin";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="FieldTicket" component={FieldTicket} />
      <Stack.Screen name="PhoneTicket" component={PhoneTicket} />
      <Stack.Screen name="DetailsEquip" component={DetailsEquip} />
      <Stack.Screen name="Process" component={Process} />
      <Stack.Screen name="Alertes" component={Alertes} />
      <Stack.Screen name="Assign" component={Assign} />
      <Stack.Screen name="Approv" component={Approval} />
      <Stack.Screen name="Rej" component={Alertes} />
      <Stack.Screen name="Solved" component={Alertes} />
      <Stack.Screen name="Solving" component={Alertes} />
      <Stack.Screen name="StartRapport" component={StartRapport} />
      <Stack.Screen name="SolvingRapport" component={SolvingRapport} />
      <Stack.Screen name="ReporteRapport" component={ReporteRapport} />
      <Stack.Screen name="ScannerDebut" component={ScannerDebut} />
      <Stack.Screen name="ScannerFin" component={ScannerFin} />
      <Stack.Screen name="photo" component={Pickphoto} />
      <Stack.Screen name="Affected" component={Affected} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "0000" },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={({ route }) => ({
          //tabBarStyle :{display:'none'},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          //tabBarBadge: notifications.length,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
