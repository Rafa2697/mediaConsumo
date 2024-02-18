import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        bottom: 0,
        backgroundColor: "white",
        alignItems: "center",
       
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textButton: {
        fontSize: 20,
        color: 'white',

    },
    button: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
});

export default styles