import { makeStyles } from "@material-ui/core";
import "../index.css";

export default makeStyles ((theme) => ({
  root: {
    display: 'flex',
    justifyContent :"space-between",
    fontFamily : "Montserrat"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  doctorName:{
    
    fontFamily : "Montserrat",
    fontSize:18,
    fontWeight:"bold",
    [theme.breakpoints.down('sm')]:{
      fontSize:16
    },

  },
  doctorSpecialist:{
    fontFamily : "Montserrat",
    fontSize:14
  },
  doctorAddress:{
    fontSize:10
  }
}));