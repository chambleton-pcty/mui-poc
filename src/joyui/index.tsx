import React, { useState } from "react";
import CustomButton from "./customButton";
import CustomDrawer from "./customDrawer";
import CustomFlyout from "./customFlyout";
import CustomSelect from "./customSelect";
import CustomInput from "./customInput";

import { defaultJoy, customJoy } from "./themes";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";

const JoyUi = () => {
  const themes = [
    { label: "default", value: "default" },
    { label: "custom", value: "custom" },
    { label: "dark", value: "dark" },
  ];

  const defaultTheme = extendTheme(defaultJoy);
  const customTheme = extendTheme(customJoy);

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
            if (e.target.value !== "dark")
              setTheme(
                e.target.value === "custom" ? customTheme : defaultTheme
              );
            setSelectedTheme(e.target.value);
          }}
        >
          {themes.map((t) => (
            <option value={t.value}>{t.label}</option>
          ))}
        </select>
        <p>
          TODO: fix dark-mode; needs to implement useColorScheme() in the
          subcomponents like here:
          https://mui.com/joy-ui/customization/dark-mode/{" "}
        </p>
        <br /> <br />
      </>
    );
  };

  return (
    <CssVarsProvider
      defaultMode={selectedTheme === "dark" ? "dark" : "system"}
      theme={theme}
      modeStorageKey={
        selectedTheme === "dark"
          ? "joy-mode-scheme-dark"
          : "joy-mode-scheme-light"
      }
    >
      <Sheet>
        <div style={{ margin: 20 }}>
          <h2 style={{ marginBottom: 50 }}>Joy UI</h2>
          {showThemes()}
          <CustomButton onClick={() => setDrawerOpen(!drawerOpen)}>
            {drawerOpen ? "Close " : "Open "} Sesame!
          </CustomButton>
          <br />
          <br />
          <CustomDrawer
            open={drawerOpen}
            anchor="right"
            onClose={() => setDrawerOpen(false)}
          >
            <Sheet style={{ width: 200, margin: 20 }}>
              Close me already!
              <CustomButton onClick={() => setDrawerOpen(false)}>
                Closer
              </CustomButton>
            </Sheet>
          </CustomDrawer>
          <CustomSelect></CustomSelect>
          <br />
          <CustomInput></CustomInput>
          <br />
          <CustomFlyout></CustomFlyout>
        </div>
      </Sheet>
    </CssVarsProvider>
  );
};

export default JoyUi;
