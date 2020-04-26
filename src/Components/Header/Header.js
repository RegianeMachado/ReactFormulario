import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import LinkWrapper from '../../utils/LinkWrapper'
import {
  AppBar, Toolbar, IconButton, Typography, ButtonBase
} from '@material-ui/core'
import { LibraryBooks, RecentActors, Description} from '@material-ui/icons'
import './Header'

const Header  = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
}));

export default function ButtonAppBar() {
  const classes = Header();

  return (
    <AppBar position='static' align-items='right'>
      <Toolbar>
          <Typography variant="h4" className={classes.title}>
          <ButtonBase>
            <LinkWrapper  className={classes.menuButton} to="/">
              Casa do código
              </LinkWrapper>
          </ButtonBase>
          </Typography>
        <ButtonBase>
          <LinkWrapper  className={classes.menuButton} to="/autores">
            <IconButton className={classes.menuButton}  aria-label="add an actors">
              <RecentActors />
            </IconButton>
            Autores
            </LinkWrapper>
        </ButtonBase>
        <ButtonBase>
          <LinkWrapper  className={classes.menuButton} to="/livros">
            <IconButton className={classes.menuButton}  aria-label="add an library">
              <LibraryBooks />
            </IconButton>
            Livros
            </LinkWrapper>
        </ButtonBase>
        <ButtonBase>
          <LinkWrapper  className={classes.menuButton} to="/sobre">
            <IconButton  className={classes.menuButton} aria-label="add an description">
              <Description />
            </IconButton>
                Sobre
            </LinkWrapper>
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
}

// export default Header;
