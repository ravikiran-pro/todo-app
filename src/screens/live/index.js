import React from 'react';
import { Typography} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class Live extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <React.Fragment>
                <Typography variant="h3">
                    Live Page
                </Typography>
            </React.Fragment>
        )
    }
}

export default withRouter(Live);