import React from "react";
import {
  Button,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Logo, PageContainer } from "../../components";
import { useInputText } from "../../hooks";
import { StyledTextField } from "./styles";
import { Lens } from "@mui/icons-material";

const Bullet = () => (
  <span className="text-[0.5em]">
    <Lens fontSize="inherit" sx={{ mr: 1 }} />
  </span>
);

export function ForgotPassword() {
  const input = useInputText({ email: "" });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDone, setIsDone] = React.useState<boolean>(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!input.errors.email) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsDone(true);
      }, 4000);
    }
  }

  return (
    <>
      <div className="fixed top-3 left-3">
        <Logo texted={false} size="sm" link="/" />
      </div>

      <PageContainer>
        <div className="w-full min-h-[100vh] flex flex-col items-center justify-center">
          <div className="mt-6 lg:max-w-[600px]">
            <Typography
              variant="h1"
              sx={{ mb: 4 }}
              className="text-primary !text-center !text-3xl md:!text-4xl"
            >
              {isDone ? "Pronto! Verifique o seu e-email" : "Resetar senha"}
            </Typography>

            {isDone ? (
              <div>
                <Typography variant="body1">
                  Enviamos um e-mail no endereco{" "}
                  <a href={`mailto:${input.email}`} className="link">
                    {input.email}
                  </a>{" "}
                  com as instrucoes de recuperacao de senha.
                </Typography>

                <List>
                  <Typography variant="subtitle1" className="!text-bold">
                    Caso nao tenha recebido o e-mail tente:
                  </Typography>

                  <ListItem>
                    <Bullet />
                    <span>Verificar o Spam;</span>
                  </ListItem>

                  <ListItem>
                    <Bullet />
                    <span>
                      Verificar se o endereco de e-mail{" "}
                      <a href={`mailto:${input.email}`} className="link">
                        {input.email}
                      </a>{" "}
                      eh o mesmo registado no MToca;
                    </span>
                  </ListItem>

                  <ListItem>
                    <Bullet />
                    <span>
                      <Button>Reenviar</Button> em 60s.
                    </span>
                  </ListItem>
                </List>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Não se preocupe. Redefinir sua senha é fácil, basta nos
                  informar o endereço de e-mail que você registrou no MToca.
                </Typography>

                <StyledTextField
                  required
                  autoFocus
                  name="email"
                  type="email"
                  label="Email"
                  sx={{ mt: 2 }}
                  value={input.email}
                  disabled={isLoading}
                  onBlur={input.onBlur}
                  onChange={input.onChange}
                  error={input.errors.email ? true : false}
                  helperText={input.errors.email ?? undefined}
                />

                <div className="mt-4 flex items-center justify-center">
                  <Button
                    variant="contained"
                    type={isLoading ? "button" : "submit"}
                    disabled={input.errors.email ? true : isLoading}
                    sx={{
                      width: "100%",
                      py: 1.5,
                    }}
                    className="btn-submit"
                  >
                    {isLoading ? (
                      <div className="text-white">
                        <CircularProgress color="inherit" size={30} />
                      </div>
                    ) : (
                      "Verificar e-mail"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
