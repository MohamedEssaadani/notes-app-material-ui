import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout";

// create custom theme, (override the theme)
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  //   secondary: purple,
  // },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create-note" element={<CreateNote />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
