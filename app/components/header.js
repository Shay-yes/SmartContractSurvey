import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: '80px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles(useTheme());

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.header} >
        <Toolbar>
          <img src="/tum.png" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
