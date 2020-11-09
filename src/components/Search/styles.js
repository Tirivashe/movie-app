import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  form: {
    marginTop: "8rem",
    margin: "0 auto",
    width: "25%"
  },
  textField: {
    '& label.Mui-focused': {
      color: "#c9c9c9",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#522A85",
      },
      '&:hover fieldset': {
        borderColor: '#7b42c3',
      },
      
    }
  }
}))

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: '#eee',
        color: "#000"
      }
    }
  },

  shape: {
    borderRadius: 30
  }
});
