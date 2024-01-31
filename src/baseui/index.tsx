import React, { useState } from "react";
import BaseUiButton from "./customButton";
import BaseUiInput from "./customInput";

import { ThemeProvider } from "styled-components";
import { defaultTheme, customTheme, darkTheme } from "./themes";

import styled from "styled-components";

const BaseUi = () => {
  const themes = [
    { label: "default", value: "default" },
    { label: "custom", value: "custom" },
    { label: "dark", value: "dark" },
  ];
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [theme, setTheme] = useState(defaultTheme);

  const StyledDiv = styled.div`
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize};
    padding: 10px 20px;
  `;

  const NavbarLink = styled.a`
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    margin: 30px;
    /* Changing the color */
    &:hover {
      color: red;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
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
        <div style={{ margin: 30 }}>
          <h2 style={{ marginBottom: 50 }}>Base UI</h2>

          <div style={{ marginBottom: 50 }}>
            <BaseUiButton onClick={() => alert("button click!")}>
              Click Me
            </BaseUiButton>
            <BaseUiButton disabled onClick={() => alert("button click!")}>
              Disabled
            </BaseUiButton>
          </div>
          <div style={{ marginBottom: 50 }}>
            <BaseUiInput />
          </div>
        </div>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default BaseUi;
