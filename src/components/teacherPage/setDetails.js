import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
import GeneralUpate from '../update/generalUpdate';
import { Update } from '@material-ui/icons';
import './teacherStyle.css'
import TestOnlyList from '../common/list'
import TextOnlyList from '../common/list';



const SetDetails=()=>{

    const [update, setUpdate] = useState(true);

    //select teacher details from mongo

    const [firstName, setFirstName] = useState("Sara");
    const [lastName, setLastName] = useState("Cohen");
    const [email, setEmail] = useState("sara@s.s");
    const [phone, setPhone] = useState("02-1234567");
    const [disabled, setDisabled] = useState(true);
    //get from db
    const [institution, setInstitution]=useState(['aaa','bbb','ccc']);


    return(
        <>
            <div>פרטים</div>
            <Button variant="contained" color="primary" disableElevation onClick={()=>{setDisabled(false)}}>
                   ערוך פרטים
          </Button>

            <form disabled={disabled}>
          <GeneralUpate firstName={firstName} lastName={lastName} email={email} phone={phone}/>
          <TextOnlyList title='מוסדות לימוד פעילים' list={institution} setList={setInstitution}/>
          </form>
          {disabled? null:<Button variant="contained" color="primary" disableElevation>
        שמירה
      </Button>}
        </>
    );
}

export default SetDetails;