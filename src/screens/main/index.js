import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import routes from '../../router/routes';
import { withRouter } from 'react-router-dom';
import { localStorageKeys } from '../../utils';

import {
    Live,
} from '../index';

const headerHeight = 64;
const styles = theme => ({
    root: {
        height:'100%',
    },
    masterContainer:{
        marginTop:headerHeight,
        height:`calc( 100vh - ${headerHeight}px)`,
    }
  });

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggingOut : false
        }
    }
    logOut = () => {
        this.setState({
            loggingOut: true
        }, () => {
            setTimeout(() => {
                localStorage.removeItem(localStorageKeys.auth_token)
                this.props.history.push(routes.login)
            }, 5000);
        })
    }

    componentDidMount(){
        if(localStorage.getItem(localStorageKeys.auth_token)){
            this.props.history.push(routes.login);
        }
    }
    component_render(){
        const currentPath=this.props.location.pathname;
        if(currentPath === '/live'){
            return <Live/>
        }
    }
    render(){
        const { classes } = this.props;
        return(        
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <CssBaseline/>
                    </Grid>
                    <Grid item xs={12} className={classes.masterContainer}>
                        <Container>
                            {this.component_render()} 
                        </Container>
                    </Grid>
                </Grid>
        )
    }
}

export default withStyles(styles, { withTheme: true })(withRouter(Home));
