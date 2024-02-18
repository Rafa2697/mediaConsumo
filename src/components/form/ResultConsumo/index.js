import React from "react";
import { View, Text } from "react-native";  
import styles from "./style"
const ResultConsumo = (props) => {
    return(

        <View style={styles.resultConsumo}>
            <Text style={styles.information}>{props.messageResultConsumo}</Text>
            <Text style={styles.numberResult}>{props.ResultConsumo}</Text>
            
        </View>
    )
}

export default ResultConsumo;