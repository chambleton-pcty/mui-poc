import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  // your custom styles go here
  padding: 10,
  margin: 5,
  border: "1px solid",
}) as typeof Button;

export default CustomButton;
