import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  form: {
    marginTop: "8rem",
    margin: "0 auto",
    width: "30%"
  },

  textField: {
    '&:active': {
      border: "none"
    }
  }
}))