import * as React from "react";
import * as mui from "@mui/material";
import * as S from "./loginContainer.styles";

export function LoginContainer() {
  return (
    <S.Container>
      <mui.Container maxWidth="xs">
        <mui.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: 4,
            borderRadius: 2,
          }}
        >
          <mui.Typography component="h1" variant="h5">
            Entrar
          </mui.Typography>
          <mui.Box
            component="form"
            onSubmit={() => console.log("arroz")}
            noValidate
            sx={{ mt: 1 }}
          >
            <mui.TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <mui.TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <mui.Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </mui.Button>
            <mui.Grid container>
              <mui.Grid item xs>
                <mui.Link href="#" variant="body2">
                  Esqueceu a senha?
                </mui.Link>
              </mui.Grid>
            </mui.Grid>
          </mui.Box>
        </mui.Box>
      </mui.Container>
    </S.Container>
  );
}
