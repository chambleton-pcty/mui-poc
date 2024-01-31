import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInput = styled(TextField)({
  // your custom styles go here
  padding: 5,
}) as typeof TextField;

export default CustomInput;
