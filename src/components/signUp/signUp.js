import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
import setUserType from '../actions/index'
import { connect } from "react-redux";




const SignUp = (props) => {


    let history = useHistory();

    const generalSignUp = (type) => {
        props.setUserType(type)
        history.push('/generalSignUp');
    }


    return (
        <div>
            <Button variant="contained" color="primary" disableElevation onClick={() => generalSignUp(1)} >
                הרשם כמנהל
    </Button>

            <Button variant="contained" color="primary" disableElevation onClick={() => generalSignUp(2)}>
                הרשם כמורה קבוע
    </Button>

            <Button variant="contained" color="primary" disableElevation onClick={() => generalSignUp(3)}>
                הרשם כמורה ממלא מקום
    </Button>
        </div>
    );
}
export default connect(null, { setUserType })(SignUp);


