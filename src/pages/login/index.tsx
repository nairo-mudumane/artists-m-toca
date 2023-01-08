import { Button, Divider, Grid, Typography } from "@mui/material";
import { THEME } from "../../global";
import { Form } from "./form";
import { googleButtonStyles, StyledLogin } from "./styles";

export function Login() {
  return (
    <StyledLogin className="w-full min-h-[100vh] bg-black flex justify-between">
      <div className="flex-1 min-w-[40%] flex flex-col items-center justify-center pt-10 md:p-0">
        <div className="px-4">
          <div className="text-center">
            <Typography variant="h1" className="!text-4xl md:!text-5xl">
              Welcome Back
            </Typography>
            <Typography variant="body2">Please enter your details</Typography>
          </div>

          <Button variant="contained" sx={googleButtonStyles}>
            <img
              className="w-[2rem] mr-2"
              src="/icons/google.svg"
              srcSet="/icons/google.svg"
              alt="google icon"
            />

            <Typography>Log in with Google</Typography>
          </Button>

          <Divider className="divider">or</Divider>

          <Form />
        </div>
      </div>

      <div className="h-[100vh] hidden lg:block">
        <img
          className="w-full h-full"
          src="/banners/login-banner.jpg"
          srcSet="/banners/login-banner.jpg"
          alt="black woman listening music outdoor"
        />
      </div>
    </StyledLogin>
  );
}
