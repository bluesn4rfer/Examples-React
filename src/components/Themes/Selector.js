import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { themes } from './Themes';

function ThemeSelector(props) {
  const { show, setShow, setTheme } = props;

  if(show === false){
    return null;
  }
  
  const changeTheme = (theme) => {
    console.log('Themes/Selector.js changeTheme() theme: ' + theme);
    setTheme(theme);
  };

  const handleClose = () => {
    console.log('Themes/Selector.js hide invoked');
    setShow(false);
  };

  const renderColorCircle = (theme) => {
    console.log('Themes/Selector.js renderColorCircle() invoked');
    console.debug('Themes/Selector.js renderColorCircle theme = ' + JSON.stringify(theme));

    return (
    <div
      key={theme.name}
      className="m-3 d-flex align-items-center justify-content-center rounded-circle"
      onClick={() => changeTheme(theme.name)}
      style={{
        cursor: 'pointer',
        width: '10vmin',
        height: '10vmin',
        minWidth: '80px',
        minHeight: '80px',
        border: `3px solid ${theme.colors.primary.base}`,
        background: `linear-gradient(135deg, ${theme.colors.primary.base} 50%, ${theme.colors.secondary.base} 50%)`,
        fontWeight: 'bold',
        color: theme.colors.primary.text
      }}
    >{theme.label}
    </div>
    );
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="d-flex align-items-center justify-content-between m-0 px-3 py-2 theme-primary">
        <Modal.Title className="m-0">CHOOSE THEME</Modal.Title>
        <button className='btn btn-secondary' onClick={() => setShow(false)}><i className='icon fa fa-close' /></button>
      </Modal.Header>
      <Modal.Body className="m-0 p-2">
        <div className="d-flex flex-wrap justify-content-center">
          {themes.map((choice, index) => {
              return renderColorCircle(choice);
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ThemeSelector;
