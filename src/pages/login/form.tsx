import { Button } from "@mui/material";
import { StyledTextField } from "./styles";

export function Form() {
  return (
    <form className="mt-10 my-4">
      <div>
        <div className="mt-4">
          <StyledTextField type="email" label="Email" autoComplete="off" />
        </div>

        <div className="my-4">
          <StyledTextField
            type="password"
            label="Password"
            autoComplete="off"
          />
        </div>

        <div className="w-max ml-auto">
          <a href="#">Forgot password</a>
        </div>

        <Button variant="contained" sx={{ width: "100%", mt: 2, py: 1.4 }}>
          Login
        </Button>
      </div>
    </form>
  );
}
