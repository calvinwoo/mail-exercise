import React from 'react';
import './styles.css';

const MailButton = ({ mail, onClick }) => {
  return (
    <button className="mail-button btn btn-link" onClick={onClick}>
      <i className="fa fa-eye" />
    </button>
  );
};

export default MailButton;
