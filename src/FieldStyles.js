import { makeStyles } from '@material-ui/core/styles'
import { COLORS } from './constants'

const fontFamily = 'campton-book'

export default isLightTheme => makeStyles({
  root: {
    '& .MuiTypography-root': {
      fontFamily
    },
    '& .MuiFormHelperText-root': {
      fontFamily
    },
    '& .MuiInputBase-input': {
      color: isLightTheme ? COLORS.nero : COLORS.white
    },
    '& .MuiIconButton-root': {
      color: isLightTheme ? COLORS.dimGray : COLORS.gainsboro,
      '&$checked': {
        color: COLORS.purpleHeart
      }
    },
    '& .Mui-error': {
      color: COLORS.flamingo
    },
    '& label.MuiInputLabel-outlined': {
      fontFamily,
      fontSize: '16px',
      color: isLightTheme ? COLORS.dimGray : COLORS.lightGray,
      '&.Mui-focused': {
        color: COLORS.curiousBlue
      }
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: COLORS.white
    },

    '& .MuiInput-underline': {
      '&:after': {
        borderBottomColor: COLORS.heliotrope
      }
    },
    ...(!isLightTheme && {
      '& .MuiOutlinedInput-input:-webkit-autofill': {
        '-webkit-text-fill-color': COLORS.white,
        '-webkit-box-shadow': `0 0 0px 1000px ${COLORS.nightRider} inset`
      }
    }),
    '& .MuiOutlinedInput-root': {
      fontFamily: 'campton-book',
      fontSize: '16px',
      '&.Mui-focused fieldset': {
        border: `1px solid ${COLORS.curiousBlue}`
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${COLORS.dimGray}`
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${COLORS.flamingo}`
      }
    }
  }
})()
