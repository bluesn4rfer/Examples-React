import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Box, Grid } from '@mui/material';
import { themes } from '../../Themes'; // Adjust the import path accordingly

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
          width: '100px',
          height: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px',
          border: `3px solid ${theme.colors.primary.base}`,
          '&:hover': {
            backgroundColor: theme.colors.primary.hover,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '50%',
            backgroundColor: theme.colors.primary.base,
          }}
        />
        <Box
          sx={{
            width: '100%',
            height: '50%',
            backgroundColor: theme.colors.secondary.base,
          }}
        />
        <Box sx={{ marginTop: '5px', fontWeight: 'bold' }}>{theme.label}</Box>
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
