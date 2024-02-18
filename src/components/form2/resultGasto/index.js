import React from "react";
import { View, Text } from "react-native";  
import styles from "./style";
const ResultGasto = (props) => {
    return(

        <View style={styles.resultConsumo} >
            <Text style={styles.information}>{props.messageResultGasto}</Text>
            <Text style={styles.numberResult}>{props.exibeGasto}</Text>
            
        </View>
    )
}

export default ResultGasto;