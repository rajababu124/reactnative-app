import { Image, StyleSheet, Text, View } from "react-native";
import TopHeaderView from "../components/TopHeaderView";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import BlockView from "../components/BlockView";



const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <TopHeaderView />
            <View style={styles.searchContainer}>
                <SearchBar />
                <View style={{backgroundColor:'#3fccca', marginStart:16, borderRadius:4, padding:3}}>
                <Image style={{width:30, height:30}} source={require('../../../assets/images/filter.png')}/>
                </View>
            </View>
            <Banner />
            <BlockView />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    searchContainer:{
        flexDirection:"row",
         alignItems:"center", 
         paddingHorizontal:16,
         marginTop: 10
    }
})

export default HomeScreen;