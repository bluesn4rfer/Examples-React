import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ThemeSelector(props) {
  const { show, setShow, setTheme } = props;
  const themes = require('./themes.json');

  const changeTheme = (theme) => {
    console.log('Themes/Selector.js changeTheme() theme: ' + theme);
    setTheme(theme);
  };

  const handleClose = () => {
    console.log('Themes/Selector.js hide invoked');
    setShow(false);
  };

  const renderColorCircle = (theme) => (
    <div
      key={theme.name}
      className="m-3 d-flex align-items-center justify-content-center rounded-circle"
      onClick={() => changeTheme(theme.name)}
      style={{
        cursor: 'pointer',
        width: '10vmin',
        height: '10vmin',
        background: `linear-gradient(135deg, ${theme.primary} 50%, ${theme.secondary} 50%)`,
        color: theme.primary
      }}
    >
      <p style={{
            background: `linear-gradient(135deg, ${theme.secondary} 50%, ${theme.primary}) 50%`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            padding: '0.1em 0.4em',
            fontWeight: 'bold'
        }}
        >{theme.label}</p>
    </div>
  );

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="d-flex align-items-center justify-content-between m-0 px-3 py-2 theme-primary">
        <Modal.Title className="m-0">CHOOSE THEME</Modal.Title>
        <button className="btn-close" onClick={() => setShow(false)} />
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
