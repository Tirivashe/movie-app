import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "1rem",
    padding: "2rem",
    width: "100%",
    height: "100%"
  },

  loader: {
    marginTop: "20%"
  },

  links: {
    textDecoration: "none"
  },

  pagination: {
    marginTop: "3rem",
    marginBottom: "1rem",
    backgroundColor: "#fff",
    padding: "0.5rem",
    borderRadius: "2rem",
    boxShadow: "5px 5px 25px rgba(0,0,0,0.8)",
    color: "#fff"
  }
}))