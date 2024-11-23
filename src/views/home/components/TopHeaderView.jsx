import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const TopHeaderView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <TouchableOpacity>
                    <Image style={{width:20, height: 20}} source={require('../../../assets/images/menu.png')}/>
                </TouchableOpacity>
                <Image style={{width: 30, height:30}} source={require('../../../assets/images/profile.png')} />
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#333'
                }}>Hi Somesh</Text>
            </View>
            <View style={styles.rightContainer}>
            <Image style={{width: 30, height:30}} source={require('../../../assets/images/wallet.png')} />
            <Image style={{width: 30, height:30}} source={require('../../../assets/images/notification.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#F5FCFF'
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap:12
    },
    rightContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap:12
    }
})

export default TopHeaderView;