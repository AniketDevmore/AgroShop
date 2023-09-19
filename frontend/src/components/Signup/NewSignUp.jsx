import React from "react";
import "./NewSignUp.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewSignUp = () => {
  const [showPassword1, setShowPassword1] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      axios
        .post(`${import.meta.env.VITE_REACT_APP_URL}/auth/createUser`, data)
        .then((result) => {
          // console.log(result.data);
          alert(result.data.message);
        })
        .catch((err) => {
          // console.log(err.data);
          alert(err.data.message);
        });
      // navigate(`/`);
      // console.log(data, "00000");
    }
  };

  const backHandle = () => {
    navigate("/");
  };
  return (
    <div id="signup">
      {/* <form > */}
      <div id="backDiv">
        <button id="back" onClick={backHandle}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
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
          label="First Name"
          variant="standard"
          name="name"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        {errors.firstName && (
          <p style={{ margin: "auto" }}>Please write First Name</p>
        )}
        <br />
        <TextField
          label="Last Name"
          variant="standard"
          name="name"
          {...register("lastName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName && (
          <p style={{ margin: "auto" }}>Please write Last Name</p>
        )}
        <br />
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
            type={showPassword1 ? "text" : "password"}
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,9}$/,
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
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
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            name="confirmPassword"
            id="standard-adornment-password1"
            type={showPassword2 ? "text" : "password"}
            {...register("confirmPassword", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,9}$/,
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {errors.confirm && (
          <p style={{ margin: "auto" }}>Please confirm Password</p>
        )}
        <br />
        <TextField
          type="number"
          label="Age"
          variant="standard"
          name="age"
          {...register("age", { required: true, min: 18, max: 99 })}
        />
        {errors.age && <p style={{ margin: "auto" }}>Age should be above 18</p>}
        <br />
        <div style={{ margin: "auto", padding: "20px" }}>
          <input
            value="user"
            type="radio"
            name="type"
            {...register("type", { required: true })}
          />
          <label style={{ paddingRight: "20px" }}>User</label>
          <input
            value="admin"
            type="radio"
            name="type"
            {...register("type", { required: true })}
          />
          <label>Admin</label>
          {errors.type && (
            <p style={{ margin: "auto" }}>Please select the option</p>
          )}
        </div>
        <Button type="submit" variant="outlined">
          SignUp
        </Button>
      </Box>

      {/* </form> */}
    </div>
  );
};
