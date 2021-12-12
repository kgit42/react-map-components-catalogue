import React from "react";

import { Link } from "react-router-dom";

import theme from "../theme.js";

import { Container, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import useMediaQuery from "@mui/material/useMediaQuery";

import { ReactComponent as Wglogo } from "../wglogo.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.lighterDarkBackground,
    marginTop: "100px",
    maxWidth: "100%",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.greyText,
    "&:hover": {
      color: theme.palette.secondary.contrastText + " !important",
    },
    "&:visited": {
      color: theme.palette.secondary.greyText,
    },
  },
  logo: {
    fill: theme.palette.secondary.greyText,
    width: "230px",
    opacity: 0.6,
  },
}));
function Footer() {
  const mediaIsMobile = useMediaQuery("(max-width:900px)");
  const classes = useStyles(theme);

  return (
    <Container className={classes.footer}>
      <Grid container spacing={6}>
        <Grid
          item
          md={4}
          xs={12}
          style={{
            display: "flex",
            justifyContent: mediaIsMobile ? "flex-start" : "flex-end",
          }}
        >
          <Wglogo
            className={classes.logo}
            style={{
              marginLeft: "16px",
              marginTop: mediaIsMobile ? "20px" : "0",
            }}
          />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{
            ...(mediaIsMobile ? { paddingTop: "10px" } : {}),
          }}
        >
          <List
            component="nav"
            style={{
              display: "flex",
              flexDirection: "column",
              ...(mediaIsMobile ? {} : { marginTop: "14px" }),
            }}
          >
            <ListItem>
              <Link to="/" className={classes.link}>
                Impressum
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/" className={classes.link}>
                Datenschutz
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/" className={classes.link}>
                Cookie Einstellungen
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{
            ...(mediaIsMobile ? { paddingTop: "10px" } : {}),
          }}
        >
          <List component="nav" aria-label="Kontakt">
            <ListItem className={classes.link}>
              <ListItemIcon>
                <PhoneIcon className={classes.link} />
              </ListItemIcon>
              <ListItemText primary="+49 (0) 228 / 90 90 38 - 0" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <EmailIcon className={classes.link} />
              </ListItemIcon>
              <ListItemText
                style={{ wordBreak: "break-word" }}
                primary="info@wheregroup.com"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
