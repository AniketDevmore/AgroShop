import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8090/auth/login", data)
      .then((result) => {
        // console.log(result.data);
        if (result.data.status === "Success") {
          if (result.data.data.type === "user") {
            // console.log(result.data.data.id);
            sessionStorage.setItem("token", result.data.token);
            navigate(`/mainPage/${result.data.data.id}`);
          } else if (result.data.data.type === "admin") {
            sessionStorage.setItem("token", result.data.token);
            navigate(`/adminPage/${result.data.data.id}`);
          }
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => {
        // console.log(err);
        alert(err.data.message);
      });
    // console.log(data);
    // globalData.map((ele) => {
    //   if (ele.email === data.email && ele.password === data.password) {
    //     // console.log(ele);
    //     if (ele.type === "user") {
    //       // localStorage.setItem("token", "adjafkgfwejgfbwbfwhgergjvjwbjwjnvdbj");

    //       // dispatch(AuthChange(ele));
    //       console.log(ele);
    //       navigate(`/mainPage/${ele.id}`);
    //     } else if (ele.type === "admin") {
    //       // localStorage.setItem("token", "adjafkgfwejgfbwbfwhgergjvjwbjwjnvdbj");
    //       // dispatch(AuthChange(ele));
    //       console.log(ele);
    //       navigate(`/adminPage/${ele.id}`);
    //     }
    //   }
    // });
  };

  const signUpHandle = () => {
    navigate(`/signup`);
  };
  return (
    <div id="login">
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          variant="standard"
          name="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && <p style={{ margin: "auto" }}>Please write Email</p>}
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            name="password"
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,9}$/,
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {errors.password && (
          <p style={{ margin: "auto" }}>
            Password should contain atleast one small letter, one capital letter
            and one number between 0-9
          </p>
        )}
        <br />

        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>

      <Button onClick={signUpHandle}>signup</Button>
    </div>
  );
};

export default NewLogin;
