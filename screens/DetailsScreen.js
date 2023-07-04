import { 
    View, 
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button
 } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function DetailsScreen({route, navigation}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find( (meal)=> meal.id === mealId)

    function headerButtonPressHandler(){
        console.log('Tap me press')
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        name='star' 
                        color='white' 
                        onPress={headerButtonPressHandler}
                    />
                );
            }
        });
    }, []);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>
            <MealDetails 
                duration={selectedMeal.duration}  
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({

    rootContainer:{
        marginBottom:32
    },

    image:{
        width: '100%',
        height: 350
    },

    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin:8,
        textAlign: 'center',
        color: 'white'
    },

    detailText: {
        color: 'white'
    },

    listOuterContainer:{
        alignItems: 'center'
    },

    listContainer:{
        maxWidth: '80%'
    }
});