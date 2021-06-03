import React from 'react';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"




const SignUp = () => {

    
let history=useHistory();

const generalSignUp=()=>{
    // history.push('/generalSignUp');
    history.push({
        pathname: '/generalSignUp',
        state: { role: 1 }
    });
}

const nvigateToTeacher=()=>{
    history.push('/signUpTeacher');
}

const nvigateToSabstitute=()=>{
    history.push('/signUpSubstitute');
}

    return (
        <div>
            <Button variant="contained" color="primary" disableElevation onClick={generalSignUp} role={1}>
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
export default SignUp;


