import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <AutoFixHighIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontFamily: '"Playfair Display", serif',
            }}
          >
            神秘塔罗
          </Typography>
          <Box>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{ mr: 2 }}
            >
              首页
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/reading"
              sx={{ mr: 2 }}
            >
              占卜
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
            >
              关于
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 