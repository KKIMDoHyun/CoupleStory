import React from "react";
import { observer } from "mobx-react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

import string from "./string";

const HeaderScreen: React.FC = observer(() => {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            {string.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
});

export default HeaderScreen;
