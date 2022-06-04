
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
   fontFamily: typography.primary,
   fontSize: 16,
   color: colors.white

}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.white
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.white
}

const SEMI_BOLD ={
    fontFamily: typography.semiBold,
    fontSize: 32,
    color: colors.white
}

export const presets = {
   default: BASE,
   bold: BOLD,
   h1:{
       ...SEMI_BOLD,
       fontSize: 32,
       
   },
   h2:{
       ...SEMI_BOLD,
       fontSize: 28,
   },
   h3:{
       ...SEMI_BOLD,
       fontSize: 24,
   },
   h4:{
       ...SEMI_BOLD,
       fontSize: 14,
   },
   small:{
       ...SEMI_BOLD,
       fontSize: 16,
       lineHeight: 22,
       opacity: 0.6,
       
   }
}