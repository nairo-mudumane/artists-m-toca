import React from "react";
import { Button } from "@mui/material";
import { useInputText } from "../../hooks";
import { StyledTextField } from "./styles";

export function Form() {
  const input = useInputText({ email: "", password: "" });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form className="mt-10 my-4" onSubmit={onSubmit}>
      <div>
        <div className="mt-4">
          <StyledTextField
            required
            type="email"
            label="Email"
            autoComplete="off"
            value={input.email}
            onBlur={input.onBlur}
            onChange={input.onChange}
            error={input.errors.email ? true : false}
            helperText={input.errors.email ?? undefined}
          />
        </div>

        <div className="my-4">
          <StyledTextField
            required
            type="password"
            label="Password"
            onBlur={input.onBlur}
            value={input.password}
            onChange={input.onChange}
            error={input.errors.password ? true : false}
            helperText={input.errors.password ?? undefined}
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
