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

   link: {
     color: "#E73DEB",
     fontFamily: "Nunito",
     fontSize: "1rem",
     backgroundColor:"#522A85",
     '&:hover':{
       backgroundColor:"#522A85"
     }
   },
   
   headerContainer: {
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     width: "100%",
     height: "100%",
     padding: "0 2rem"
   },

   link_container: {
     display: "flex",
     alignItems: "center",
     justifyContent: "space-between",
     width: "40%"
   }
}))