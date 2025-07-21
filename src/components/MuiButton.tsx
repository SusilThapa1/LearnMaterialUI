import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
import Myname from "./Myname";
const MuiButton = () => {
  const [formats, setFomats] = useState<string | null>(null);
  console.log(formats);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFomats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="contained" color="secondary">
          {" "}
          Secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Button Clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="secondary"
          size="small"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left clicked")}>Left</Button>
          <Button>center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Myname />
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleFormatChange}
          color="success"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
