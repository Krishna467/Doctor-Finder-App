
import { makeStyles } from "@material-ui/core";
import "../index.css";
export default makeStyles (() => ({
  logo:{
    fontFamily:"Montserrat",
    fontSize:24,
    fontWeight:"bolder",
    fontStyle:"italic",
    textDecoration:"none",
    color:"black"
  },
  topContainer:{
    height:"60%",
    marginTop:20,
    marginLeft:20,
  },
  header:{

    
  },
 button:{
   fontFamily:"Montserrat",
   fontSize:14,
   fontWeight:"bold", 
   color:"#ff4f5a",
  '&:hover': {
      color: '#FF4F5A',
  },
   
 }
}));