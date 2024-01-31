import * as React from "react";
import Popper from "@mui/material/Popper";
import CustomButton from "./customButton";
import { Paper } from "@mui/material";

const CustomFlyout = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <CustomButton onClick={handleClick}>Toggle Popper</CustomButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          The content of the Popper.
        </Paper>
      </Popper>
    </div>
  );
};

export default CustomFlyout;
