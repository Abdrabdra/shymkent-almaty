// library
import React, { useEffect, useRef, useState } from "react";
import {
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

import { useTypedSelector } from "../../../../store";
import { StyledNewInput } from "../../../ui/Input";
import { ActionsEnum } from "../../../../store/enum";
import { loginSchema } from "../../../../utils/schema/validation";
import axios from "api/axios";

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/auth/login`);
  };

  const dispatch = useDispatch();
  const { isAuth, error, status } = useTypedSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      // @ts-ignore
      // dispatch(login(values as ILogin));
      try {
        const result = await axios.post("/auth/registration", values);
        handleClick();
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
    <Container>
      <Stack sx={{ padding: "20px" }}>
        <Typography align="center">Регистрация в Shymkent Almaty</Typography>
        <form onSubmit={handleSubmit}>
          <>
            <Stack>
              <Typography>Номер телефона</Typography>
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
                autoComplete=""
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
              Регистрироваться
            </Button>

            <Typography>
              Есть аккаунт? <Button onClick={() => handleClick()}>Войти</Button>
            </Typography>
          </>
        </form>
      </Stack>
    </Container>
  );
};

export default Registration;
