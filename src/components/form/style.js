import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    formLabel: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#F1F4FF',
        height: 60,
        fontSize: 16,
        
        paddingLeft: 10,
    },
    textButtom: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'

    },
    button: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 60,
        backgroundColor: '#1F41BB',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',

    }
});

export default styles