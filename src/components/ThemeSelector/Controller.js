import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Box, Grid, Typography } from '@mui/material';
import themes from '../../Themes'; // Adjust the import path accordingly

function ThemeSelector(props) {
  const { show, setShow, setTheme } = props;

  if (!show) {
    return null;
  }

  const changeTheme = (theme) => {
    console.log('Themes/Selector.js changeTheme() theme: ' + theme);
    setTheme(theme);
    setShow(false);
  };

  const handleClose = () => {
    console.log('Themes/Selector.js hide invoked');
    setShow(false);
  };

  const renderColorPreview = (theme) => {
    return (
      <Box
        key={theme.name}
        onClick={() => changeTheme(theme.name)}
        sx={{
          cursor: 'pointer',
          position: 'relative',
          width: '190px',
          height: '220px',
          margin: '10px',
          transition: 'transform 0.2s, background-color 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '35px',
            left: '25px',
            width: '150px',
            height: '150px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              height: '20%',
              backgroundColor: theme.palette.primary.dark,
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.primary.contrastText,
              fontWeight: 'bold',
            }}
          >
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="body2">Aa</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '150px',
            height: '150px',
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              height: '20%',
              backgroundColor: theme.palette.secondary.dark,
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.secondary.contrastText,
              fontWeight: 'bold',
            }}
          >
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.secondary.contrastText,
            }}
          >
            <Typography variant="body2">Aa</Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
          {theme.label}
        </Typography>
      </Box>
    );
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Choose Theme</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Grid container justifyContent="center">
          {themes.map((choice) => renderColorPreview(choice))}
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThemeSelector;
