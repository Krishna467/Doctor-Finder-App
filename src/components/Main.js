import React, { useState,useEffect } from "react";
import { Grid ,Typography,Button,OutlinedInput,InputAdornment,IconButton} from '@material-ui/core';
import { useHistory,useLocation } from "react-router-dom";
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import useStyles from "./styles.js";


import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Close from "@material-ui/icons/Close";
import SearchIcon from '@material-ui/icons/Search';

import Image from "../3568984.jpg";
import List from "./List.js";


const Main = () => {
    
     const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

     const [search,setSearch] = useState("");
     
     const [searchList,setsearchList] = useState("");

     const classes = useStyles();  
     const dispatch = useDispatch();
     const location = useLocation();
     const history = useHistory();
      
    useEffect(() => {
       setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const googleSuccess = async (res) => {
  
         const result = res?.profileObj;
         const token = res?.tokenId;


         try {
            dispatch({type : 'AUTH', data : {result, token}});
        
            history.push("/");
         } catch (error) {
                 console.log(error.message);   
         }
          console.log(res);
       }
    
   const googleFailure = (error) => {
        console.log(error);
        console.log("gggoele sign in failure");
   }
   
   const handleChange = (e) => {
         const values = e.target.value;
         setSearch(values);
        }
        

    const handleSubmit = (e) => {

      setsearchList(search);
      
    }


    const clearButton = () => {
      setSearch("");
      setsearchList("");

        document.getElementById("focus").focus();
    }

    return ( 
      <div className={classes.mainContainer}>
    <Grid container className={classes.centerContainer} justify="space-between" alignItems="center">
         <Grid container item xs={12} lg={6}  spacing={2} direction="row" alignItems="center" justify="center">
            <Grid container item xs={12} lg={12}  className={classes.details} >
              <Typography variant="h4" className={classes.detailsHeading}>Find Your HealthCare.</Typography>
              <Typography variant="caption" className={classes.detailsSubHeading}>{(user) ? "We Help you to find doctors by signing in with Google." : "Find doctors by searching doctor's name or specialist."}</Typography>
            </Grid>

            <Grid container alignItems="center" justify="center" className={classes.subHeading}>
              {(user) ?                
              <div className={classes.buttonGroup}> 
                <OutlinedInput
                  id="focus"
                  autoComplete="off"
                  placeholder="Search for doctors"
                  className={classes.inputField}
                  value={search}
                  onChange={handleChange}
                  endAdornment={
                      <InputAdornment position="end">
                        {(search) &&  <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={clearButton}
                                            edge="end">
                                       <Close />
                                      </IconButton> }
                       </InputAdornment>
                   } />
                 <Button 
                    className={classes.utton} 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSubmit}  
                    endIcon={<SearchIcon />}>Search</Button>
              </div>
  
            :
                <GoogleLogin
                   clientId="21868689756-htrbkl49s76q92pr2o3c1dml8f8eovsn.apps.googleusercontent.com"
                   render={(renderprops) => (
                    <Button 
                    className={classes.Button}
                   variant="contained"
                   color="primary"
                   onClick={renderprops.onClick}
                   disabled={renderprops.disabled}
                    endIcon={<ArrowForwardIcon />} >Sign In With Google</Button>
                     )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
               />
             }
            </Grid>
        </Grid>
         
         
          <Grid item xs={12} sm={6}>
            <img src={Image} width="100%" height="100%" alt="Doctor's proffile" />
          </Grid>
       </Grid>





        <Grid item xs={12} className={classes.listContainer}>
         <Typography variant="h5" className={classes.listTitle}>Doctors List</Typography>
        </Grid>

         
        <List
          search={searchList}
        />


     </div>
    )
}

export default Main;