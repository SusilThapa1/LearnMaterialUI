import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
// import { Button, Stack, Typography } from "@mui/material";
// import MuiSelect from "./components/MuiSelect";
// import MuiButton from "./components/MuiButton";
// import MuiTextField from "./components/MuiTextField";
// import MuiTypography from "./components/MuiTypography";
// import { useAppDispatch, useAppSelector } from "./Redux/hooks/hooks";
// import { increment, decrement } from "./Redux/slices/counter/counter";
import MuiCard from "./components/MuiCard";
import MuiCheckBox from "./components/MuiCheckBox";
function App() {
  // const count = useAppSelector((state) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      {/* <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Typography variant="h4" className="text-blue-500 text-lg font-bold">
          {count}
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Stack>

      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect /> */}
      {/* <MuiCard /> */}
      <MuiCheckBox />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<MuiCard />} />
      </Routes>
    </div>
  );
}

export default App;
