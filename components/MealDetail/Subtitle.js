import { 
    View, 
    Text, 
    StyleSheet 
} from "react-native";
function SubTitle({children})
{
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
};

export default SubTitle;

const styles= StyleSheet.create({

    subTitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6
    },

    subTitleContainer:{
        padding: 6,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 12
    }
});