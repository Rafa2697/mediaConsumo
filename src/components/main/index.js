import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/index'
import Form from '../form/index'
import Form2 from '../form2/index'
import Historico from '../form/historic.js';
import styles from "./style";


const Drawer = createDrawerNavigator();
const Main = () => {
    return (
        <NavigationContainer style={styles.main}>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Media Consumo" component={Form} />
                <Drawer.Screen name="Gasto Trajeto" component={Form2} />
                <Drawer.Screen name="Historico" component={Historico} 
                options={{
                    title: 'Histórico Media de Consumo',
                    
                }}
                
                />
                

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Main;