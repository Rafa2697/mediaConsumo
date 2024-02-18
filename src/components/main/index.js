import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer'
import Form from '../form/index'
import Form2 from '../form2/index'
import styles from "./style";

const Drawer = createDrawerNavigator();
const Main = () => {
    return (
        <NavigationContainer style={styles.main}>
            <Drawer.Navigator>
                <Drawer.Screen name="Media Consumo" component={Form} />
                <Drawer.Screen name="Gasto Trajeto" component={Form2} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Main;