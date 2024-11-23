import { Text, View } from "react-native"



const BlockView = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: 16,
            marginBottom: 24,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            flexDirection: 'column'
        }}>
            <View style={{
                width: '100%',
                backgroundColor: '#f0f0f0',
                flexDirection:'row',
                justifyContent:"space-between",
                backgroundColor:'red'
            }}>
                <Text style={{
                    width: '60%',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: 16
                }}>Category</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: 'blue',
                    marginTop: 16,
                }}>See All</Text>
            </View> 
        </View>
    )
}

export default BlockView