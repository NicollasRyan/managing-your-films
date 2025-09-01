import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Typography,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Error } from "./styles";

import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link to="/" color="inherit">
        Managing Your Films
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [rememberMe, setRememberMe] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const persistence = rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistence);
      navigate("/");
    } catch (err: any) {
      setErrorLogin(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              type="email"
              {...register("email", { required: "Email é obrigatório" })}
              autoFocus
            />
            {errors.email && <Error>{errors.email.message as string}</Error>}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              id="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Senha é obrigatório" })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && <Error>{errors.password.message as string}</Error>}
            {errorLogin && <Error>Email ou senha estão incorretos</Error>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre de mim"
              onChange={(e: any) => setRememberMe(e.target.checked)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Box display="flex" justifyContent="center">
                <Link to="/register">{"Você não tem uma conta? Register"}</Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
