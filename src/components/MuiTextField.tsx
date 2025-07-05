import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small success" size="small" color="success" />
        <TextField label="medium secondary" size="medium" color="secondary" />
        <TextField label="Small warning" size="small" color="warning" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Name Required"
          error={!value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "required" : "Do not share your password"}
        />

        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password"
          disabled
        />
        <TextField
          label="Readonly field"
          slotProps={{ input: { readOnly: true } }}
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Weight"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
