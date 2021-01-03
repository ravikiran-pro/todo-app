import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Register from './register';

import {st_Accounts} from './styles';

const Accounts = () => {
    const classes = st_Accounts();
    return(
        <Container className={classes.root} maxWidth='xl'>
            <Box className={classes.logo}>
                <img src={'/images/logo.png'} alt="logo" width='100%'></img>
            </Box>  
            <Grid container className={classes.panel}>
                <Grid item xs={6} className={classes.panelItemLeft}>
                    <Box textAlign='center'>
                        <img className={classes.imgfluid} src={'/images/todo-cover.jpg'} alt="background"/>
                    </Box>
                </Grid>
                <Grid item xs={6}> 
                    <form>
                        <Grid item xs={12} className={classes.title}>
                            <Typography variant="h5" component="div" >
                                Sign Up
                            </Typography>
                            <hr className='underLine'></hr>
                        </Grid>
                        <Register/>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Accounts;