import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import ValidateSelect from "../common/validateSelect";
import ValidNumber from "../common/validateNumber";

const SubstituteDetails = () => {
  const [image, setImage] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [teachingCertificate, setTeachingCertificate] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isBJGraduate, setIsBJGraduate] = useState(false);
  const [approvalOfStudies, setApprovalOfStudies] = useState("");
  const [proffesions, setProffesions] = useState([]);

  const toOption = (begin, end) => {
    const option = [];
    for (let i = begin; i <= end; i++) {
      option.push(<option>{i}</option>);
    }
    return option;
  };

  const BJGraduate = [<option>כן</option>, <option>לא</option>];

  const genderOption = [<option>זכר</option>, <option>נקבה</option>];

  return (
    <div>
      <label>תמונה</label>
      <TextField>????</TextField>
      <ValidateSelect option={toOption(0, 30)} />

      <ValidateSelect text="מספר שנות ניסיון" option={toOption(0, 20)} />
      <label>תעודת הוראה</label>
      <TextField>????</TextField>
      <ValidateSelect label="גיל" option={toOption(16, 50)} />
      <ValidateSelect label="מין" option={genderOption} />
      <ValidateSelect label="בוגרת בית יעקב?" option={BJGraduate} />
      {isBJGraduate ? (
        <>
          <label>אישור לימודים</label>
          <TextField>???</TextField>
        </>
      ) : null}
      <ValidateSelect label="מקצועות" option={[]}></ValidateSelect>
    </div>
  );
};
export default SubstituteDetails;
