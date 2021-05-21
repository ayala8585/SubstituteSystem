import React, { useState } from 'react';
import ValidateTextField from '../common/validateTextField';
import '../login/login.css'
import { makeStyles } from '@material-ui/core/styles';


const AddInstitution=()=>{

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));


    const [institutionSymbol, setInstitutionSymbol] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [institutionAddress, setInstitutionAddress] = useState('');
    const [experience, setExperience] = useState('');
    const [teachingCertificate, setTeachingCertificate] = useState('');
    const [minAge, setMinAge] = useState('');
    const [maleFemale, setMaleFemale] = useState('');
    const [BJGraduate, setBJGraduate] = useState('');
    const [picture, setPicture] = useState('');



    return(
        
        <div className="login"> 
        <h3>הוספת מוסד</h3>

<div>סמל מוסד</div>
      <ValidateTextField value={institutionSymbol}
        onChange={(value) => setInstitutionSymbol(value)}
        validate={() => { return institutionSymbol==='' }}
        errorMessage={'שדה חובה'} />

<div>שם מוסד</div>
      <ValidateTextField value={institutionName}
        onChange={(value) => setInstitutionName(value)}
        validate={() => { return institutionName==='' }}
        errorMessage={'שדה חובה'} />

<div>כתובת מוסד</div>
      <ValidateTextField value={institutionAddress}
        onChange={(value) => setInstitutionAddress(value)}
        validate={() => { return institutionAddress==='' }}
        errorMessage={'שדה חובה'} />
        
        <br/>
        <h3>דרישות מוסד</h3>
        <br/>

<div>שנות נסיון</div>
      <ValidateTextField value={experience}
        onChange={(value) => setExperience(value)}
        validate={() => { return experience==='' }}
        errorMessage={'שדה חובה'} />

<div>תעודת הוראה</div>
      <ValidateTextField value={teachingCertificate}
        onChange={(value) => setTeachingCertificate(value)}
        validate={() => { return teachingCertificate==='' }}
        errorMessage={'שדה חובה'} />

<div>גיל מינימלי</div>
      <ValidateTextField value={minAge}
        onChange={(value) => setMinAge(value)}
        validate={() => { return minAge==='' }}
        errorMessage={'שדה חובה'} />

<div>מין</div>
      <ValidateTextField value={maleFemale}
        onChange={(value) => setMaleFemale(value)}
        validate={() => { return maleFemale==='' }}
        errorMessage={'שדה חובה'} />

<div>בוגרת בית יעקוב</div>
      <ValidateTextField value={BJGraduate}
        onChange={(value) => setBJGraduate(value)}
        validate={() => { return BJGraduate==='' }}
        errorMessage={'שדה חובה'} />

<div>תמונה</div>
      <ValidateTextField value={picture}
        onChange={(value) => setPicture(value)}
        validate={() => { return picture==='' }}
        errorMessage={'שדה חובה'} />
        </div>
    )
}

export default AddInstitution;