import React from 'react';
import { Grid,Typography} from '@material-ui/core';



import Card from "./Card";
import data from "../csvjson.json";


const List = (props) => {  
    

  const filter = data.filter((data) => data.speciality.toLowerCase() === props.search || data.firstName.toLowerCase() === props.search || data.lastName.toLowerCase() === props.search);

 
    return (
         
        <Grid container justify="space-evenly" alignItems="center" spacing={4}  >

            {(!props.search) ? 
            

                 
             data.map((data) => {

              return (
              <Grid key={data.id} item xs={12} sm={8} lg={4}>
                 
                 <Card
                  firstName= {data.firstName}
                  lastName={data.lastName}
                  title={data.Title}
                  address={data.address}
                  speciality={data.speciality}
                  country={data.country}
                  state={data.State}
                   />

              </Grid>
              )
            }) 
             :
              (filter.length !== 0) ? 

             filter.map((filtered)=>  {
                  
                return (
                  
                       
                        
                <Grid key={filtered.id} item xs={12} sm={8} lg={4}>

                   <Card
                  firstName= {filtered.firstName}
                  lastName={filtered.lastName}
                  title={filtered.Title}
                  address={filtered.address}
                  speciality={filtered.speciality}
                  country={filtered.country}
                  state={filtered.State}
                   />
                </Grid>
                
                );
             })

             :
             <div>
               <Typography variant="body1">This Specialist or Doctor Not Available Right Now</Typography>
             </div>


                     }
            


            
             
        

                  
        </Grid>
   
    )
}

export default List
