import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
import GeneralUpate from '../update/generalUpdate';


const SetDetails=()=>{

    const [update, setUpdate] = useState(false);

    //select teacher details from mongo

    const [firstName, setFirstName] = useState("Sara");
    const [lastName, setLastName] = useState("Cohen");
    const [email, setEmail] = useState("sara@s.s");
    const [phone, setPhone] = useState("02-1234567");

    return(
        <>
            <div>פרטים</div>
            
            <Button variant="contained" color="primary" disableElevation onClick={()=>{setUpdate(true)}}>
                   עדכון פרטים
          </Button>
          {update? <GeneralUpate firstName={firstName} lastName={lastName} email={email} phone={phone}/> :null}
            
        </>
    );
}

export default SetDetails;