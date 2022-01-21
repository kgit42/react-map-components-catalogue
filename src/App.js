import React, { useState } from "react";
import logo from "./assets/mapcomponents_logo.png";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";

import { Switch, Route, Link, useLocation } from "react-router-dom";

import makeStyles from "@mui/styles/makeStyles";
import theme from "./theme.js";

import {
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Box,
  IconButton,
} from "@mui/material";

import Footer from "./components/Footer";

import StoryTeaserList from "./components/StoryTeaserList";
import CartDrawer from "./components/Cart/CartDrawer";
import StoryDetailView from "./components/StoryDetailView";
import DemoView from "./components/DemoView";

import useMediaQuery from "@mui/material/useMediaQuery";

import "./App.css";
import { useTranslation, Trans } from "react-i18next";

const languages = {
<<<<<<< HEAD
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

const LanguageSelection = () => {
  const { t, i18n } = useTranslation();
  let resolvedLanguage = i18n.resolvedLanguage;

  let buttons = Object.keys(languages).map((key) => (
    <ToggleButton value={key} onClick={() => i18n.changeLanguage(key)}>
      {key.toUpperCase()}
    </ToggleButton>
  ));
  return (
    <ToggleButtonGroup
      children={buttons}
      exclusive
      size="small"
      aria-label="text button group"
      value={resolvedLanguage}
    ></ToggleButtonGroup>
  );
=======
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
>>>>>>> 121fffe... Add language selection via ToggleButtonGroup
};

const LanguageSelection = () => {
  const { t, i18n } = useTranslation();
  let resolvedLanguage = i18n.resolvedLanguage;

  let buttons = Object.keys(languages).map(key =>
    <ToggleButton
      value={key}
      key={key}
      onClick={() => i18n.changeLanguage(key)}
    >{key.toUpperCase()}</ToggleButton>
  );

  return <ToggleButtonGroup
          children={buttons}
          exclusive
          size="small"
          aria-label="text button group"
          value={resolvedLanguage}
        ></ToggleButtonGroup>;
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    fontWeight: "bold",
    "&:hover": {
      //backgroundColor: "#a51b3b",
    },
  },
  header: {
    padding: "10px 0",
    backgroundColor: "#f1f1f1",
  },
  fullTeaser: {
    height: "100vh",
    backgroundImage: "url(https://placeskull.com/2000/1200)",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  teaserItemImage: {
    maxWidth: "100%",
  },
  spacer: {
    height: "46px",
  },
}));

const Spacer = () => {
  const classes = useStyles();

  return <div className={classes.spacer}></div>;
};

function App() {
  const classes = useStyles(theme);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const mediaIsMobile = useMediaQuery("(max-width:900px)");

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  return (
    <Box
      bgcolor="background.default"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <AppBar position="static" className={classes.header}>
        <Toolbar variant="dense">
          <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ToggleButtonGroup
                variant="contained"
                color="secondary"
                aria-label="contained primary button group"
                value={location.pathname}
              >
                <ToggleButton
                  to="/list-components"
                  className={classes.menuButton}
                  component={Link}
                  value={"/list-components"}
                >
                  Components
                </ToggleButton>
                <ToggleButton
                  to="/"
                  className={classes.menuButton}
                  component={Link}
                  value={"/"}
                >
                  <FormatListBulletedIcon />
                </IconButton>
                <IconButton style={{ marginLeft: "10px" }} size="large">
                  <SettingsIcon />
                </IconButton>
                <LanguageSelection></LanguageSelection>
              </Grid>
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: "0.8em",
              }}
            >
              <IconButton
                onClick={() => setCartDrawerOpen(true)}
                style={{}}
                size="large"
              >
                <FormatListBulletedIcon />
              </IconButton>
              <LanguageSelection></LanguageSelection>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/*
          <Grid container>
            <Grid item className={classes.fullTeaser}>
              Teaser full-width
            </Grid>
          </Grid>
          */}
      <div className="content" style={{ flexGrow: 1, paddingTop: "80px" }}>
        <Switch>
          <Route path={"/component-detail/:component_id"}>
            <Container>
              <Spacer></Spacer>
              <StoryDetailView></StoryDetailView>
            </Container>
          </Route>
          <Route path={"/demo/:story_id"}>
            <Container>
              <Spacer></Spacer>
              <DemoView></DemoView>
            </Container>
          </Route>
          <Route path={"/list-components"}>
            <Container>
              <Spacer></Spacer>
              <StoryTeaserList type="component"></StoryTeaserList>
            </Container>
          </Route>
          <Route path={"/"}>
            <Container>
              <Spacer></Spacer>
              <StoryTeaserList type="application"></StoryTeaserList>
            </Container>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
      <CartDrawer
        open={cartDrawerOpen}
        setOpen={setCartDrawerOpen}
      ></CartDrawer>
    </Box>
  );
}

export default App;
