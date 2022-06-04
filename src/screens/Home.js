import { 
    SafeAreaView,
    Platform, 
    StatusBar,
    View,
    StyleSheet,
    Button,
    Pressable,
    Image
} from "react-native"
import Text from "../components/text/Text"
import { colors } from "../theme/colors"
import { Feather } from '@expo/vector-icons';
import { spacing } from "../theme/spacing";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import flag from '../../assets/images/flag.png'; 
import Prevention from "./Prevention";

export default function Home(){
    
    return(
        <SafeAreaView  style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.white}}>
             <View style={styles.topHeader}>
             <View style={styles.menu}>
             <Feather style={{color: colors.white}} name="menu" size={24} color="black" />
             <Ionicons name="md-notifications-outline" size={24} color={colors.white} />
             </View>
             <View style={styles.covid}>
             <Text preset="h1" style={{fontWeight: "700", }} >Covid-19</Text>
             <Pressable style={styles.buttons} >
         <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
         <Image source={flag} style={{ width: 30, height: 30, right: spacing[3]}} /> 
      <Text style={styles.call}>USA</Text>
      <AntDesign name="caretdown" size={18} color="#61688B" style={{left: spacing[2]}} />
         </View>
    </Pressable>
             </View>
             <View style={{padding: spacing[5], left:spacing[2]}}>
                 <Text preset="h2" style={{fontWeight: "700", fontSize: 22, lineHeight: 22}}>Are you feeling sick?</Text>
                 <Text preset="small" style={styles.des}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
             </View>
             <View style={styles.btnGroup}>
             <Pressable style={styles.button} >
         <View style={{flexDirection: 'row', alignItems: 'center',}}>
         <Ionicons name="call" size={24} color={colors.white}  style={{marginRight: spacing[1]}}/>
      <Text style={styles.text}>Call Now</Text>
         </View>
    </Pressable>
    <Pressable style={styles.button2} >
    <View style={{flexDirection: 'row', alignItems: 'center',}}>
    <Ionicons name="chatbubble" size={24} color={colors.white} style={{marginRight: spacing[1]}} />
      <Text style={styles.text}>Send SMS</Text>
    </View>
    </Pressable>
             </View>
             </View>
             <View>
                 <Prevention />
             </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topHeader:{
        backgroundColor: colors.indigo,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40 ,
        height: 310
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: spacing[5]
    },
    covid:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[8]
    },
    buttons: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: colors.white,
        
      },
      call: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: colors.dark,
        right: spacing[1]
      },
      tinyLogo:{
          width: 30,
          height: 30,
          right: spacing[2]
      },
    des:{
        lineHeight: 22,
        marginTop: spacing[1],
        fontSize: 16,
        opacity: 0.8

    },
    btnGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
       
        marginHorizontal: spacing[2],
        marginBottom: spacing[5],
        alignItems: 'center',
        
              
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: colors.red,
        
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: colors.blue,
        marginLeft: spacing[2]
      },
})