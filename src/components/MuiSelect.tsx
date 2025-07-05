import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={250}>
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        slotProps={{
          select: {
            multiple: true,
          },
        }}
        size="small"
        color="success"
      >
        <MenuItem value="NP">Nepal</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="IN">India</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
