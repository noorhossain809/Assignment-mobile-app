import {View, Image,StyleSheet} from 'react-native'
import Text from '../components/text/Text'
import { colors } from '../theme/colors'
import logo from '../../assets/images/Double.png'; 
import mask from '../../assets/images/Mask.png'; 
import hands from '../../assets/images/hands.png'; 
import frame from '../../assets/images/Frame.png'; 
import { spacing } from '../theme/spacing';

export default function Prevention(){
    return(
      <View>
            <Text preset="h1" style={{color: colors.dark, marginLeft: spacing[5], marginTop: spacing[5], fontSize: 26, fontWeight: '700'}}>Prevention</Text>
            <View style={styles.groupImg}>
            <View style={{alignItems: 'center'}}>
            <Image source={logo} style={{ width: 90, height: 90 }} /> 
            <Text preset="h4" style={{color: colors.dark, fontWeight: '700'}}>Avoid close</Text>
            <Text  preset="h4" style={{color: colors.dark, alignItems: 'center',fontWeight: '700'}}>contact</Text>
            </View>
           <View style={{alignItems: 'center'}}>
           <Image source={hands} style={{ width: 90, height: 90 }} /> 
           
            <Text preset="h4" style={{color: colors.dark,fontWeight: '700'}}>Clean your</Text>
            <Text  preset="h4" style={{color: colors.dark, alignItems: 'center',fontWeight: '700'}}> hands often</Text>
           </View>
           <View style={{alignItems: 'center'}}>
           <Image source={mask} style={{ width: 90, height: 90 }} /> 
            <Text preset="h4" style={{color: colors.dark,fontWeight: '700'}}>Wear a</Text>
            <Text  preset="h4" style={{color: colors.dark, alignItems: 'center',fontWeight: '700'}}>facemask</Text>
           </View>
            </View>
            <View style={styles.test}>
                <View style={styles.tesDes}>
                <Image source={frame} style={{ width:130, height: 140,left: spacing[2], paddingBottom: spacing[2]}} /> 
               <View style={{marginBottom: spacing[8], left: spacing[4]}}>
               <Text preset="h3" style={{marginBottom: spacing[2], fontSize: 22, lineHeight: 22, fontWeight: '700'}}>Do your own test!</Text>
               <View>
               <Text preset="small">Follow the instructions to </Text>
                <Text preset="small">do your own test.</Text>
               </View>
               </View>
                </View>
           
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    groupImg:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[4],
        marginTop: spacing[5]
    },
    test:{
        backgroundColor: colors.LinearGradient,
        
        margin: spacing[4],
        borderRadius: 20,
       
        marginBottom: spacing[5]
    },
    tesDes:{
        flexDirection: 'row',
        alignItems: 'center',
        
    }
})