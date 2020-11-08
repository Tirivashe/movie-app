import { makeStyles } from '@material-ui/core/styles' 

export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    padding: "2.5rem",
    boxSizing: "border-box",
  },

  content: {
    
  },

  textContent: {
    height: "100%"
  },

  title: {
    marginTop: "1rem",
    marginBottom: "2.5rem",
  },

  image: {
    height: "100%"
  },

  overview: {
  },

  buttonLink: {
    margin:"2.5rem 0",
    textDecoration: "none",
    width: "15%"
  },

  button: {
    backgroundColor: "#522A85",
    padding: "0.5rem",
    borderRadius: "2rem",
    boxShadow: "5px 5px 25px rgba(0,0,0,0.8)",
    color: "#E73DEB",
    width: "100%",
    '&:hover': {
      color: "#000",
      backgroundColor: "#fff"
    }
  },

  chip: {
    display: "block"
  }
  
}))