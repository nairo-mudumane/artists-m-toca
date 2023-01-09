import React from "react";
import { Button, Typography } from "@mui/material";
import { useInputText } from "../../hooks";
import { StyledTextField } from "./styles";
import { Link } from "react-router-dom";

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
            autoFocus
            name="email"
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
            name="password"
            type="password"
            label="Password"
            onBlur={input.onBlur}
            value={input.password}
            onChange={input.onChange}
            error={input.errors.password ? true : false}
            helperText={input.errors.password ?? undefined}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", mt: 2, py: 1.4 }}
        >
          Login
        </Button>
      </div>
      <div className="w-max mt-4 mr-auto">
        <Link to="/forgot-password">Forgot password</Link>

        <Typography variant="body2" sx={{ mt: 1 }} className="!w-max !ml-auto">
          Don't have an account? <Link to="/new">Sign up</Link>
        </Typography>
      </div>
    </form>
  );
}
