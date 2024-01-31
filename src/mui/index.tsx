import { Container, Paper } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "./customButton";
import CustomDrawer from "./customDrawer";
import CustomFlyout from "./customFlyout";
import CustomSelect from "./customSelect";
import CustomInput from "./customInput";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customMui, darkMui, defaultMui } from "./themes";

const Mui = () => {
  const themes = [
    { label: "default", value: "default" },
    { label: "custom", value: "custom" },
    { label: "dark", value: "dark" },
  ];

  const defaultTheme = createTheme(defaultMui);
  const customTheme = createTheme(customMui);
  const darkTheme = createTheme(darkMui);

  const [selectedTheme, setSelectedTheme] = useState("default");
  const [theme, setTheme] = useState(defaultTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showThemes = () => {
    return (
      <>
        Theme: &nbsp;
        <select
          value={selectedTheme}
          onChange={(e) => {
            setTheme(
              e.target.value === "custom"
                ? customTheme
                : e.target.value === "dark"
                ? darkTheme
                : defaultTheme
            );
            setSelectedTheme(e.target.value);
          }}
        >
          {themes.map((t) => (
            <option value={t.value}>{t.label}</option>
          ))}
        </select>
        <br /> <br />
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper>
          <div style={{ margin: 20 }}>
            <h2 style={{ marginBottom: 50 }}>Material UI</h2>
            {showThemes()}

            <CustomButton onClick={() => setDrawerOpen(!drawerOpen)}>
              {drawerOpen ? "Close " : "Open "} Sesame!
            </CustomButton>
            <br />
            <CustomDrawer
              open={drawerOpen}
              anchor="right"
              onClose={() => setDrawerOpen(false)}
            >
              <Paper style={{ width: 200, margin: 20 }}>
                Close me already!
                <CustomButton onClick={() => setDrawerOpen(false)}>
                  Closer
                </CustomButton>
              </Paper>
            </CustomDrawer>
            <br />
            <CustomSelect></CustomSelect>

            <br />
            <CustomInput></CustomInput>
            <br />
            <br />
            <CustomFlyout></CustomFlyout>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Mui;
