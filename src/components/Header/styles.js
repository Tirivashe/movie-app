import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  headerTitle: {
    marginLeft: "2rem",
    fontFamily: 'Nunito',
    fontSize:"2rem",
    fontWeight: "bold"
  },
  linkContainer: {
    width: "40%",
    marginRight: "5rem",
    
  },
   toolbar: {
     color: "#E73DEB",
     backgroundColor: "#522A85",
     fontWeight: "bold"
   },
   
   headerContainer: {
     width: "100%",
     height: "100%"
   },

   link_container: {
     width: "40%",
     height: "100%"
   },

   link: {
    color: "#E73DEB",
    height: "100%",
    fontFamily: "Nunito",
    fontSize: "1.2rem",
    backgroundColor:"#522A85",
    padding: "0.5rem 0",
   }
}))