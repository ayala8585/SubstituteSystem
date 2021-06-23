import React, { useState } from 'react';
import ValidateTextField from '../common/validateTextField';
import '../login/login.css'
import { makeStyles } from '@material-ui/core/styles';
import ValidateSelect from '../common/validateSelect'




const AddInstitution = () => {

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


  const toOption = (begin, end) => {
    const option = [];
    for (let i = begin; i <= end; i++) {
      option.push(<option>{i}</option>)
    }
    return option;
  }
  const require = [
    <option>נדרש</option>,
    <option>לא נדרש</option>];

  return (

    <div className="login">
      <h3>הוספת מוסד</h3>

      <div>סמל מוסד</div>
      <ValidateTextField value={institutionSymbol}
        onChange={(value) => setInstitutionSymbol(value)}
        validate={() => { return institutionSymbol === '' }}
        errorMessage={'שדה חובה'} />

      <div>שם מוסד</div>
      <ValidateTextField value={institutionName}
        onChange={(value) => setInstitutionName(value)}
        validate={() => { return institutionName === '' }}
        errorMessage={'שדה חובה'} />

      <div>כתובת מוסד</div>
      <ValidateTextField value={institutionAddress}
        onChange={(value) => setInstitutionAddress(value)}
        validate={() => { return institutionAddress === '' }}
        errorMessage={'שדה חובה'} />

      <br />
      <h3>דרישות מוסד</h3>
      <br />

      <label>שנות נסיון</label>

      <ValidateSelect option={toOption(0, 30)} />

      <label>תעודת הוראה</label>

      <ValidateSelect option={require} />
      {/* <ValidateTextField value={teachingCertificate}
        onChange={(value) => setTeachingCertificate(value)}
        validate={() => { return teachingCertificate==='' }}
        errorMessage={'שדה חובה'} /> */}

      <div>גיל מינימלי</div>
      {/* <ValidateTextField value={minAge}
        onChange={(value) => setMinAge(value)}
        validate={() => { return minAge==='' }}
        errorMessage={'שדה חובה'} /> */}
      <ValidateSelect option={toOption(16, 40)} />

      <div>מין</div>
      <ValidateTextField value={maleFemale}
        onChange={(value) => setMaleFemale(value)}
        validate={() => { return maleFemale === '' }}
        errorMessage={'שדה חובה'} />

      <div>בוגרת בית יעקוב</div>
      <ValidateSelect option={require} />
      {/* <ValidateTextField value={BJGraduate}
        onChange={(value) => setBJGraduate(value)}
        validate={() => { return BJGraduate==='' }}
        errorMessage={'שדה חובה'} /> */}

      <div>תמונה</div>
      <ValidateSelect option={require} />
      {/* <ValidateTextField value={picture}
        onChange={(value) => setPicture(value)}
        validate={() => { return picture==='' }}
        errorMessage={'שדה חובה'} />
        */}
    </div>
  )
}

export default AddInstitution;