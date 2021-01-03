import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {st_InputWrapper} from './styles';
import { useState } from 'react';
import Notify from './../../components/alert';

const base_url = 'http://localhost:3000/api/v1'

const _API = async (params) =>{
        let response=await fetch(base_url+'/user_accounts/register',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        })
        return {status:response.status,data:await response.json()};
}

const Register = () =>{
    const [state,setState] = useState({name:"", user_name:"", user_email:"", user_password:""});
    const [error,setError] = useState({name:" ", user_name:" ", user_email:" ", user_password:" "});
    const [alert,setAlert] = useState({message:"",type:"",position:""})
    const setErrorText = (id,value) =>{
        if(id==='user_password' && value.length<7){
            setError({...error,user_password: 'Password should be minimum of 8 characters'})
            return false;
        }
        if(value===''){
            setError({...error,[id]: 'This Field is Required'})
            return false;
        }else{
            setError({...error,[id]: ' '})
        }
        return true;
    }
    const handlechange = (event) => {
        let id = event.target.id;
        let value = event.target.value;
        setState({ ...state, [id]:value})      
        setErrorText(id,value);
    }
    const handleSubmitClick = async (event)  =>{
        if(
            state.name && 
            state.user_name && 
            state.user_email && 
            state.user_password &&
            error.user_email === ' ' &&
            error.user_name === ' ' &&
            error.user_password === ' '
        ){
            var response = await _API({
                name:state.name,
                username:state.user_name,
                email_id:state.user_email,
                password:state.user_password
            })
            if(response.status  ===200){
                setAlert({message:response.data,type:"success",position:"top right"})
            }else{
                if(response.data==='username'){
                    setError({...error, user_name:'User Already Found'})
                }else{
                    setError({...error, user_name:'Email Id Already Found'})
                }
            }
        }else{
            setAlert({message:"Fill All Required Fields",type:"error",position:"bottom right"})
        }
    }
    return(
        <>
            <InputWrapper
                input = {
                    <TextField
                        error={error.name===' ' ? false : true}    
                        id="name"
                        label="Enter Name"
                        helperText={error.name}
                        variant="outlined"
                        value={state.name}
                        onChange={handlechange}
                        />
                }
            />
            <InputWrapper
                input = {
                    <TextField
                        error={error.user_name===' ' ? false : true}
                        id="user_name"
                        label="Enter Username"
                        helperText={error.user_name} 
                        variant="outlined"
                        value={state.user_name}
                        onChange={handlechange}
                        />
                }
            />
            <InputWrapper
                input = {
                    <TextField
                        error={error.user_email===' ' ? false : true}
                        id="user_email"
                        label="Enter Email"
                        helperText={error.user_email}
                        variant="outlined"
                        value={state.user_email}
                        onChange={handlechange}
                        />
                }
            />
            <InputWrapper
                input = {
                    <TextField
                        error={error.user_password===' ' ? false : true}
                        id="user_password"
                        label="Enter Password"
                        helperText={error.user_password}
                        variant="outlined"
                        value={state.user_password}
                        onChange={handlechange}
                        />
                }
            />
            <Box display='flex' justifyContent='center' p={1}>
                <Button 
                    variant='contained' 
                    color="secondary"
                    onClick={handleSubmitClick}
                    >
                        Register
                </Button>
                {
                    alert.message!=='' ? 
                        <Notify 
                            status={true}
                            color={alert.type} 
                            message={alert.message} 
                            position={alert.position} 
                            variant='filled'
                            /> 
                            : null
                        }
            </Box>
        </> 
    )
}

const InputWrapper = (props) =>{
    const classes = st_InputWrapper();
    
    return(
        <Grid item xs={12} className={classes.wrapper}>
            <Grid item xs={12} sm={10} md={10} lg={8}> 
                {props.input}
            </Grid>
        </Grid>
    )
}

export default Register;