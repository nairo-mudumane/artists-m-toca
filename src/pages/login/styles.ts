import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { THEME } from "../../global";

export const StyledLogin = styled.div`
  .divider {
    &::before,
    &::after {
      border-color: ${THEME.colors.textSecondary} !important;
    }
  }
`;

export const googleButtonStyles = {
  my: 4,
  width: "100%",
  fontWeight: "bold",
  justifyContent: "center",
  color: THEME.colors.secondary,
  background: THEME.colors.white,
  "&:hover": {
    background: THEME.colors.textSecondary,
  },
};

export const StyledTextField = MuiStyled(TextField)`
  width: 100%;
`;
