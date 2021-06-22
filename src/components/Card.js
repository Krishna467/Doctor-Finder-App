import { Card,CardContent,Typography,CardMedia } from "@material-ui/core";

import Image from "../avatar2.png";
import useStyles from "./cardStyles.js";


const CardComponent = (data) => {
    
    const classes = useStyles();


    return (

     <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.doctorName}>
            {`${data.firstName} ${data.lastName} ${data.title} `}
          </Typography>
          <Typography variant="subtitle1" className={classes.doctorSpecialist} >
            {data.speciality}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Typography variant="caption" color="textSecondary" className={classes.doctorAddress}>{`${data.address} ${data.country} ${data.state}`}</Typography>
        </div>
      </div>
       <CardMedia
       component="img"
       image={Image}
       className={classes.cover}
       />
    </Card>
    )




}



export default CardComponent;