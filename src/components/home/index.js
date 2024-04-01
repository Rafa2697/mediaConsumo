
import React from 'react';
import styles from './style'
import { View, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo2}>1. Calcular a média de consumo de combustível do seu veículo:</Text>
            <Text style={styles.paragraph}>
                Basta inserir a quilometragem percorrida e a quantidade de litros abastecida.
                O aplicativo calcula automaticamente a média de consumo em km/l.
                Acompanhe o histórico de consumo e identifique possíveis problemas no seu veículo.
            </Text>

            <Text style={styles.titulo2}>2. Estimar o custo de uma viagem:</Text>
            <Text style={styles.paragraph}>

                Informe a quilometragem da viagem, o valor do litro do combustível e a média de consumo do seu veículo.
                O aplicativo calcula o valor total gasto com o combustível.
                Planeje suas viagens com antecedência e evite surpresas no orçamento.
            </Text>

            <Text style={styles.titulo2}>O aplicativo é ideal para:</Text>
            <Text style={styles.paragraph}>
                
                Motoristas que desejam economizar com combustível.
                Planejadores de viagens que precisam calcular custos com antecedência.
                Proprietários de frotas que precisam gerenciar o consumo de seus veículos.
            </Text>


        </View>

    )
}


export default Home;