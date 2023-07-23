import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddProduct = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Company" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Product" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Catogary" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Product" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Product" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Product" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Product" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Product" variant="standard" />
      </Box>
    </div>
  );
};

export default AddProduct;
