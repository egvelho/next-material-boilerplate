import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

type Item = { label: string } & ({ href: string } | { onClick: () => void });

export interface AppBarProps {
  backgroundColor: string;
  color: string;
  shortName: string;
  logo: string;
  items: Item[];
  itemsAriaLabel: string;
  drawerButtonAriaLabel: string;
  setDrawerOpen: (drawerOpen: boolean) => void;
}

export function AppBar({
  backgroundColor,
  color,
  shortName,
  logo,
  items,
  itemsAriaLabel,
  drawerButtonAriaLabel,
  setDrawerOpen,
}: AppBarProps) {
  return (
    <MuiAppBar
      position="sticky"
      style={{
        backgroundColor,
        color,
      }}
    >
      <Toolbar>
        <Link href="/" passHref>
          <a
            style={{
              color: "inherit",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              marginRight={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                alt={shortName}
                src={logo}
                style={{
                  width: 42,
                }}
              />
            </Box>
            <Box marginRight={3}>
              <Typography variant="h6" component="span">
                {shortName}
              </Typography>
            </Box>
          </a>
        </Link>
        <Hidden smDown>
          <nav>
            <Tabs value={false} arial-label={itemsAriaLabel}>
              {items.map((item, index) =>
                "href" in item ? (
                  <Link href={item.href} passHref key={`app-bar-item-${index}`}>
                    <Tab label={item.label} component="a" />
                  </Link>
                ) : (
                  <Tab
                    key={`app-bar-item-${index}`}
                    label={item.label}
                    onClick={item.onClick}
                  />
                )
              )}
            </Tabs>
          </nav>
        </Hidden>
        <Box display="flex" flexGrow={1} justifyContent="flex-end">
          <IconButton
            edge="end"
            color="inherit"
            aria-label={drawerButtonAriaLabel}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}