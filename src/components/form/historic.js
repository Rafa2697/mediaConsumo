import { View, Text, StyleSheet } from "react-native";
import React from "react";


export default function Historico(props, route) {

    // Dentro do seu componente Historico
const { nome, combustivel, km, litros } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.lista}>
                <Text>Nome do Veículo: {nome}</Text>
                <Text>Combustível: {combustivel}</Text>
                <Text>Kilômetros Rodados: {km}</Text>
                <Text>Litros Abastecidos: {litros}</Text>
            </View>
            <View style={styles.lista}>
                <Text>Lista 1</Text>
            </View>
            <View style={styles.lista}>
                <Text>Lista 1</Text>
            </View>
            <View style={styles.lista}>
                <Text>Lista 1</Text>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
    },

    lista: {
        width: 340,
        height: 120,
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowRadius: 5,

    }
})