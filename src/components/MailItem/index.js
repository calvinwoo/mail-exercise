import React from 'react';
import './styles.css';

const MailItem = ({ mail }) => {
  return (
    <li className="mail-item list-group-item list-group-item-action">
      {mail.subject}
    </li>
  );
};

export default MailItem;
