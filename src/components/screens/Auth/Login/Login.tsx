// library
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AuthBg from "../../../../assets/images/Auth/auth_bg.png";

import { useTypedSelector } from "../../../../store";
import { loginSchema } from "../../../../utils/schema/validation";
import { StyledNewInput } from "../../../ui/Input";
import { ActionsEnum } from "../../../../store/enum";
import { login } from "../../../../store/reducers/auth/auth.action";
import axios from "api/axios";
import { setLogin } from "@store/reducers/auth/auth.slice";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/auth/registration`);
  };

  const dispatch = useDispatch();
  const { isAuth, error, status } = useTypedSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "", // 8747 411 81 59
      password: "", // 12345
    },
    onSubmit: async (values) => {
      // @ts-ignore
      // dispatch(login(values as ILogin));
      try {
        const result = await axios.post("/auth/login", values);
        dispatch(setLogin());
      } catch (e) {
        alert("Ошибка");
      }
    },
    validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { username, password } = values;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "secondary.100",
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "70px",
        }}
      >
        <Typography variant="h6" align="center" sx={{ color: "common.white" }}>
          Shymkent Almaty
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={AuthBg} alt={"Auth Background"} />
        </Box>
      </Box>

      <Container>
        <Typography align="center" sx={{ marginTop: "35px" }}>
          Добро Пожаловать!
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack>
            <Typography>Username</Typography>
            <StyledNewInput
              ref={inputRef}
              name="username"
              value={username}
              required
              onChange={handleChange}
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
            />
            {errors.username && <Typography>{errors.username}</Typography>}
          </Stack>
          <Stack>
            <Typography>Пароль</Typography>
            <StyledNewInput
              id="my-input"
              aria-describedby="my-helper-text"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Введите пароль"
            />
            {errors.password && <Typography>{errors.password}</Typography>}
          </Stack>
          <Button
            variant="contained"
            color="primary"
            disabled={status === ActionsEnum.LOADING}
            startIcon={
              status === ActionsEnum.LOADING && (
                <CircularProgress sx={{ color: "#FFF" }} />
              )
            }
            type="submit"
          >
            Войти
          </Button>

          <Typography>
            У вас нет аккаунта?{" "}
            <Button onClick={() => handleClick()}>Регистрируйтесь</Button>
          </Typography>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
