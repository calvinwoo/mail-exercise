import React from 'react';
import './styles.css';

const MailButton = ({ mail, onClick, isOpen }) => {
  return (
    <button className="mail-button btn btn-link" onClick={onClick}>
      {isOpen ? <i className="fa fa-eye" /> : <i className="fa fa-eye-slash" />}
    </button>
  );
};

export default MailButton;
