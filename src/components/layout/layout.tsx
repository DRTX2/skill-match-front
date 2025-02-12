import theme from "@/theme";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Barra de navegación */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Skill Match</Typography>
          </Toolbar>
        </AppBar>

        {/* Contenedor del contenido */}
        <Container sx={{ mt: 4 }}>{children}</Container>
      </ThemeProvider>
    </>
  );
}
