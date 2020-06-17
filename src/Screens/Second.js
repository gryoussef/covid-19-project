import React, { Component } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity ,Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class Second extends Component{
render(){
    return(
        
        <LinearGradient 
        colors={['#48A0B4', '#F0FBFD']}
        style={styles.container}>
        
        <Text style={styles.title_text}>Comment l'application fonctionne ? </Text>
          <Image source={require('../assets/trans.png')} style={styles.image}/>
            <View style={styles.text_view}>
            <Text style={styles.black_text}>Comment ça marche</Text>
            <Text style={styles.text}>Nous stockons des données limitées </Text>
            <Text style={styles.text}>Les seules données d'identité que nous stockons sont: </Text>
            <Text style={styles.text}>Ton numero de téléphone</Text>

            <Text style={styles.black_text}>Comment ça marche</Text>

            <Text style={styles.text}>Lorsque vous vous inscrivez,un ID utilisateur aléatoire</Text>
            <Text style={styles.text}>est  généré  et  associé  à   votre   numéro  de   moblie</Text>
            <Text style={styles.text}>ce   dernier   et   l'ID   sont   stockés    sur   un   serveur</Text>
            <Text style={styles.text}>securisé    et    ne   sont   jamais    affichés  au   public.</Text>
            <Text style={styles.text}>Nous ne collectons pas données sur votre position GPS</Text>
            
            <Text style={styles.text}>StayAtHome utilise bleutooth pour approximer votre distance.</Text>

            
            
            </View>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('SigninHome')}
            style={styles.btn}>
                <Text style={styles.btn_text}>Genial</Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    image:{
        width:250,
        height:170,
        marginVertical:-10

        //resizeMode: 'stretch',
        //flex:3
    },
    black_text:{
       
        color:'black',
        fontWeight: 'bold',
        fontSize:18,
        paddingVertical:5,
        marginHorizontal:8
        
    },
    text:{
        fontSize:14,
        paddingVertical:2,
        marginHorizontal:8

    },
    title_text:{
        fontSize:20,
        //paddingVertical:5,
        marginHorizontal:8,
        marginVertical:20,
        color:'black',
        fontWeight: 'bold'
        
    },
    btn:{
        flex:0.5,
        alignSelf:'center',
        backgroundColor:'#304092',
        padding:10,
        // shadowColor:'black',
        // shadowRadius:12,
        marginVertical:50,
       

    },
    btn_text:{
        color:'white',
        fontSize:20
    },
    text_view:{
        flex:4,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginBottom:10,
        marginVertical:0

    }
})