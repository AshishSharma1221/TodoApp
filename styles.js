import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7D7D7'
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    input: {

        height: 50,
        width: 250,
        margin: 12,
        padding: 10,
    },
    button: {
        marginLeft: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'blue',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#F9F9FB',
        borderRadius: 16,
        marginTop: 20,
        marginLeft: 17,
        width: 343,
        height: 72,
    },
    todoText: {
        flex: 1,
        fontSize: 16,
        left: 23,
        width: 195,
        height: 24,
        color: '#30374F',
        lineHeight: 24,
    },
    emptyText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16,
        color: '#ABB6C8',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 17,
        marginRight: 24,
        padding: 20

    },
    heading: {
        color: '#5D6B98'

    },
    checkbox: {
        marginRight: 10,
        left: 22,
    },
    bottomBar: {
        backgroundColor: '#F9F9FB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 343,
        height: 72,
        borderRadius: 16,
        marginLeft: 17,
        marginBottom: 56,
    },
    topdata: {
        height: '45%',
        width: '100 %',
    },
    mainHeading: {
        top: 64,
        fontSize: 16,
        alignSelf: 'center',
        color: '#111322'
    },
    taskTitle: {
        color: '#5D6B98',
        fontSize: 14,
        top: 124,
        left: 17,
    },
    title: {
        color: '#1D2939',
        fontSize: 20,
        top: 140,
        left: 12,
    },
    descriptions: {
        color: '#5D6B98',
        fontSize: 14,
        top: 180,
        left: 17,
    },
    descrptionData: {
        color: '#111322',
        fontSize: 14,
        top: 200,
        left: 17,
        width: 342,
        height: 84,
        lineHeight: 20,
    },
    secondpart: {
        flex: 1,
        height: '55%',
    }
});

