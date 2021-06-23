import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import ValidateSelect from "../common/validateSelect";

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
            <TextField>????</TextField>
            <ValidateSelect text='מספר שנות ניסיון' options={toOption(0, 20)}></ValidateSelect>
            <label>תעודת הוראה</label>
            <TextField>????</TextField>
            <ValidateSelect text='גיל' options={toOption(16, 50)}></ValidateSelect>
            <ValidateSelect text='מין' options={genderOption}></ValidateSelect>
            <ValidateSelect text='בוגרת בית יעקב?' options={BJGraduate}></ValidateSelect>
            {
                isBJGraduate?(<>
                <label>אישור לימודים</label>
                <TextField>???</TextField>
                </>):null
            }
            <ValidateSelect text='מקצועות' options={[]}></ValidateSelect>
        </div>
    )


}
export default SubstituteDetails;