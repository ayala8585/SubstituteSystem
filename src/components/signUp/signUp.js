import React from 'react';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"
import setUserType from '../actions/index'
import { connect } from "react-redux";




const SignUp = (props) => {

    
let history=useHistory();

const generalSignUp=()=>{
    props.setUserType(1)
    history.push('/generalSignUp');
}

const nvigateToTeacher=()=>{
    history.push('/signUpTeacher');
}

const nvigateToSabstitute=()=>{
    props.setUserType(3)
    history.push('/generalSignUp');
}

    return (
        <div>
            <Button variant="contained" color="primary" disableElevation onClick={generalSignUp} >
                הרשם כמנהל
    </Button>

            <Button variant="contained" color="primary" disableElevation onClick={nvigateToTeacher}>
                הרשם כמורה קבוע
    </Button>

            <Button variant="contained" color="primary" disableElevation onClick={nvigateToSabstitute}>
                הרשם כמורה ממלא מקום
    </Button>
        </div>
    );
}
export default connect(null, { setUserType })(SignUp);


