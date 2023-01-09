import { TextField } from "@mui/material";
import { styled as MuiStyled } from "@mui/material/styles";
import { THEME } from "../../global";

export const StyledTextField = MuiStyled(TextField)`
width: 100%;

& fieldset {
  border-color: ${THEME.colors.textSecondary};
}
`;
