/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Icon from "react-native-vector-icons/FontAwesome";
import { MainTheme } from "./themes";

import BalanceScreen from "./screens/Balance/BalanceScreen";
import ExpenditureScreen from "./screens/Expenditures/ExpenditureScreen";
import RevenueScreen from "./screens/Revenues/RevenueScreen";

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer theme={MainTheme}>
					<Tab.Navigator>
						<Tab.Screen
							name='BalanceScreen'
							component={BalanceScreen}
							options={{
								tabBarLabel: "Balance",
								tabBarIcon: ({ color, size }) => (
									<Icon name='balance-scale' color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen
							name='RevenueScreen'
							component={RevenueScreen}
							options={{
								tabBarLabel: "Revenue",
								tabBarIcon: ({ color, size }) => (
									<Icon name='money' color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen
							name='ExpenditureScreen'
							component={ExpenditureScreen}
							options={{
								tabBarLabel: "Expenditure",
								tabBarIcon: ({ color, size }) => (
									<Icon name='shopping-cart' color={color} size={size} />
								),
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
