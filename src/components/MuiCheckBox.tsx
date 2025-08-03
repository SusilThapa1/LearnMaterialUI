import { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const MuiCheckBox = () => {
  const [gender, setGender] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup row name="gender" value={gender} onChange={handleChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
  );
};

export default MuiCheckBox;
