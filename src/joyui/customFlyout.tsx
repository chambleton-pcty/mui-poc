import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

const CustomFlyout = () => {
  return (
    <Dropdown>
      <MenuButton size="sm">Pop 'er</MenuButton>
      <Menu size="sm">
        <MenuItem>
          <ListItemDecorator /> Single
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          1.15
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          Double
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          Custom: 1.2
        </MenuItem>
        <ListDivider />
        <MenuItem>Add space before paragraph</MenuItem>
        <MenuItem>Add space after paragraph</MenuItem>
        <ListDivider />
        <MenuItem>Custom spacing...</MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default CustomFlyout;
