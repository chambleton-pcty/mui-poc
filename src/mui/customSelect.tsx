import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CustomSelect = () => {
  const [choice, setChoice] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">You must choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choice}
          label="You must choose"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Two-and-a-half</MenuItem>
          <MenuItem value={-1}>Don't make me go over there!!</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
