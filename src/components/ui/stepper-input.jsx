import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

export const StepperInput = ({ value = 1, step = 1, min = 1, max = 10, onChange }) => {
  const [count, setCount] = useState(value);

  const handleIncrease = () => {
    if (count < max) {
      setCount(count + step);
      onChange && onChange(count + step);
    }
  };

  const handleDecrease = () => {
    if (count > min) {
      setCount(count - step);
      onChange && onChange(count - step);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Button onClick={handleDecrease} disabled={count <= min}>-</Button>
      <TextField value={count} size="small" sx={{ width: "60px", textAlign: "center" }} />
      <Button onClick={handleIncrease} disabled={count >= max}>+</Button>
    </Box>
  );
};

