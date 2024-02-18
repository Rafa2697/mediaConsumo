import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native'
import ResultConsumo from "./ResultConsumo";
import styles from "./style"

const Form = () => {

    const [km, setKm] = useState(null)
    const [litros, setLitros] = useState(null)
    const [messageConsumo, setMessageConsumo] = useState("preencha os valores...")
    const [consumo, setConsumo] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)

    function calcularMedia() {
        let litrosFormat = litros.replace(",",".")
        return setConsumo(
            (km / litrosFormat).toFixed(2)
            
            )
    }

    function verificationConsumo(){
        setErrorMessage('Campo obrigatório*')
        Vibration.vibrate()
    }
    function validationConsumo() {
        if (km != null && litros != null) {
            calcularMedia()
            setKm(null)
            setLitros(null)
            setMessageConsumo('A média de consumo é: ')
            setTextButton('calcular novamente')
            setErrorMessage(null)
            
        }else{
            verificationConsumo()
            setConsumo(null)
            setTextButton('Calcular')
            setMessageConsumo('Preencha os valores')

        }
       
        
    }
    return (

        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>KM rodados</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setKm}
                    value={km}
                    placeholder="Ex.100.1"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Litros Abastecido</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setLitros}
                    value={litros}
                    placeholder="Ex.16.0"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPressOut={Keyboard.dismiss}
                    onPress={() => validationConsumo()}>
                    <Text style={styles.textButtom}>
                        {textButton}
                    </Text>

                </TouchableOpacity>
            </View>
            <ResultConsumo 
            messageResultConsumo={messageConsumo} ResultConsumo={consumo} />
        </Pressable>
    )
}

export default Form;