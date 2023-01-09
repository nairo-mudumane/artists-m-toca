import { Button, Divider, Grid, Typography } from "@mui/material";
import { PageContainer } from "../../components";
import { THEME } from "../../global";
import { Form } from "./form";
import { googleButtonStyles, StyledLogin } from "./styles";

export function Login() {
  return (
    <StyledLogin className="bg-black">
      <PageContainer>
        <div className="min-h-[100vh] w-full flex justify-between">
          <div className="flex-1 min-w-[40%] flex flex-col items-center justify-center pt-10 md:p-0">
            <div className="px-4">
              <div className="text-center">
                <Typography variant="h1" className="!text-3xl md:!text-4xl">
                  Bem Vindo de Volta
                </Typography>
                <Typography variant="body2">Digite suas credencias</Typography>
              </div>

              <Button variant="contained" sx={googleButtonStyles}>
                <img
                  className="w-[2rem] mr-2"
                  src="/icons/google.svg"
                  srcSet="/icons/google.svg"
                  alt="google icon"
                />

                <Typography>Entrar com google</Typography>
              </Button>

              <Divider className="divider">ou</Divider>

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
        </div>
      </PageContainer>
    </StyledLogin>
  );
}
