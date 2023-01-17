import * as React from "react";
import * as mui from "@mui/material";
import * as S from "./registerContainer.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <mui.Box sx={{ p: 3 }}>
          <mui.Typography>{children}</mui.Typography>
        </mui.Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function RegisterContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <S.Container>
      <S.Form>
        <mui.Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <mui.Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <mui.Tab label="Sou Jogador" {...a11yProps(0)} />
            <mui.Tab label="Sou Clube" {...a11yProps(1)} />
          </mui.Tabs>
        </mui.Box>
        <TabPanel value={value} index={0}>
          <mui.Typography component="h1" variant="h5">
            Cadastrar como Jogador
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
              Cadastrar
            </mui.Button>
            <mui.Grid container>
              <mui.Grid item xs>
                <mui.Link href="#" color="#1635ff" variant="body2">
                  Já tem uma conta?
                </mui.Link>
              </mui.Grid>
            </mui.Grid>
          </mui.Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <mui.Typography component="h1" variant="h5">
            Cadastrar como Clube
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
              label="Email para contato"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <mui.TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Celular para contato"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <mui.TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
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
              Cadastrar
            </mui.Button>
            <mui.Grid container>
              <mui.Grid item xs>
                <mui.Link href="#" color="#1635ff" variant="body2">
                  Já tem uma conta?
                </mui.Link>
              </mui.Grid>
            </mui.Grid>
          </mui.Box>
        </TabPanel>
      </S.Form>
    </S.Container>
  );
}
