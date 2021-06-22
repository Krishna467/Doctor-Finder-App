import React,{useState,useEffect} from "react";
import {useHistory,useLocation} from "react-router-dom";
import { Grid ,Typography,Button,Avatar} from '@material-ui/core';
import useStyles from "./headerStyles";
import { useDispatch } from "react-redux";

const Header = () => {
   
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();



  // logout handler
  const logout = () => {
   
      dispatch({type : 'LOGOUT'});

      history.push("/");

      setUser((prevstate)  => !prevstate);

  }


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


  return (

    
   <Grid container className={classes.topContainer}>
     <Grid container spacing={2} justify="space-between" direction="row" alignItems="center" className={classes.header}>
       <Grid item xs={6} sm={3}>
          <Typography variant="h5" className={classes.logo}>DoctorFINDER</Typography>
       </Grid>
       {
       (user) &&
       <Grid container item xs={6} spacing={2}  className={classes.loginContainer} direction="row" justify="center" alignItems="center">
           <Grid item>
          <Button variant="text" color='default' disableFocusRipple className={classes.button} fullWidth onClick={logout}>Logout </Button>
           </Grid>
           <Grid item>
          <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
           </Grid>
        </Grid>
       } 
     </Grid>
   </Grid>
  );
}

export default Header;