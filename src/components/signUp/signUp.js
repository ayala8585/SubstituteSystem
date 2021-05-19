import React from 'react';
import Button from '@material-ui/core/Button';

const SignUp = () => {
    return (
        <div>
            <Button variant="contained" color="primary" disableElevation>
                הרשם כמנהל
    </Button>

            <Button variant="contained" color="primary" disableElevation>
                הרשם כמורה קבוע
    </Button>

            <Button variant="contained" color="primary" disableElevation>
                הרשם כמורה ממלא מקום
    </Button>
        </div>
    );
}
export default SignUp;



// border: solid;
// width: 35%;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// align-items: center;
// height: 500px;
