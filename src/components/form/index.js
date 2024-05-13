import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native';
import Historico from "./historic.js";
import ResultConsumo from "./ResultConsumo/index.js";
import styles from "./style.js"

const Form = () => {

    const [nome, setNome] = useState(null)
    const [combustivel, setCombustivel] = useState(null)
    const [km, setKm] = useState(null)
    const [litros, setLitros] = useState(null)
    const [messageConsumo, setMessageConsumo] = useState("preencha os valores...")
    const [consumo, setConsumo] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)

    function calcularMedia() {
        let litrosFormat = litros.replace(",", ".")
        return setConsumo(
            (km / litrosFormat).toFixed(2)

        )
    }

    function verificationConsumo() {
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

           
           

        } else {
            verificationConsumo()
            setConsumo(null)
            setTextButton('Calcular')
            setMessageConsumo('Preencha os valores')
            console.log(nome)

        }


    }
    function submitForm() {
        // Navegar para a tela Historico e passar os dados do veículo
        props.navigation.navigate('Historico', {
          nome: nome,
          combustivel: combustivel,
          km: km,
          litros: litros,
        });
      }
      submitForm()
    return (
        
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Nome do Veiculo..."
                />

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setKm}
                    value={km}
                    placeholder="Quilómetros rodados..."
                    keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setLitros}
                    value={litros}
                    placeholder="Litros Abastecidos"
                    keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setCombustivel}
                    value={combustivel}
                    placeholder="Tipo de combustivel"
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

            <ResultConsumo messageResultConsumo={messageConsumo} ResultConsumo={consumo} />
          
           
        </Pressable>

        
    )
}

export default Form;