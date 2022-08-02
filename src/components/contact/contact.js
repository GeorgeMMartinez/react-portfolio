import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';

const contact = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input aria-describedby="my-helper-text"></Input>
            </FormControl>
          </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email Address</InputLabel>
                <Input aria-describedby="my-helper-text"/>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField 
                label="Message" 
                multiline 
                rows={5} 
                fullWidth name="message"
              />
            </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button>Enter</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}


export default contact
