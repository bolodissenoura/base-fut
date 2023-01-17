import * as React from "react";
import * as mui from "@mui/material";
import * as S from "./loginContainer.styles";

export function LoginContainer() {
  return (
    <S.Container>
      <S.Form>
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
            sx={{ mt: 3, mb: 2, backgroundColor: "#1635ff" }}
          >
            Entrar
          </mui.Button>
          <mui.Grid container>
            <mui.Grid item xs>
              <mui.Link href="#" color="#1635ff" variant="body2">
                Esqueceu a senha?
              </mui.Link>
            </mui.Grid>
          </mui.Grid>
        </mui.Box>
      </S.Form>
    </S.Container>
  );
}
