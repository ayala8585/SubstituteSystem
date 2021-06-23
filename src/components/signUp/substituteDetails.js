import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import ValidateSelect from "../common/validateSelect";
import ValidNumber from '../common/validateNumber'


const SubstituteDetails = () => {

    const [image, setImage] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [teachingCertificate, setTeachingCertificate] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [isBJGraduate, setIsBJGraduate] = useState(false);
    const [approvalOfStudies, setApprovalOfStudies] = useState('');
    const [proffesions, setProffesions] = useState([]);

    const toOption = (begin, end) => {
        const option = [];
        for (let i = begin; i <= end; i++) {
            option.push(<option>{i}</option>)
        }
        return option;
    }

    const BJGraduate = [
        <option>כן</option>,
        <option>לא</option>];

    const genderOption = [
        <option>זכר</option>,
        <option>נקבה</option>];

    return (
        <div>
            <label>תמונה</label>
<<<<<<< HEAD
            <TextField>????</TextField><br/>
            <label>מספר שנות ניסיון</label>
            <ValidateSelect options={toOption(0, 20)}></ValidateSelect><br/>
            <label>תעודת הוראה</label>
            <TextField>????</TextField><br/>
            <label>גיל</label>
            <ValidateSelect options={toOption(16, 50)}></ValidateSelect><br/>
            {/* <ValidateSelect options={typeOption}></ValidateSelect><br/> */}
            <label>בוגרת בית יעקב?</label>
            <ValidateSelect options={BJGraduate}></ValidateSelect><br/>
=======
            <TextField>????</TextField>
            <ValidateSelect text='מספר שנות ניסיון' options={toOption(0, 20)}></ValidateSelect>
            <label>תעודת הוראה</label>
            <TextField>????</TextField>
            <ValidateSelect text='גיל' options={toOption(16, 50)}></ValidateSelect>
            <ValidateSelect text='מין' options={genderOption}></ValidateSelect>
            <ValidateSelect text='בוגרת בית יעקב?' options={BJGraduate}></ValidateSelect>
>>>>>>> 6a84db8f1c4806544ffe0a31fc07c247b56b2df2
            {
                isBJGraduate?(<>
                <label>אישור לימודים</label>
                <TextField>???</TextField>
                </>):null
            }
<<<<<<< HEAD
            <label>מקצועות</label>
            <ValidateSelect options={[]}></ValidateSelect>

            <ValidNumber/>

=======
            <ValidateSelect text='מקצועות' options={[]}></ValidateSelect>
>>>>>>> 6a84db8f1c4806544ffe0a31fc07c247b56b2df2
        </div>
    )


}
export default SubstituteDetails;