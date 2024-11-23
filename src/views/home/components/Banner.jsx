import { Text, TouchableOpacity, View } from "react-native"


const Banner = () => {
    return (
        <View style={{
            width:'100%',
            backgroundColor: '#89eb5b',
            paddingHorizontal: 16,
            marginTop: 24,
            flexDirection: 'row'
        }}>
            <View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 16
            }}>Subscription</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '900',
                color: '#474747',
                fontStyle: 'italic',
                marginTop: 16
            }}>{'"Feel the joy \n of a mother"'}</Text>
            <TouchableOpacity
                style={{
                    width: 150,
                    height: 40,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 16,
                    marginBottom: 16,
                    backgroundColor: '#3fccca'
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    paddingVertical: 8,
                    backgroundColor: '#3fccca',
                    borderRadius: 8,
                    textAlign: 'center'
                }}>Subscribe Now</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Banner