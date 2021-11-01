import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../general/UserContext";

const SignUp = (props) => {
  const history = useHistory();

  const { setUserType } = useContext(UserContext);

  const generalSignUp = (type) => {
    setUserType(type);
    history.push("/generalSignUp");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => generalSignUp(1)}
      >
        הרשם כמנהל
      </Button>

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => generalSignUp(2)}
      >
        הרשם כמורה קבוע
      </Button>

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => generalSignUp(3)}
      >
        הרשם כמורה ממלא מקום
      </Button>
    </div>
  );
};

export default SignUp;
