import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks/hooks";
import { fetchUser } from "../Redux/slices/auth/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.login);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await dispatch(fetchUser(formData)).unwrap();
      console.log("Login successful:", result);
      navigate("/card");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Login form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          type="text"
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          fullWidth
          disabled={status === "loading"}
          sx={{ mt: 2 }}
        >
          {status === "loading" ? "Logging in..." : "Login"}
        </Button>
      </form>
      {error && (
        <Typography color="error" mt={2}>
          {typeof error === "string" ? error : error || "Login failed"}
        </Typography>
      )}
    </Box>
  );
};

export default Login;
