import React from 'react';
import Grid from '@mui/material/Grid';

export const about = () => {
  return (
    <>
    <Grid container justifyContent="center" alignItems="center" padding={4} spacing={4}>
      <Grid item xs={12}>
        <p>Welcome, my name is George Martinez and I am currently studying full stack web development at UC Irvine. There, I 
          have learned HTML, CSS, and Javascript. I am looking to begin a career in web development using the techincal skills
          I have learned.  
        </p>
      </Grid>
    </Grid>
    </>
  )
}

export default about 