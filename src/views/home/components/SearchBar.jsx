import { Image, StyleSheet, TextInput, View } from "react-native"



const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Image style={{width:20, height:20}} source={require('../../../assets/images/search.png')}/>
            <TextInput
                placeholder="Search your Product..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        backgroundColor:"#cae6e5",
        paddingHorizontal: 8,
        borderRadius:12
    }
})

export default SearchBar;