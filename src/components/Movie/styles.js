import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },

  image: {
    height: 700,
    width: "100%",
    
  },

  card: {
    transition: "transform 0.25s ease-out",
    '&:hover':{
      transform: "scale(1.05)"
    }
  }
}))