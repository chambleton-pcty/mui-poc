import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseUi from "./baseui";
import Mui from "./mui";
import JoyUi from "./joyui";

function App() {
  return (
    <>
      <div style={{ margin: 30 }}>
        <a style={{ marginRight: 20 }} href="/baseui">
          BaseUI
        </a>
        <a style={{ marginRight: 20 }} href="/mui">
          MUI
        </a>
        <a style={{ marginRight: 20 }} href="/joyui">
          JoyUI
        </a>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="baseui" element={<BaseUi />} />
            <Route path="mui" element={<Mui />} />
            <Route path="joyui" element={<JoyUi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
