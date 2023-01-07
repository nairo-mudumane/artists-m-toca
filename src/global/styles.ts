import { createGlobalStyle } from "styled-components";
import { THEME } from "./theme";

export const GlobalStyles = createGlobalStyle`
a {
  text-decoration-line: underline;
  text-underline-offset: 6px;
   width: max-content;

  &:hover {
    text-decoration-line: none;
  }
}

::-webkit-scrollbar {
  background: transparent;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-button:single-button {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: ${THEME.colors.textSecondary};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${THEME.colors.primary};
}

::-webkit-scrollbar-thumb:active {
  background: ${THEME.colors.primary};
}

::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.3);
  border-radius: 10px;
}
`;
