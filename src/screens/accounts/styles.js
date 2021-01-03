import {makeStyles} from '@material-ui/core/styles';

const logo_width = 50;

const st_Accounts = makeStyles(theme =>({
    root:{
        height:'100%',
        display:'flex',
        padding:theme.spacing(8),
        backgroundImage: `url(/svg/wavy.svg)`,
    },
    logo:{
        position:'absolute',
        marginTop:-logo_width/1.5,
        width:logo_width
    },
    panel:{
        backgroundColor:'white',
        borderRadius:10,
        boxShadow: '0 8.5px 10px rgba(0, 0, 0, 0.032),0 100px 80px rgba(0, 0, 0, 0.07)',
    },
    panelItemLeft:{
        display:'flex',
        alignItems:'center',
        borderRight:'solid 2px #F8FAFC'
    },
    imgfluid:{
        maxWidth: '100%',
        height: 'auto',
    },
    title:{
        textAlign:'center',
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(3),
        '& .MuiTypography-root':{
            fontWeight:800
        },
        '& .underLine':{
            backgroundColor:theme.palette.error.main,
            borderRadius:'60%',
            width:100,
            height:3
        }
    },
}))


var custom_wrapper={
        display:'flex',
        justifyContent:'center',
        '& .MuiFormControl-root':{
            width:'100%',
        },
        '& .MuiInputBase-input':{
            padding:'16.5px 14px'
        },
        '& .MuiInputLabel-root':{
            fontSize:14
        },
        '& .MuiFormHelperText-root':{
            marginBottom:'8px'
        }
    }

const st_InputWrapper = makeStyles(theme=>({
    wrapper:custom_wrapper
}))

export {st_Accounts,st_InputWrapper};