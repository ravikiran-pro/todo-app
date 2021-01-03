import {useEffect,useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import React from 'react-dom'
const useStyles = makeStyles((theme,props)=>({
    position:{
        position:'fixed',
        padding:10,
        zIndex:1000
    },
}))

const Notify = (props) =>{
    const [is_Show,setShow] = useState(props.status);
    useEffect(() => {
        setTimeout(function(){ 
            setShow(null)
        }, 
        1000); 
      },[]);

    function findPos(position)  {
        let Pos={}
        if(position.includes('top')){
            Pos['top']= 0 ;
            if(position.includes('left')){
                Pos['left']= 0;
            }    
            else if(position.includes('right')){
                Pos['right']= 0;
            }
        }else if(position.includes('bottom')){
            Pos['bottom'] = 0;
            if(position.includes('left')){
                Pos['left']= 0;
            }    
            else if(position.includes('right')){
                Pos['right']= 0;
            }
        }
        return Pos;
    }
    let Pos=findPos(props.position);
    const classes = useStyles(props,Pos);
    if(is_Show){
        return(
            <Box 
                className={classes.position} 
                top={Pos.top} bottom={Pos.bottom} 
                right={Pos.right} left={Pos.left} >
                <Alert 
                    severity={props.color} 
                    variant={props.variant}>
                    {props.message}
                </Alert>
            </Box>
        )
    }else{
        return (null)
    }
}

export default Notify;