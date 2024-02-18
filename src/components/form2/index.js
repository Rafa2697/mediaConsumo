import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration,Pressable, Keyboard  } from 'react-native'
import ResultGasto from "./resultGasto";
import styles from "./style";

const Form2 = () => {

    const [percurso, setPercurso] = useState(null)
    const [media, setMedia] = useState(null)
    const [litroKm, setLitroKm] = useState(null)
    const [messageGasto, setMessageGasto] = useState('Preencha os valores... ')
    const [gasto, setGasto] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)

    function calcularGasto() {
        return setGasto(

            ((percurso / media) * litroKm).toFixed(2)
            
            
        )
    }

    function verificationGasto(){
        setErrorMessage('Campo obrigatório*')
        Vibration.vibrate()
    }

    function validarGasto() {
        if (percurso != null && media != null && litroKm != null) {
            calcularGasto()
            setPercurso(null)
            setMedia(null)
            setLitroKm(null)
            setMessageGasto('O valor gasto com combustivel é de: ')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
            
            return
        }
        verificationGasto()
        setGasto(null)
        setTextButton('Calcular')
        setMessageGasto('Preencha os valores para calcular')
        
    }
    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>
                    Quilômetros do percurso
                </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setPercurso}
                    value={percurso}
                    placeholder="Ex. 100"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>
                    Media do seu veiculo
                </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setMedia}
                    value={media}
                    placeholder="Ex. 26.87"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>
                    Valor por litro do combustivel
                </Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setLitroKm}
                    value={litroKm}
                    placeholder="Ex. 5.50"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPressOut={Keyboard.dismiss}
                    onPress={() => validarGasto()}>
                    <Text style={styles.textButton} >
                        {textButton}
                    </Text>

                </TouchableOpacity>
            </View>

            <ResultGasto style={styles.resultado}
                messageResultGasto={messageGasto}
                exibeGasto={gasto}
            />
        </Pressable>
    )
}

export default Form2;