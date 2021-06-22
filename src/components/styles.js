
import { makeStyles } from "@material-ui/core";
import "../index.css";

export default makeStyles ((theme) => ({
  mainContainer:{
    flex:1,
    marginTop:10,
    
  },
  centerContainer:{
    maxWidth:"100%",
      display:"flex",
        flexDirection:"row",
      marginTop:10,
      paddingTop:10,
      [theme.breakpoints.down('sm')]:{
          display:"flex",
          flexDirection:"column-reverse"
        },
        
  },
  details:{
    width:"100%"
,      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      
  },
  subHeading:{
  width:"100%"
  },
  detailsHeading:{
     [theme.breakpoints.down('sm')]: {
      fontSize:24,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:30,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:38,
    },
    fontFamily:"Montserrat",
      fontWeight:"bold"
  },
  detailsSubHeading:{
    [theme.breakpoints.down('sm')]: {
      fontSize:12,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:12,
      textAlign:"center"
    },
      fontWeight:"lighter",
      fontFamily:"Montserrat",
      color:"gray"
  },
  Button:{
      fontFamily:"Montserrat",
      padding:12,
      paddingRight:20,
      paddingLeft:20,
      fontSize:14,
      borderRadius:25,
    '&:hover': {
          background: '#FF4F5A',
      },
       backgroundColor:"#FF4F5A"
     
  },
  inputField:{
    width:"70%",
    color:"#222",
    backgroundColor:"#fafafa",
    '&:hover': {
        background: '#fafafa',
    },
    '&:focus': {
       borderColor: 'yellow',
     },
    outline:4
  },
  buttonGroup:{
    display:"flex",
    justifyContent:"space-evenly", 
    alignItems:"center",
    width:"100%",
    [theme.breakpoints.down('sm')]:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      alignItems:"center"
    },

  },
  utton:{
    padding:12,
    paddingRight:25,
    paddingLeft:25,
    backgroundColor:"#ff4f5a",
    '&:hover': {
        background: '#ff4f5a',

    },
    [theme.breakpoints.down('sm')]:{
      margin:theme.spacing(2)
    },
    color:"#fafafa"
  },
  listContainer:{
    margin:theme.spacing(2),
    textAlign:"center"
  },
   listTitle:{
      fontFamily:"Montserrat",
      fontSize:20,
      fontWeight:"600"
  },
  margin: {
    margin: theme.spacing(2),
  }

}));