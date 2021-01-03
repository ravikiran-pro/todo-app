import {createMuiTheme} from '@material-ui/core/styles'

const AppTheme = createMuiTheme({
    palette:{
        primary:{
            main:'#1a237e'
        },
        secondary:{
            main:'#FCCD04'
        },
        success:{
            main:'#61892F'
        },
        info:{
            main:'#FFB484'
        },
        error:{
            main:'#9a0036',
            dark:'#9a0036',
            light:'#9a0036'
        }
    }
})

export {AppTheme};